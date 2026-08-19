import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();

const vertices = [];
const faces = [];

const materialOrder = [
  "aluminum_body",
  "corrugation_shadow",
  "body_trim",
  "rear_door",
  "cab_paint",
  "windshield_glass",
  "black_plastic",
  "grille_dark",
  "chrome",
  "headlight_lens",
  "marker_amber",
  "tail_light",
  "chassis_dark",
  "axle_metal",
  "rubber_tire",
  "tire_tread",
  "wheel_rim",
  "tank_silver",
  "mudflap",
];

function vertex(x, y, z) {
  vertices.push([x, y, z]);
  return vertices.length;
}

function addFace(material, indices, name) {
  faces.push({ material, indices, name });
}

function addBox(name, material, min, max) {
  const [x1, y1, z1] = min;
  const [x2, y2, z2] = max;

  const a = vertex(x1, y1, z1);
  const b = vertex(x2, y1, z1);
  const c = vertex(x2, y2, z1);
  const d = vertex(x1, y2, z1);
  const e = vertex(x1, y1, z2);
  const f = vertex(x2, y1, z2);
  const g = vertex(x2, y2, z2);
  const h = vertex(x1, y2, z2);

  addFace(material, [a, b, f, e], name);
  addFace(material, [d, h, g, c], name);
  addFace(material, [a, d, c, b], name);
  addFace(material, [e, f, g, h], name);
  addFace(material, [a, e, h, d], name);
  addFace(material, [b, c, g, f], name);
}

function addQuad(name, material, points) {
  addFace(
    material,
    points.map(([x, y, z]) => vertex(x, y, z)),
    name,
  );
}

function addPrism(name, material, center, halfA, halfB, halfC) {
  const [cx, cy, cz] = center;
  const add = (aSign, bSign, cSign) =>
    vertex(
      cx + halfA[0] * aSign + halfB[0] * bSign + halfC[0] * cSign,
      cy + halfA[1] * aSign + halfB[1] * bSign + halfC[1] * cSign,
      cz + halfA[2] * aSign + halfB[2] * bSign + halfC[2] * cSign,
    );

  const a = add(-1, -1, -1);
  const b = add(1, -1, -1);
  const c = add(1, 1, -1);
  const d = add(-1, 1, -1);
  const e = add(-1, -1, 1);
  const f = add(1, -1, 1);
  const g = add(1, 1, 1);
  const h = add(-1, 1, 1);

  addFace(material, [a, b, f, e], name);
  addFace(material, [d, h, g, c], name);
  addFace(material, [a, d, c, b], name);
  addFace(material, [e, f, g, h], name);
  addFace(material, [a, e, h, d], name);
  addFace(material, [b, c, g, f], name);
}

function addCylinderZ(name, material, center, radius, depth, segments = 48) {
  const [cx, cy, cz] = center;
  const left = [];
  const right = [];

  for (let i = 0; i < segments; i += 1) {
    const angle = (Math.PI * 2 * i) / segments;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    left.push(vertex(x, y, cz - depth / 2));
    right.push(vertex(x, y, cz + depth / 2));
  }

  const centerLeft = vertex(cx, cy, cz - depth / 2);
  const centerRight = vertex(cx, cy, cz + depth / 2);

  for (let i = 0; i < segments; i += 1) {
    const next = (i + 1) % segments;
    addFace(material, [left[i], left[next], right[next], right[i]], name);
    addFace(material, [centerLeft, left[next], left[i]], name);
    addFace(material, [centerRight, right[i], right[next]], name);
  }
}

function addCylinderX(name, material, center, radius, length, segments = 36) {
  const [cx, cy, cz] = center;
  const left = [];
  const right = [];

  for (let i = 0; i < segments; i += 1) {
    const angle = (Math.PI * 2 * i) / segments;
    const y = cy + Math.cos(angle) * radius;
    const z = cz + Math.sin(angle) * radius;
    left.push(vertex(cx - length / 2, y, z));
    right.push(vertex(cx + length / 2, y, z));
  }

  const centerLeft = vertex(cx - length / 2, cy, cz);
  const centerRight = vertex(cx + length / 2, cy, cz);

  for (let i = 0; i < segments; i += 1) {
    const next = (i + 1) % segments;
    addFace(material, [left[i], left[next], right[next], right[i]], name);
    addFace(material, [centerLeft, left[i], left[next]], name);
    addFace(material, [centerRight, right[next], right[i]], name);
  }
}

