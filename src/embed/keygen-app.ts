import { DEFAULT_KEYCAP_SPEC } from '../core/keycap/defaults';
import type { KeycapSpec } from '../core/keycap/types';
import { validateKeycapSpec } from '../core/keycap/validation';
import { KEYGEN_STYLES } from './styles';

const APP_VERSION = 'KG.2026.07.06.0008.dev';
const STYLE_ID = 'kwkg-styles';
const ROOT_SELECTOR = '#keygen-app';

declare global {
  interface Window {
    KeyGen?: {
      version: string;
      mount: (target?: string | HTMLElement) => void;
      getDefaultSpec: () => KeycapSpec;
    };
  }
}

function injectStyles(): void {
  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = KEYGEN_STYLES;
  document.head.appendChild(style);
}

function resolveTarget(target?: string | HTMLElement): HTMLElement | null {
  if (target instanceof HTMLElement) return target;
  return document.querySelector<HTMLElement>(target || ROOT_SELECTOR);
}

function readSpec(root: HTMLElement): KeycapSpec {
  const primaryInput = root.querySelector<HTMLInputElement>('[data-kwkg-input="primary"]');
  const secondaryInput = root.querySelector<HTMLInputElement>('[data-kwkg-input="secondary"]');

  return {
    ...DEFAULT_KEYCAP_SPEC,
    primaryLegend: {
      ...DEFAULT_KEYCAP_SPEC.primaryLegend,
      text: primaryInput?.value || DEFAULT_KEYCAP_SPEC.primaryLegend.text
    },
    secondaryLegend: {
      ...DEFAULT_KEYCAP_SPEC.secondaryLegend,
      text: secondaryInput?.value || DEFAULT_KEYCAP_SPEC.secondaryLegend.text
    }
  };
}

function updatePreview(root: HTMLElement): void {
  const spec = readSpec(root);
  const primary = root.querySelector<HTMLElement>('[data-kwkg-preview="primary"]');
  const secondary = root.querySelector<HTMLElement>('[data-kwkg-preview="secondary"]');
  const issues = root.querySelector<HTMLElement>('[data-kwkg-issues]');

  if (primary) {
    primary.textContent = spec.primaryLegend.text;
    primary.style.left = `${spec.primaryLegend.xPercent}%`;
    primary.style.top = `${spec.primaryLegend.yPercent}%`;
    primary.style.fontSize = `${spec.primaryLegend.sizePercent * 1.8}px`;
  }

  if (secondary) {
    secondary.textContent = spec.secondaryLegend.text;
    secondary.style.left = `${spec.secondaryLegend.xPercent}%`;
    secondary.style.top = `${spec.secondaryLegend.yPercent}%`;
    secondary.style.fontSize = `${spec.secondaryLegend.sizePercent * 1.25}px`;
  }

  if (issues) {
    const currentIssues = validateKeycapSpec(spec);
    issues.textContent = currentIssues.length
      ? currentIssues.map((issue) => issue.message).join(' ')
      : 'Prototype check: no blocking validation issues.';
  }
}

function downloadSpec(root: HTMLElement): void {
  const spec = readSpec(root);
  const blob = new Blob([JSON.stringify({ version: APP_VERSION, spec }, null, 2)], {
    type: 'application/json'
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'keygen-dev-spec.json';
  link.click();
  URL.revokeObjectURL(url);
}

function render(root: HTMLElement): void {
  const spec = DEFAULT_KEYCAP_SPEC;

  root.classList.add('kwkg-root');
  root.innerHTML = `
    <header class="kwkg-header">
      <div>
        <p class="kwkg-kicker">Knight Witch / KeyGen Prototype</p>
        <h1 class="kwkg-title">Dual-Legend Keycap Generator</h1>
        <p class="kwkg-subtitle">Direct embed test shell for a Redragon K580RGB 1u FDM keycap. Geometry export is intentionally disabled until the generator core is added.</p>
      </div>
      <p class="kwkg-meta">${APP_VERSION}</p>
    </header>
    <div class="kwkg-grid">
      <section class="kwkg-panel kwkg-preview" aria-label="Keycap preview">
        <div class="kwkg-keycap">
          <span class="kwkg-primary-legend" data-kwkg-preview="primary"></span>
          <span class="kwkg-secondary-legend" data-kwkg-preview="secondary"></span>
        </div>
      </section>
      <aside class="kwkg-panel" aria-label="Prototype controls">
        <div class="kwkg-control">
          <label for="kwkg-primary">Primary legend</label>
          <input id="kwkg-primary" class="kwkg-input" data-kwkg-input="primary" maxlength="4" value="${spec.primaryLegend.text}" />
        </div>
        <div class="kwkg-control">
          <label for="kwkg-secondary">Secondary legend</label>
          <input id="kwkg-secondary" class="kwkg-input" data-kwkg-input="secondary" maxlength="4" value="${spec.secondaryLegend.text}" />
        </div>
        <p class="kwkg-meta">Target: ${spec.keyboardTarget} / ${spec.keySize} / ${spec.nozzleMm} mm FDM</p>
        <p class="kwkg-issues" data-kwkg-issues></p>
        <div class="kwkg-button-row">
          <button class="kwkg-button" type="button" data-kwkg-action="download-spec">Download dev spec JSON</button>
          <button class="kwkg-button" type="button" disabled>STL export pending geometry core</button>
          <button class="kwkg-button" type="button" disabled>3MF export pending geometry core</button>
        </div>
      </aside>
    </div>
  `;
}

export function mount(target?: string | HTMLElement): void {
  const root = resolveTarget(target);
  if (!root) {
    console.warn('KeyGen mount target not found.');
    return;
  }

  injectStyles();
  render(root);
  updatePreview(root);

  root.querySelectorAll<HTMLInputElement>('[data-kwkg-input]').forEach((input) => {
    input.addEventListener('input', () => updatePreview(root));
  });

  root.querySelector<HTMLButtonElement>('[data-kwkg-action="download-spec"]')?.addEventListener('click', () => {
    downloadSpec(root);
  });
}

window.KeyGen = {
  version: APP_VERSION,
  mount,
  getDefaultSpec: () => structuredClone(DEFAULT_KEYCAP_SPEC)
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => mount());
} else {
  mount();
}
