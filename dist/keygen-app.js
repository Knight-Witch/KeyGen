(function () {
  'use strict';

  var VERSION = 'KG-2026-07-06-0009-calibration';
  var TARGET = '#keygen-app';
  var DEFAULTS = {
    primary: 'A',
    secondary: 'Ф',
    keyboard: 'Redragon K580RGB',
    keySize: '1u',
    nozzle: '0.2 mm FDM'
  };
  var CALIBRATION = {
    bottomWidthMm: 18,
    bottomDepthMm: 18,
    heightMm: 8.8,
    wallMm: 1.2,
    topThicknessMm: 1.5,
    socketOuterMm: 5.8,
    socketSlotLengthMm: 4.2,
    socketSlotWidthMm: 1.3,
    socketHeightMm: 5.8
  };
  var CSS = '.kwkg-root{box-sizing:border-box;width:100%;min-height:460px;padding:24px;border:1px solid rgba(255,255,255,.14);border-radius:18px;background:radial-gradient(circle at top left,rgba(128,22,255,.18),transparent 34%),#101014;color:#f4f0ff;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}.kwkg-root *{box-sizing:border-box}.kwkg-header{display:flex;justify-content:space-between;gap:16px;margin-bottom:22px}.kwkg-kicker{margin:0 0 6px;color:#bfa7ff;font-size:12px;letter-spacing:.16em;text-transform:uppercase}.kwkg-title{margin:0;font-size:clamp(28px,4vw,44px);line-height:1}.kwkg-subtitle{margin:10px 0 0;max-width:680px;color:#c8c2d8}.kwkg-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(280px,360px);gap:20px}.kwkg-panel{border:1px solid rgba(255,255,255,.12);border-radius:14px;background:rgba(255,255,255,.045);padding:18px}.kwkg-preview{display:grid;min-height:320px;place-items:center}.kwkg-keycap{position:relative;width:min(72vw,360px);aspect-ratio:1/.86;border-radius:18% 18% 24% 24%;background:linear-gradient(145deg,#17171b,#08080a);box-shadow:inset 0 0 0 2px #2b2b34,inset 0 -28px 44px rgba(255,255,255,.05),0 26px 70px rgba(0,0,0,.42)}.kwkg-primary,.kwkg-secondary{position:absolute;transform:translate(-50%,-50%);line-height:1;text-shadow:0 0 18px rgba(255,255,255,.9),0 0 42px rgba(167,121,255,.5)}.kwkg-primary{left:50%;top:48%;font-size:104px;color:#fff;font-weight:700}.kwkg-secondary{left:76%;top:24%;font-size:38px;color:rgba(220,206,255,.7);font-weight:600}.kwkg-control{display:grid;gap:7px;margin-bottom:14px}.kwkg-control label{color:#d7d0e7;font-size:13px}.kwkg-input{width:100%;border:1px solid rgba(255,255,255,.16);border-radius:10px;background:rgba(0,0,0,.32);color:#fff;padding:10px 12px;font:inherit}.kwkg-buttons{display:grid;gap:10px;margin-top:16px}.kwkg-button{border:1px solid rgba(255,255,255,.18);border-radius:999px;background:#f0e7ff;color:#111014;cursor:pointer;font:inherit;font-weight:700;padding:10px 14px}.kwkg-button[disabled]{cursor:not-allowed;opacity:.45}.kwkg-meta,.kwkg-issues{margin:12px 0 0;color:#bcb5ca;font-size:13px}.kwkg-debug{margin:14px 0 0;padding:10px 12px;border-radius:10px;background:rgba(255,255,255,.08);color:#d9d1ee;font-size:12px;word-break:break-word}@media(max-width:760px){.kwkg-grid{grid-template-columns:1fr}.kwkg-header{display:block}}';

  function addStyles() {
    if (document.getElementById('kwkg-styles')) return;
    var style = document.createElement('style');
    style.id = 'kwkg-styles';
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  function spec(root) {
    var primary = root.querySelector('[data-kwkg-input="primary"]');
    var secondary = root.querySelector('[data-kwkg-input="secondary"]');
    return {
      version: VERSION,
      target: DEFAULTS.keyboard,
      keySize: DEFAULTS.keySize,
      nozzle: DEFAULTS.nozzle,
      primary: primary && primary.value ? primary.value : DEFAULTS.primary,
      secondary: secondary && secondary.value ? secondary.value : DEFAULTS.secondary,
      calibration: CALIBRATION
    };
  }

  function update(root) {
    var data = spec(root);
    var primary = root.querySelector('[data-kwkg-preview="primary"]');
    var secondary = root.querySelector('[data-kwkg-preview="secondary"]');
    var issues = root.querySelector('[data-kwkg-issues]');
    if (primary) primary.textContent = data.primary;
    if (secondary) secondary.textContent = data.secondary;
    if (issues) issues.textContent = data.primary.trim() ? 'Calibration STL export is active. Print this rough cap first to check basic scale and switch fit.' : 'Primary legend text is required.';
  }

  function sub(a, b) {
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  }

  function cross(a, b) {
    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  }

  function normalize(v) {
    var length = Math.hypot(v[0], v[1], v[2]);
    return length ? [v[0] / length, v[1] / length, v[2] / length] : [0, 0, 0];
  }

  function normal(tri) {
    return normalize(cross(sub(tri[1], tri[0]), sub(tri[2], tri[0])));
  }

  function fmt(n) {
    return Number.isInteger(n) ? String(n) : n.toFixed(5).replace(/0+$/, '').replace(/\.$/, '');
  }

  function box(center, size) {
    var cx = center[0], cy = center[1], cz = center[2];
    var sx = size[0], sy = size[1], sz = size[2];
    var x0 = cx - sx / 2, x1 = cx + sx / 2;
    var y0 = cy - sy / 2, y1 = cy + sy / 2;
    var z0 = cz - sz / 2, z1 = cz + sz / 2;
    var p000 = [x0, y0, z0], p100 = [x1, y0, z0], p110 = [x1, y1, z0], p010 = [x0, y1, z0];
    var p001 = [x0, y0, z1], p101 = [x1, y0, z1], p111 = [x1, y1, z1], p011 = [x0, y1, z1];
    return [
      [p000, p100, p110], [p000, p110, p010],
      [p001, p011, p111], [p001, p111, p101],
      [p000, p001, p101], [p000, p101, p100],
      [p100, p101, p111], [p100, p111, p110],
      [p110, p111, p011], [p110, p011, p010],
      [p010, p011, p001], [p010, p001, p000]
    ];
  }

  function calibrationBoxes() {
    var c = CALIBRATION;
    var w = c.bottomWidthMm, d = c.bottomDepthMm, h = c.heightMm, wall = c.wallMm, top = c.topThicknessMm;
    var sideH = h / 2;
    var boxes = [
      { center: [0, 0, h - top / 2], size: [w, d, top] },
      { center: [-(w - wall) / 2, 0, sideH / 2], size: [wall, d, sideH] },
      { center: [(w - wall) / 2, 0, sideH / 2], size: [wall, d, sideH] },
      { center: [0, -(d - wall) / 2, sideH / 2], size: [w - 2 * wall, wall, sideH] },
      { center: [0, (d - wall) / 2, sideH / 2], size: [w - 2 * wall, wall, sideH] }
    ];
    var outer = c.socketOuterMm / 2;
    var slotLength = c.socketSlotLengthMm / 2;
    var slotWidth = c.socketSlotWidthMm / 2;
    var cuts = [-outer, -slotLength, -slotWidth, slotWidth, slotLength, outer];
    for (var xi = 0; xi < cuts.length - 1; xi += 1) {
      for (var yi = 0; yi < cuts.length - 1; yi += 1) {
        var x0 = cuts[xi], x1 = cuts[xi + 1], y0 = cuts[yi], y1 = cuts[yi + 1];
        var cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
        var inHorizontal = Math.abs(cy) <= slotWidth && Math.abs(cx) <= slotLength;
        var inVertical = Math.abs(cx) <= slotWidth && Math.abs(cy) <= slotLength;
        if (inHorizontal || inVertical) continue;
        boxes.push({ center: [cx, cy, c.socketHeightMm / 2], size: [x1 - x0, y1 - y0, c.socketHeightMm] });
      }
    }
    return boxes;
  }

  function calibrationStl() {
    var tris = [];
    calibrationBoxes().forEach(function (b) {
      tris = tris.concat(box(b.center, b.size));
    });
    var lines = ['solid keygen_redragon_k580_1u_calibration'];
    tris.forEach(function (tri) {
      var n = normal(tri);
      lines.push('  facet normal ' + fmt(n[0]) + ' ' + fmt(n[1]) + ' ' + fmt(n[2]));
      lines.push('    outer loop');
      tri.forEach(function (v) { lines.push('      vertex ' + fmt(v[0]) + ' ' + fmt(v[1]) + ' ' + fmt(v[2])); });
      lines.push('    endloop');
      lines.push('  endfacet');
    });
    lines.push('endsolid keygen_redragon_k580_1u_calibration');
    return lines.join('\n');
  }

  function downloadText(filename, contents, type) {
    var blob = new Blob([contents], { type: type });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  function showFatal(message) {
    var box = document.createElement('div');
    box.style.cssText = 'box-sizing:border-box;margin:16px 0;padding:16px;border:1px solid #ff8a8a;border-radius:12px;background:#240b0b;color:#ffdede;font-family:ui-sans-serif,system-ui,sans-serif';
    box.textContent = 'KeyGen failed to mount: ' + message;
    document.body.appendChild(box);
  }

  function mount(target) {
    try {
      var root = target instanceof HTMLElement ? target : document.querySelector(target || TARGET);
      if (!root) {
        showFatal('missing #keygen-app container');
        return;
      }
      addStyles();
      root.classList.add('kwkg-root');
      root.setAttribute('data-keygen-mounted', VERSION);
      root.innerHTML = '<header class="kwkg-header"><div><p class="kwkg-kicker">Knight Witch / KeyGen Prototype</p><h1 class="kwkg-title">Dual-Legend Keycap Generator</h1><p class="kwkg-subtitle">Direct embed test shell for a Redragon K580RGB 1u FDM keycap. This build enables the first rough calibration STL for physical fit testing.</p></div><p class="kwkg-meta">' + VERSION + '</p></header><div class="kwkg-grid"><section class="kwkg-panel kwkg-preview"><div class="kwkg-keycap"><span class="kwkg-primary" data-kwkg-preview="primary"></span><span class="kwkg-secondary" data-kwkg-preview="secondary"></span></div></section><aside class="kwkg-panel"><div class="kwkg-control"><label for="kwkg-primary">Primary legend</label><input id="kwkg-primary" class="kwkg-input" data-kwkg-input="primary" maxlength="4" value="A"></div><div class="kwkg-control"><label for="kwkg-secondary">Secondary legend</label><input id="kwkg-secondary" class="kwkg-input" data-kwkg-input="secondary" maxlength="4" value="Ф"></div><p class="kwkg-meta">Target: Redragon K580RGB / 1u / 0.2 mm FDM</p><p class="kwkg-issues" data-kwkg-issues></p><div class="kwkg-buttons"><button class="kwkg-button" type="button" data-kwkg-download-stl>Download calibration STL</button><button class="kwkg-button" type="button" data-kwkg-download>Download dev spec JSON</button><button class="kwkg-button" type="button" disabled>3MF export pending geometry core</button></div><p class="kwkg-debug">Debug: ' + VERSION + ' mounted from ' + (document.currentScript && document.currentScript.src ? document.currentScript.src : 'inline or cached script') + '</p></aside></div>';
      root.querySelectorAll('[data-kwkg-input]').forEach(function (input) {
        input.addEventListener('input', function () { update(root); });
      });
      var specButton = root.querySelector('[data-kwkg-download]');
      if (specButton) specButton.addEventListener('click', function () { downloadText('keygen-dev-spec.json', JSON.stringify(spec(root), null, 2), 'application/json'); });
      var stlButton = root.querySelector('[data-kwkg-download-stl]');
      if (stlButton) stlButton.addEventListener('click', function () { downloadText('keygen-redragon-k580-1u-calibration.stl', calibrationStl(), 'model/stl'); });
      update(root);
    } catch (error) {
      showFatal(error && error.message ? error.message : String(error));
    }
  }

  window.__KEYGEN_EMBED_LOADED__ = VERSION;
  window.KeyGen = {
    version: VERSION,
    mount: mount,
    getSpec: function () {
      var root = document.querySelector(TARGET);
      return root ? spec(root) : null;
    },
    generateCalibrationStl: calibrationStl
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { mount(); });
  else mount();
})();