function addTire(cx, cy, cz, side) {
  const tireDepth = 0.34;
  const outerFaceZ = side > 0 ? cz + tireDepth / 2 : cz - tireDepth / 2;
  const faceOffset = side > 0 ? 0.012 : -0.012;

  addCylinderZ("heavy-rubber-tire", "rubber_tire", [cx, cy, cz], 0.43, tireDepth, 56);
  addCylinderZ("sidewall-detail", "tire_tread", [cx, cy, outerFaceZ + faceOffset], 0.435, 0.024, 56);
  addCylinderZ("steel-wheel-rim", "wheel_rim", [cx, cy, outerFaceZ + faceOffset * 2], 0.235, 0.035, 40);
  addCylinderZ("dark-wheel-hub", "axle_metal", [cx, cy, outerFaceZ + faceOffset * 3], 0.112, 0.04, 32);

  for (let i = 0; i < 10; i += 1) {
    const angle = (Math.PI * 2 * i) / 10;
    const boltX = cx + Math.cos(angle) * 0.155;
    const boltY = cy + Math.sin(angle) * 0.155;
    addCylinderZ("wheel-bolt", "chrome", [boltX, boltY, outerFaceZ + faceOffset * 4], 0.018, 0.028, 12);
  }

  for (let i = 0; i < 28; i += 1) {
    const angle = (Math.PI * 2 * i) / 28;
    const radial = [Math.cos(angle), Math.sin(angle), 0];
    const tangent = [-Math.sin(angle), Math.cos(angle), 0];
    const blockCenter = [cx + radial[0] * 0.45, cy + radial[1] * 0.45, cz];

    addPrism(
      "raised-tire-tread",
      "tire_tread",
      blockCenter,
      [radial[0] * 0.045, radial[1] * 0.045, 0],
      [tangent[0] * 0.04, tangent[1] * 0.04, 0],
      [0, 0, 0.17],
    );
  }
}

function addSideRepeatedBox(name, material, x1, x2, y1, y2, zInner, zOuter) {
  addBox(`${name}-right`, material, [x1, y1, zInner], [x2, y2, zOuter]);
  addBox(`${name}-left`, material, [x1, y1, -zOuter], [x2, y2, -zInner]);
}

