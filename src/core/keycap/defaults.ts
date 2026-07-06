import type { KeycapSpec } from './types';

export const DEFAULT_KEYCAP_SPEC: KeycapSpec = {
  keyboardTarget: 'Redragon K580RGB',
  keySize: '1u',
  printProcess: 'fdm',
  nozzleMm: 0.2,
  primaryLegend: {
    role: 'primary',
    text: 'A',
    script: 'latin',
    sizePercent: 58,
    xPercent: 50,
    yPercent: 48
  },
  secondaryLegend: {
    role: 'secondary',
    text: 'Ф',
    script: 'cyrillic',
    sizePercent: 30,
    xPercent: 76,
    yPercent: 24
  }
};
