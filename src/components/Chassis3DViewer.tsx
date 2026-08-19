import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import "./Chassis3DViewer.css";

type PresetView = "perspective" | "top" | "bottom" | "left-side" | "right-side" | "front" | "rear";

const CAMERA_TARGET = new THREE.Vector3(0.1, 0.62, 0);

const materialOverrides: Record<string, THREE.MeshStandardMaterialParameters> = {
  aluminum_body: {
    color: 0xc9cbc8,
    roughness: 0.36,
    metalness: 0.62,
    envMapIntensity: 1.1,
  },
  corrugation_shadow: {
    color: 0x4d4f4e,
    roughness: 0.5,
    metalness: 0.45,
    envMapIntensity: 0.65,
  },
  body_trim: {
    color: 0x7e827f,
    roughness: 0.28,
    metalness: 0.74,
    envMapIntensity: 1.25,
  },
  rear_door: {
    color: 0xe0e1df,
    roughness: 0.42,
    metalness: 0.38,
    envMapIntensity: 0.9,
  },
  cab_paint: {
    color: 0xdfe5e7,
    roughness: 0.22,
    metalness: 0.12,
    envMapIntensity: 0.9,
  },
  windshield_glass: {
    color: 0x101a24,
    roughness: 0.04,
    metalness: 0.08,
    transparent: true,
    opacity: 0.72,
    envMapIntensity: 1.65,
    side: THREE.DoubleSide,
  },
  black_plastic: {
    color: 0x101114,
    roughness: 0.68,
    metalness: 0.02,
    envMapIntensity: 0.35,
  },
  grille_dark: {
    color: 0x07080a,
    roughness: 0.78,
    metalness: 0.08,
    envMapIntensity: 0.2,
  },
  chrome: {
    color: 0xd8dad7,
    roughness: 0.16,
    metalness: 0.95,
    envMapIntensity: 1.8,
  },
  headlight_lens: {
    color: 0xf2fbff,
    roughness: 0.03,
    metalness: 0.02,
    transparent: true,
    opacity: 0.86,
    emissive: 0x101820,
    emissiveIntensity: 0.12,
    envMapIntensity: 1.45,
  },
  marker_amber: {
    color: 0xff9a2f,
    roughness: 0.16,
    metalness: 0.02,
    emissive: 0xff6d00,
    emissiveIntensity: 0.35,
    envMapIntensity: 0.85,
  },
  tail_light: {
    color: 0xe11920,
    roughness: 0.18,
    metalness: 0.02,
    emissive: 0xaa0000,
    emissiveIntensity: 0.45,
    envMapIntensity: 0.75,
  },
  chassis_dark: {
    color: 0x121318,
    roughness: 0.52,
    metalness: 0.24,
    envMapIntensity: 0.55,
  },
  axle_metal: {
    color: 0x5a5d60,
    roughness: 0.3,
    metalness: 0.86,
    envMapIntensity: 1.15,
  },
  rubber_tire: {
    color: 0x080808,
    roughness: 0.9,
    metalness: 0,
    envMapIntensity: 0.12,
  },
  tire_tread: {
    color: 0x020202,
    roughness: 0.96,
    metalness: 0,
    envMapIntensity: 0.08,
  },
  wheel_rim: {
    color: 0x9b9d9b,
    roughness: 0.22,
    metalness: 0.88,
    envMapIntensity: 1.25,
  },
  tank_silver: {
    color: 0xa9aba8,
    roughness: 0.18,
    metalness: 0.94,
    envMapIntensity: 1.45,
  },
  mudflap: {
    color: 0x050505,
    roughness: 0.88,
    metalness: 0,
    envMapIntensity: 0.08,
  },
};

function disposeMaterial(material: THREE.Material | THREE.Material[]) {
  if (Array.isArray(material)) {
    material.forEach((entry) => entry.dispose());
    return;
  }

  material.dispose();
}