function addCargoBox() {
  addBox("corrugated-aluminum-cargo-box", "aluminum_body", [-2.85, 0.12, -1.12], [4.78, 2.32, 1.12]);
  addBox("slightly-darker-roof", "body_trim", [-2.9, 2.32, -1.14], [4.82, 2.4, 1.14]);
  addBox("front-body-header", "body_trim", [-2.92, 0.08, -1.18], [-2.82, 2.4, 1.18]);
  addBox("rear-body-frame", "body_trim", [4.72, 0.06, -1.2], [4.9, 2.42, 1.2]);
  addBox("left-cargo-bottom-rail", "body_trim", [-2.9, 0.02, -1.18], [4.86, 0.18, -1.1]);
  addBox("right-cargo-bottom-rail", "body_trim", [-2.9, 0.02, 1.1], [4.86, 0.18, 1.18]);
  addBox("left-cargo-top-rail", "body_trim", [-2.9, 2.23, -1.18], [4.86, 2.39, -1.1]);
  addBox("right-cargo-top-rail", "body_trim", [-2.9, 2.23, 1.1], [4.86, 2.39, 1.18]);

  for (let i = 0; i < 24; i += 1) {
    const y = 0.28 + i * 0.078;
    addSideRepeatedBox(
      "horizontal-corrugation-shadow",
      "corrugation_shadow",
      -2.86,
      4.8,
      y,
      y + 0.018,
      1.119,
      1.153,
    );
  }

  for (let i = 0; i < 11; i += 1) {
    const x = -2.15 + i * 0.68;
    addSideRepeatedBox("subtle-vertical-panel-joint", "body_trim", x, x + 0.018, 0.18, 2.25, 1.122, 1.145);
  }

  addBox("rear-left-door", "rear_door", [4.9, 0.15, -1.08], [4.94, 2.26, -0.035]);
  addBox("rear-right-door", "rear_door", [4.9, 0.15, 0.035], [4.94, 2.26, 1.08]);
  addBox("rear-center-seal", "black_plastic", [4.945, 0.13, -0.03], [4.985, 2.29, 0.03]);
  addBox("rear-door-top-header", "body_trim", [4.95, 2.18, -1.1], [5.0, 2.34, 1.1]);
  addBox("rear-door-bottom-threshold", "body_trim", [4.95, 0.06, -1.1], [5.02, 0.2, 1.1]);

  [-0.55, 0.55].forEach((z) => {
    addBox("rear-door-locking-bar", "chrome", [4.98, 0.28, z - 0.025], [5.04, 1.95, z + 0.025]);
    addBox("rear-door-locking-handle", "chrome", [5.02, 0.88, z - 0.09], [5.09, 0.96, z + 0.09]);
  });

  [-1.03, 1.03].forEach((z) => {
    for (let y = 0.45; y <= 1.95; y += 0.5) {
      addBox("rear-door-hinge", "body_trim", [4.98, y - 0.07, z - 0.035], [5.06, y + 0.07, z + 0.035]);
    }
  });

  addBox("rear-underride-bar", "chassis_dark", [4.55, -0.56, -1.05], [5.05, -0.43, 1.05]);
  addBox("rear-left-mudflap", "mudflap", [4.48, -0.9, -1.06], [4.58, -0.35, -0.76]);
  addBox("rear-right-mudflap", "mudflap", [4.48, -0.9, 0.76], [4.58, -0.35, 1.06]);
  addBox("rear-left-tail-light", "tail_light", [5.04, -0.24, -1.05], [5.08, -0.1, -0.82]);
  addBox("rear-right-tail-light", "tail_light", [5.04, -0.24, 0.82], [5.08, -0.1, 1.05]);
}

