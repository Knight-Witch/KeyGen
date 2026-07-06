export const KEYGEN_STYLES = `
.kwkg-root {
  box-sizing: border-box;
  width: 100%;
  min-height: 480px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 18px;
  background: radial-gradient(circle at top left, rgba(128, 22, 255, 0.18), transparent 34%), #101014;
  color: #f4f0ff;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.kwkg-root * {
  box-sizing: border-box;
}

.kwkg-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 22px;
}

.kwkg-kicker {
  margin: 0 0 6px;
  color: #bfa7ff;
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.kwkg-title {
  margin: 0;
  font-size: clamp(28px, 4vw, 44px);
  line-height: 1;
}

.kwkg-subtitle {
  margin: 10px 0 0;
  max-width: 680px;
  color: #c8c2d8;
}

.kwkg-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 360px);
  gap: 20px;
}

.kwkg-panel {
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.045);
  padding: 18px;
}

.kwkg-preview {
  display: grid;
  min-height: 320px;
  place-items: center;
}

.kwkg-keycap {
  position: relative;
  width: min(72vw, 360px);
  aspect-ratio: 1 / 0.86;
  border-radius: 18% 18% 24% 24%;
  background: linear-gradient(145deg, #17171b, #08080a);
  box-shadow: inset 0 0 0 2px #2b2b34, inset 0 -28px 44px rgba(255, 255, 255, 0.05), 0 26px 70px rgba(0, 0, 0, 0.42);
}

.kwkg-primary-legend,
.kwkg-secondary-legend {
  position: absolute;
  transform: translate(-50%, -50%);
  line-height: 1;
  text-shadow: 0 0 18px rgba(255, 255, 255, 0.9), 0 0 42px rgba(167, 121, 255, 0.5);
}

.kwkg-primary-legend {
  color: #ffffff;
  font-weight: 700;
}

.kwkg-secondary-legend {
  color: rgba(220, 206, 255, 0.7);
  font-weight: 600;
}

.kwkg-control {
  display: grid;
  gap: 7px;
  margin-bottom: 14px;
}

.kwkg-control label {
  color: #d7d0e7;
  font-size: 13px;
}

.kwkg-input {
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.32);
  color: #fff;
  padding: 10px 12px;
  font: inherit;
}

.kwkg-button-row {
  display: grid;
  gap: 10px;
  margin-top: 16px;
}

.kwkg-button {
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  background: #f0e7ff;
  color: #111014;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  padding: 10px 14px;
}

.kwkg-button[disabled] {
  cursor: not-allowed;
  opacity: 0.45;
}

.kwkg-meta,
.kwkg-issues {
  margin: 12px 0 0;
  color: #bcb5ca;
  font-size: 13px;
}

@media (max-width: 760px) {
  .kwkg-grid {
    grid-template-columns: 1fr;
  }

  .kwkg-header {
    display: block;
  }
}
`;