export default function Chassis3DViewer() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);

  const controlsRef = useRef<OrbitControls | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const autoRotateRef = useRef(autoRotate);

  useEffect(() => {
    autoRotateRef.current = autoRotate;
    if (controlsRef.current) {
      controlsRef.current.autoRotate = autoRotate;
    }
  }, [autoRotate]);

  const setPresetView = (view: PresetView) => {
    setAutoRotate(false);

    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;

    switch (view) {
      case "perspective":
        camera.position.set(-8.8, 3.05, 6.7);
        controls.target.copy(CAMERA_TARGET);
        break;
      case "top":
        camera.position.set(0.1, 13.2, 0.01);
        controls.target.copy(CAMERA_TARGET);
        break;
      case "bottom":
        camera.position.set(0.1, -9.2, 0.01);
        controls.target.copy(CAMERA_TARGET);
        break;
      case "left-side":
        camera.position.set(0.1, 1.25, -12.4);
        controls.target.copy(CAMERA_TARGET);
        break;
      case "right-side":
        camera.position.set(0.1, 1.25, 12.4);
        controls.target.copy(CAMERA_TARGET);
        break;
      case "front":
        camera.position.set(-10.8, 1.55, 0);
        controls.target.copy(CAMERA_TARGET);
        break;
      case "rear":
        camera.position.set(11.2, 1.5, 0);
        controls.target.copy(CAMERA_TARGET);
        break;
    }

    controls.update();
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f5f2);

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 600;
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(-8.8, 3.05, 6.7);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    container.appendChild(renderer.domElement);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04);
    scene.environment = environment.texture;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = autoRotateRef.current;
    controls.autoRotateSpeed = -0.6;
    controls.minDistance = 4.8;
    controls.maxDistance = 24.0;
    controls.target.copy(CAMERA_TARGET);
    controlsRef.current = controls;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.25);
    keyLight.position.set(-5.5, 7.5, 5.5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 4096;
    keyLight.shadow.mapSize.height = 4096;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 25;
    keyLight.shadow.camera.left = -7.5;
    keyLight.shadow.camera.right = 7.5;
    keyLight.shadow.camera.top = 7.5;
    keyLight.shadow.camera.bottom = -7.5;
    keyLight.shadow.bias = -0.0003;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xdde7ff, 0.55);
    fillLight.position.set(6, 3.5, -6);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.45);
    rimLight.position.set(4.5, 4.2, 5.5);
    scene.add(rimLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xd2d2ce, 0.38);
    hemiLight.position.set(0, 10, 0);
    scene.add(hemiLight);

    const groundGeo = new THREE.PlaneGeometry(50, 50);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0xf7f7f4,
      roughness: 0.72,
      metalness: 0,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.965;
    ground.receiveShadow = true;
    scene.add(ground);

    let disposed = false;
    const standardMaterials = new Map<string, THREE.MeshStandardMaterial>();
    const getMaterialOverride = (name: string) => {
      const params = materialOverrides[name];
      if (!params) return null;

      const cached = standardMaterials.get(name);
      if (cached) return cached;

      const material = new THREE.MeshStandardMaterial(params);
      material.name = name;
      standardMaterials.set(name, material);
      return material;
    };

    const mtlLoader = new MTLLoader();
    mtlLoader.load(
      "/volvo_vm270_chassis.mtl",
      (materials) => {
        if (disposed) return;
        materials.preload();

        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load(
          "/volvo_vm270_chassis.obj",
          (object) => {
            if (disposed) {
              object.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                  child.geometry.dispose();
                  disposeMaterial(child.material);
                }
              });
              return;
            }

            object.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                child.geometry.computeVertexNormals();

                if (Array.isArray(child.material)) {
                  child.material = child.material.map((material) => getMaterialOverride(material.name) ?? material);
                } else {
                  child.material = getMaterialOverride(child.material.name) ?? child.material;
                }
              }
            });

            scene.add(object);
            setLoading(false);
          },
          undefined,
          (err) => {
            console.error("Error loading OBJ model:", err);
            setError("Erro ao carregar a malha 3D do caminhão.");
            setLoading(false);
          },
        );
      },
      undefined,
      (err) => {
        console.error("Error loading MTL materials:", err);
        setError("Erro ao carregar os acabamentos do modelo 3D.");
        setLoading(false);
      },
    );

    let animationFrameId: number;
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      disposed = true;
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      controls.dispose();
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          disposeMaterial(child.material);
        }
      });
      environment.dispose();
      pmremGenerator.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="chassis-viewer-section">
      <div className="chassis-viewer-container">
        <div className="chassis-viewer-header">
          <h2>Caminhão baú Volvo VM 270 em 3D</h2>
          <p>Modelo 6x2 com carroceria corrugada, cabine detalhada e acabamento de estúdio</p>
        </div>

        <div className="chassis-viewer-layout">
          <div className="chassis-3d-card">
            {loading && (
              <div className="viewer-status">
                <div className="spinner"></div>
                <p>Carregando caminhão baú 3D...</p>
              </div>
            )}

            {error && (
              <div className="viewer-status error">
                <p>⚠️ {error}</p>
              </div>
            )}

            <div
              ref={mountRef}
              className="chassis-canvas"
              style={{ width: "100%", height: "100%", opacity: loading ? 0 : 1 }}
            />

            {!loading && !error && (
              <div className="viewer-watermark">
                <span>Arraste para girar • Scroll para zoom</span>
              </div>
            )}
          </div>

          <div className="chassis-details-grid">
            <div className="chassis-controls-card">
              <h3>Controles de câmera</h3>

              <div className="controls-toggle">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={autoRotate}
                    onChange={(e) => setAutoRotate(e.target.checked)}
                  />
                  <span className="slider round"></span>
                </label>
                <span>Rotação automática</span>
              </div>

              <div className="controls-btn-group">
                <button onClick={() => setPresetView("perspective")} className="control-btn reset-btn">
                  Perspectiva (Reset)
                </button>
                <div className="btn-row">
                  <button onClick={() => setPresetView("left-side")} className="control-btn">
                    Lat. esquerda
                  </button>
                  <button onClick={() => setPresetView("right-side")} className="control-btn">
                    Lat. direita
                  </button>
                </div>
                <div className="btn-row">
                  <button onClick={() => setPresetView("front")} className="control-btn">
                    Frontal
                  </button>
                  <button onClick={() => setPresetView("rear")} className="control-btn">
                    Traseira
                  </button>
                </div>
                <div className="btn-row">
                  <button onClick={() => setPresetView("top")} className="control-btn">
                    Superior
                  </button>
                  <button onClick={() => setPresetView("bottom")} className="control-btn">
                    Inferior
                  </button>
                </div>
              </div>
            </div>

            <div className="chassis-controls-card">
              <div className="chassis-specs">
                <h4>Especificações do caminhão baú</h4>
                <ul>
                  <li>
                    <strong>Configuração:</strong> 6x2 com 3 eixos
                  </li>
                  <li>
                    <strong>Carroceria:</strong> Baú corrugado em alumínio
                  </li>
                  <li>
                    <strong>Cabine:</strong> Volvo VM com grade, faróis e espelhos
                  </li>
                  <li>
                    <strong>Acabamentos:</strong> Tanques, chassis, rodas e para-lamas
                  </li>
                  <li>
                    <strong>Pneus:</strong> 275/80R22.5
                  </li>
                </ul>
              </div>

              <div className="chassis-downloads">
                <h4>Baixar malha 3D</h4>
                <div className="download-links">
                  <a href="/volvo_vm270_chassis.obj" download="volvo_vm270_chassis.obj" className="download-btn">
                    Download .OBJ
                  </a>
                  <a href="/volvo_vm270_chassis.mtl" download="volvo_vm270_chassis.mtl" className="download-btn secondary">
                    Download .MTL
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