function addCab() {
  addBox("cab-lower-volume", "cab_paint", [-4.72, -0.56, -0.9], [-3.18, 0.58, 0.9]);
  addBox("cab-upper-volume", "cab_paint", [-4.42, 0.52, -0.88], [-3.08, 1.43, 0.88]);
  addBox("cab-roof-cap", "cab_paint", [-4.48, 1.4, -0.96], [-2.98, 1.58, 0.96]);
  addBox("front-visor", "black_plastic", [-4.74, 1.35, -0.92], [-4.34, 1.49, 0.92]);
  addBox("front-bumper", "black_plastic", [-4.9, -0.67, -0.98], [-4.61, -0.32, 0.98]);
  addBox("lower-front-apron", "cab_paint", [-4.82, -0.34, -0.88], [-4.6, -0.12, 0.88]);

  addQuad("sloped-windshield", "windshield_glass", [
    [-4.5, 0.62, -0.64],
    [-4.5, 0.62, 0.64],
    [-4.24, 1.3, 0.6],
    [-4.24, 1.3, -0.6],
  ]);
  addBox("windshield-bottom-seal", "black_plastic", [-4.55, 0.58, -0.7], [-4.49, 0.64, 0.7]);
  addBox("windshield-top-seal", "black_plastic", [-4.28, 1.28, -0.68], [-4.18, 1.36, 0.68]);
  addBox("windshield-center-post", "black_plastic", [-4.52, 0.62, -0.025], [-4.22, 1.31, 0.025]);

  [-1, 1].forEach((side) => {
    const zOuter = side > 0 ? 0.91 : -0.91;
    const zInner = side > 0 ? 0.88 : -0.88;
    const minZ = Math.min(zInner, zOuter);
    const maxZ = Math.max(zInner, zOuter);

    addBox("side-window", "windshield_glass", [-4.12, 0.66, minZ], [-3.42, 1.23, maxZ]);
    addBox("side-door-panel-line", "black_plastic", [-3.38, -0.42, minZ], [-3.34, 1.28, maxZ]);
    addBox("side-window-a-pillar", "black_plastic", [-4.17, 0.6, minZ], [-4.1, 1.28, maxZ]);
    addBox("door-handle", "black_plastic", [-3.55, 0.18, minZ], [-3.32, 0.25, maxZ]);
    addBox("cab-step-upper", "tank_silver", [-4.14, -0.68, side > 0 ? 0.92 : -1.08], [-3.45, -0.55, side > 0 ? 1.08 : -0.92]);
    addBox("cab-step-lower", "tank_silver", [-4.23, -0.82, side > 0 ? 0.94 : -1.12], [-3.36, -0.69, side > 0 ? 1.12 : -0.94]);
    addBox("mirror-arm", "black_plastic", [-4.48, 0.88, side > 0 ? 0.88 : -1.18], [-4.12, 0.96, side > 0 ? 1.18 : -0.88]);
    addBox("mirror-head", "black_plastic", [-4.54, 0.65, side > 0 ? 1.16 : -1.28], [-4.25, 1.1, side > 0 ? 1.28 : -1.16]);
  });

  addBox("front-grille-dark", "grille_dark", [-4.91, -0.08, -0.62], [-4.84, 0.42, 0.62]);
  for (let i = 0; i < 5; i += 1) {
    const y = -0.02 + i * 0.1;
    addBox("front-grille-horizontal-chrome", "chrome", [-4.93, y, -0.61], [-4.88, y + 0.02, 0.61]);
  }
  addBox("front-grille-vertical-chrome", "chrome", [-4.94, -0.08, -0.035], [-4.88, 0.43, 0.035]);
  addPrism(
    "volvo-diagonal-slash",
    "chrome",
    [-4.955, 0.17, 0],
    [0.018, 0, 0],
    [0, 0.19, 0.24],
    [0, 0.018, -0.014],
  );
  addBox("volvo-badge", "chrome", [-4.96, 0.17, -0.12], [-4.9, 0.25, 0.12]);

  [-0.68, 0.68].forEach((z) => {
    addBox("headlight-lens", "headlight_lens", [-4.93, -0.25, z - 0.18], [-4.86, -0.08, z + 0.18]);
    addBox("indicator-lens", "marker_amber", [-4.94, -0.09, z - 0.18], [-4.87, 0.01, z + 0.18]);
  });

  addBox("license-plate", "chrome", [-4.94, -0.52, -0.2], [-4.88, -0.43, 0.2]);
  addBox("cab-rear-shadow-gap", "black_plastic", [-3.08, -0.46, -0.95], [-2.95, 1.34, 0.95]);
}

function addChassisAndDetails() {
  addBox("left-chassis-rail", "chassis_dark", [-4.55, -0.28, -0.48], [4.72, -0.08, -0.36]);
  addBox("right-chassis-rail", "chassis_dark", [-4.55, -0.28, 0.36], [4.72, -0.08, 0.48]);

  for (let x = -4.25; x <= 4.4; x += 0.75) {
    addBox("chassis-crossmember", "chassis_dark", [x, -0.24, -0.54], [x + 0.08, -0.08, 0.54]);
  }

  addBox("left-side-underride-guard", "chassis_dark", [-2.55, -0.55, -1.05], [1.85, -0.47, -0.93]);
  addBox("right-side-underride-guard", "chassis_dark", [-2.55, -0.55, 0.93], [1.85, -0.47, 1.05]);
  addBox("left-side-guard-post-a", "chassis_dark", [-2.36, -0.58, -1.03], [-2.28, -0.14, -0.93]);
  addBox("left-side-guard-post-b", "chassis_dark", [1.53, -0.58, -1.03], [1.61, -0.14, -0.93]);
  addBox("right-side-guard-post-a", "chassis_dark", [-2.36, -0.58, 0.93], [-2.28, -0.14, 1.03]);
  addBox("right-side-guard-post-b", "chassis_dark", [1.53, -0.58, 0.93], [1.61, -0.14, 1.03]);

  addCylinderX("fuel-tank-left", "tank_silver", [-2.1, -0.42, -0.83], 0.22, 0.95, 36);
  addCylinderX("air-tank-right-front", "tank_silver", [-1.55, -0.5, 0.78], 0.14, 0.65, 28);
  addCylinderX("air-tank-right-rear", "tank_silver", [-0.8, -0.5, 0.78], 0.14, 0.65, 28);
  addBox("battery-box", "chassis_dark", [-2.65, -0.58, 0.62], [-1.95, -0.2, 1.0]);
  addBox("toolbox-left", "tank_silver", [-1.2, -0.58, -1.0], [-0.45, -0.2, -0.62]);
  addCylinderX("exhaust-muffler", "tank_silver", [-3.04, -0.2, 0.77], 0.16, 0.58, 28);
  addBox("vertical-exhaust-stack", "black_plastic", [-3.08, -0.1, 0.75], [-2.96, 1.4, 0.87]);
  addBox("exhaust-top-cap", "black_plastic", [-3.12, 1.35, 0.7], [-2.86, 1.46, 0.93]);

  [1.62, 2.58].forEach((x) => {
    addBox("rear-axle", "axle_metal", [x - 0.08, -0.48, -1.02], [x + 0.08, -0.34, 1.02]);
    addBox("rear-suspension-pack-left", "chassis_dark", [x - 0.36, -0.23, -1.02], [x + 0.36, -0.12, -0.68]);
    addBox("rear-suspension-pack-right", "chassis_dark", [x - 0.36, -0.23, 0.68], [x + 0.36, -0.12, 1.02]);
  });
  addBox("front-axle", "axle_metal", [-4.08, -0.48, -1.0], [-3.92, -0.34, 1.0]);

  addBox("rear-left-fender", "black_plastic", [1.2, -0.12, -1.1], [3.05, 0.2, -0.73]);
  addBox("rear-right-fender", "black_plastic", [1.2, -0.12, 0.73], [3.05, 0.2, 1.1]);
  addBox("front-left-mudguard", "black_plastic", [-4.55, -0.14, -1.07], [-3.55, 0.15, -0.72]);
  addBox("front-right-mudguard", "black_plastic", [-4.55, -0.14, 0.72], [-3.55, 0.15, 1.07]);

  const wheelCenters = [-4.02, 1.62, 2.58];
  wheelCenters.forEach((x) => {
    addTire(x, -0.52, -0.98, -1);
    addTire(x, -0.52, 0.98, 1);
  });
}

function addMarkersAndFinishingTouches() {
  [-1.165, 1.165].forEach((z) => {
    [-1.7, 0.15, 1.95, 3.75].forEach((x) => {
      addBox("amber-side-marker", "marker_amber", [x, 0.08, z - Math.sign(z) * 0.015], [x + 0.08, 0.15, z + Math.sign(z) * 0.015]);
    });
  });
  addBox("black-shadow-under-cargo", "chassis_dark", [-2.9, -0.02, -0.95], [4.55, 0.1, 0.95]);
  addBox("cab-cargo-shadow-gap", "black_plastic", [-3.02, -0.46, -0.96], [-2.95, 1.5, 0.96]);
}

function formatNumber(value) {
  return Number(value).toFixed(4);
}

function buildObj() {
  const lines = [
    "mtllib volvo_vm270_chassis.mtl",
    "# Volvo VM 270 6x2 corrugated box truck model generated by scripts/generate-volvo-box-truck-model.mjs",
    "",
  ];

  vertices.forEach(([x, y, z]) => {
    lines.push(`v ${formatNumber(x)} ${formatNumber(y)} ${formatNumber(z)}`);
  });

  lines.push("");
  lines.push("s off");

  let currentMaterial = "";
  let currentName = "";
  faces.forEach(({ material, indices, name }) => {
    if (name !== currentName) {
      lines.push(`g ${name.replace(/[^a-z0-9_-]/gi, "_")}`);
      currentName = name;
    }
    if (material !== currentMaterial) {
      lines.push(`usemtl ${material}`);
      currentMaterial = material;
    }
    lines.push(`f ${indices.join(" ")}`);
  });

  return `${lines.join("\n")}\n`;
}

function buildMtl() {
  const materials = {
    aluminum_body: { kd: [0.78, 0.8, 0.78], ka: [0.25, 0.25, 0.25], ks: [0.55, 0.55, 0.55], ns: 68 },
    corrugation_shadow: { kd: [0.36, 0.37, 0.36], ka: [0.08, 0.08, 0.08], ks: [0.24, 0.24, 0.24], ns: 34 },
    body_trim: { kd: [0.49, 0.51, 0.5], ka: [0.18, 0.18, 0.18], ks: [0.65, 0.65, 0.65], ns: 80 },
    rear_door: { kd: [0.86, 0.87, 0.85], ka: [0.24, 0.24, 0.24], ks: [0.45, 0.45, 0.45], ns: 55 },
    cab_paint: { kd: [0.88, 0.91, 0.92], ka: [0.3, 0.3, 0.3], ks: [0.75, 0.75, 0.75], ns: 90 },
    windshield_glass: { kd: [0.06, 0.09, 0.12], ka: [0.02, 0.02, 0.025], ks: [0.95, 0.95, 0.95], ns: 120, d: 0.78 },
    black_plastic: { kd: [0.025, 0.025, 0.027], ka: [0.01, 0.01, 0.01], ks: [0.18, 0.18, 0.18], ns: 28 },
    grille_dark: { kd: [0.02, 0.022, 0.024], ka: [0.01, 0.01, 0.01], ks: [0.12, 0.12, 0.12], ns: 18 },
    chrome: { kd: [0.82, 0.84, 0.82], ka: [0.28, 0.28, 0.28], ks: [1, 1, 1], ns: 130 },
    headlight_lens: { kd: [0.9, 0.94, 0.96], ka: [0.3, 0.3, 0.3], ks: [1, 1, 1], ns: 100, d: 0.88 },
    marker_amber: { kd: [1, 0.48, 0.12], ka: [0.3, 0.12, 0.03], ks: [0.7, 0.42, 0.18], ns: 80 },
    tail_light: { kd: [0.95, 0.04, 0.035], ka: [0.32, 0.02, 0.02], ks: [0.65, 0.18, 0.18], ns: 75 },
    chassis_dark: { kd: [0.045, 0.045, 0.05], ka: [0.015, 0.015, 0.016], ks: [0.22, 0.22, 0.22], ns: 32 },
    axle_metal: { kd: [0.38, 0.38, 0.4], ka: [0.12, 0.12, 0.12], ks: [0.7, 0.7, 0.72], ns: 72 },
    rubber_tire: { kd: [0.022, 0.022, 0.022], ka: [0.008, 0.008, 0.008], ks: [0.04, 0.04, 0.04], ns: 8 },
    tire_tread: { kd: [0.006, 0.006, 0.006], ka: [0.002, 0.002, 0.002], ks: [0.035, 0.035, 0.035], ns: 8 },
    wheel_rim: { kd: [0.58, 0.6, 0.59], ka: [0.18, 0.18, 0.18], ks: [0.82, 0.82, 0.82], ns: 95 },
    tank_silver: { kd: [0.64, 0.66, 0.65], ka: [0.22, 0.22, 0.22], ks: [0.9, 0.9, 0.88], ns: 110 },
    mudflap: { kd: [0.018, 0.018, 0.02], ka: [0.005, 0.005, 0.006], ks: [0.05, 0.05, 0.05], ns: 8 },
  };

  const lines = ["# Volvo VM 270 corrugated box truck materials", ""];
  materialOrder.forEach((name) => {
    const material = materials[name];
    lines.push(`newmtl ${name}`);
    lines.push(`Kd ${material.kd.join(" ")}`);
    lines.push(`Ka ${material.ka.join(" ")}`);
    lines.push(`Ks ${material.ks.join(" ")}`);
    lines.push(`Ns ${material.ns}`);
    if (material.d !== undefined) {
      lines.push(`d ${material.d}`);
    }
    lines.push("");
  });

  return lines.join("\n");
}

function writeModel() {
  addCargoBox();
  addCab();
  addChassisAndDetails();
  addMarkersAndFinishingTouches();

  const obj = buildObj();
  const mtl = buildMtl();
  const targets = [
    path.join(rootDir, "public"),
    rootDir,
  ];

  targets.forEach((targetDir) => {
    mkdirSync(targetDir, { recursive: true });
    writeFileSync(path.join(targetDir, "volvo_vm270_chassis.obj"), obj, "utf8");
    writeFileSync(path.join(targetDir, "volvo_vm270_chassis.mtl"), mtl, "utf8");
  });

  console.log(`Generated ${vertices.length} vertices and ${faces.length} faces.`);
}

writeModel();

