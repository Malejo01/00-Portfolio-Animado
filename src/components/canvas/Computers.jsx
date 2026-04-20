import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";
import malejoLogo from "../../assets/logo.jpg";

const DETAILED_TIMEOUT_MS = 4200;

const hasWebGLSupport = () => {
  if (typeof window === "undefined") return false;

  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl2") ||
          canvas.getContext("webgl") ||
          canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
};

const LightweightComputer = () => {
  const screenTexture = useTexture("/monitor-screen.png");
  const monitorLogoTexture = useTexture(malejoLogo);
  const caseLedLeftRef = useRef();
  const caseLedRightRef = useRef();
  const monitorLogoLedLeftRef = useRef();
  const monitorLogoLedRightRef = useRef();
  const monitorLogoLedTopRef = useRef();
  const monitorLogoLedBottomRef = useRef();
  const keyboardLedRef = useRef();
  const mouseLedRef = useRef();
  const fanOneLedRef = useRef();
  const fanTwoLedRef = useRef();

  useMemo(() => {
    screenTexture.colorSpace = THREE.SRGBColorSpace;
    screenTexture.anisotropy = 16;
    screenTexture.minFilter = THREE.LinearFilter;
    screenTexture.magFilter = THREE.LinearFilter;
    screenTexture.generateMipmaps = false;
    screenTexture.needsUpdate = true;
  }, [screenTexture]);

  useMemo(() => {
    monitorLogoTexture.colorSpace = THREE.SRGBColorSpace;
    monitorLogoTexture.anisotropy = 16;
    monitorLogoTexture.minFilter = THREE.LinearFilter;
    monitorLogoTexture.magFilter = THREE.LinearFilter;
    monitorLogoTexture.needsUpdate = true;
  }, [monitorLogoTexture]);

  const keyboardKeys = useMemo(
    () =>
      Array.from({ length: 100 }, (_, index) => {
        const row = Math.floor(index / 20);
        const column = index % 20;

        return {
          x: -0.92 + column * 0.096,
          y: 0.038,
          z: 0.18 - row * 0.12,
        };
      }),
    []
  );

  const keyboardCableCurve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.5, -1.78, 1.48),
        new THREE.Vector3(-0.5, -1.84, 1.1),
        new THREE.Vector3(-0.2, -1.84, 0.7),
        new THREE.Vector3(0.1,  -1.84, 0.3),
        new THREE.Vector3(0.05, -1.84, -0.08),
        new THREE.Vector3(0.4,  -1.84, -0.32),
        new THREE.Vector3(1.1,  -1.84, -0.43),
        new THREE.Vector3(1.5,  -1.84, -0.44),
        new THREE.Vector3(1.8,  -1.76, -0.44),
        new THREE.Vector3(2.1,  -1.52, -0.44),
        new THREE.Vector3(2.38, -1.22, -0.44),
        new THREE.Vector3(2.55, -1.05, -0.44),
      ]),
    []
  );

  const mouseCableCurve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(1.95, -1.78, 1.22),
        new THREE.Vector3(1.95, -1.84, 0.95),
        new THREE.Vector3(1.6,  -1.84, 0.6),
        new THREE.Vector3(1.1,  -1.84, 0.25),
        new THREE.Vector3(0.6,  -1.84, -0.05),
        new THREE.Vector3(0.4,  -1.84, -0.30),
        new THREE.Vector3(0.9,  -1.84, -0.43),
        new THREE.Vector3(1.4,  -1.84, -0.44),
        new THREE.Vector3(1.75, -1.76, -0.44),
        new THREE.Vector3(2.05, -1.52, -0.44),
        new THREE.Vector3(2.35, -1.22, -0.44),
        new THREE.Vector3(2.55, -1.05, -0.44),
      ]),
    []
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const hueA = (t / 1.5) % 1;
    const hueB = (hueA + 0.24) % 1;
    const hueC = (hueA + 0.52) % 1;
    const pulse = 0.65 + Math.sin(t * 2.2) * 0.25;

    if (caseLedLeftRef.current) {
      caseLedLeftRef.current.emissive.setHSL(hueA, 1, 0.56);
      caseLedLeftRef.current.color.setHSL(hueA, 1, 0.62);
      caseLedLeftRef.current.emissiveIntensity = 1.05 + pulse * 0.7;
    }

    if (caseLedRightRef.current) {
      caseLedRightRef.current.emissive.setHSL(hueB, 1, 0.56);
      caseLedRightRef.current.color.setHSL(hueB, 1, 0.62);
      caseLedRightRef.current.emissiveIntensity = 1.05 + pulse * 0.7;
    }

    if (monitorLogoLedLeftRef.current) {
      monitorLogoLedLeftRef.current.emissive.setHSL(hueC, 1, 0.58);
      monitorLogoLedLeftRef.current.color.setHSL(hueC, 1, 0.64);
      monitorLogoLedLeftRef.current.emissiveIntensity = 1.0 + pulse * 0.6;
    }

    if (monitorLogoLedRightRef.current) {
      monitorLogoLedRightRef.current.emissive.setHSL(hueA, 1, 0.58);
      monitorLogoLedRightRef.current.color.setHSL(hueA, 1, 0.64);
      monitorLogoLedRightRef.current.emissiveIntensity = 1.0 + pulse * 0.6;
    }

    if (monitorLogoLedTopRef.current) {
      monitorLogoLedTopRef.current.emissive.setHSL(hueB, 1, 0.58);
      monitorLogoLedTopRef.current.color.setHSL(hueB, 1, 0.64);
      monitorLogoLedTopRef.current.emissiveIntensity = 1.0 + pulse * 0.6;
    }

    if (monitorLogoLedBottomRef.current) {
      monitorLogoLedBottomRef.current.emissive.setHSL(hueC, 1, 0.58);
      monitorLogoLedBottomRef.current.color.setHSL(hueC, 1, 0.64);
      monitorLogoLedBottomRef.current.emissiveIntensity = 1.0 + pulse * 0.6;
    }

    if (keyboardLedRef.current) {
      keyboardLedRef.current.emissive.setHSL(hueB, 1, 0.58);
      keyboardLedRef.current.color.setHSL(hueB, 1, 0.64);
      keyboardLedRef.current.emissiveIntensity = 0.8 + pulse * 0.55;
    }

    if (mouseLedRef.current) {
      mouseLedRef.current.emissive.setHSL(hueA, 1, 0.6);
      mouseLedRef.current.color.setHSL(hueA, 1, 0.66);
      mouseLedRef.current.emissiveIntensity = 1.0 + pulse * 0.65;
    }

    if (fanOneLedRef.current) {
      fanOneLedRef.current.emissive.setHSL(hueC, 1, 0.58);
      fanOneLedRef.current.color.setHSL(hueC, 1, 0.64);
      fanOneLedRef.current.emissiveIntensity = 0.95 + pulse * 0.6;
    }

    if (fanTwoLedRef.current) {
      fanTwoLedRef.current.emissive.setHSL(hueA, 1, 0.58);
      fanTwoLedRef.current.color.setHSL(hueA, 1, 0.64);
      fanTwoLedRef.current.emissiveIntensity = 0.95 + pulse * 0.6;
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.32} groundColor="black" />
      <pointLight intensity={0.95} />
      <pointLight position={[2.5, -0.2, 2.5]} color="#45b7ff" intensity={0.38} />
      <pointLight position={[-2.6, -0.1, 2.2]} color="#ff3fd8" intensity={0.33} />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1.05} castShadow={false} />

      <group position={[-0.15, -1.86, -1.04]} rotation={[-0.03, -0.2, -0.015]} scale={1.2}>
        <mesh position={[0, -1.9, 0.08]}>
          <boxGeometry args={[6.2, 0.11, 3.35]} />
          <meshStandardMaterial color="#243059" metalness={0.32} roughness={0.58} />
        </mesh>

        <mesh position={[0, -1.95, 1.24]}>
          <boxGeometry args={[4.4, 0.1, 1.0]} />
          <meshStandardMaterial color="#5f2a74" metalness={0.34} roughness={0.5} />
        </mesh>

        <mesh position={[0, -0.12, -0.08]}>
          <boxGeometry args={[4.67, 2.73, 0.16]} />
          <meshStandardMaterial color="#16203f" metalness={0.42} roughness={0.32} />
        </mesh>

        <mesh position={[1.3, -0.12, -0.17]} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[0.78, 0.78]} />
          <meshBasicMaterial map={monitorLogoTexture} />
        </mesh>

        <mesh position={[1.73, -0.12, -0.171]} rotation={[0, Math.PI, 0]}>
          <boxGeometry args={[0.025, 0.9, 0.012]} />
          <meshStandardMaterial
            ref={monitorLogoLedLeftRef}
            color="#70deff"
            emissive="#70deff"
            emissiveIntensity={1.05}
            metalness={0.2}
            roughness={0.35}
          />
        </mesh>

        <mesh position={[-0.65, -0.12, -0.171]} rotation={[0, Math.PI, 0]}>
          <boxGeometry args={[0.025, 0.9, 0.012]} />
          <meshStandardMaterial
            ref={monitorLogoLedRightRef}
            color="#ff73df"
            emissive="#ff73df"
            emissiveIntensity={1.05}
            metalness={0.2}
            roughness={0.35}
          />
        </mesh>

        <mesh position={[0.54, 0.33, -0.171]} rotation={[0, Math.PI, 0]}>
          <boxGeometry args={[2.42, 0.025, 0.012]} />
          <meshStandardMaterial
            ref={monitorLogoLedTopRef}
            color="#89ff65"
            emissive="#89ff65"
            emissiveIntensity={1.05}
            metalness={0.2}
            roughness={0.35}
          />
        </mesh>

        <mesh position={[0.54, -0.57, -0.171]} rotation={[0, Math.PI, 0]}>
          <boxGeometry args={[2.42, 0.025, 0.012]} />
          <meshStandardMaterial
            ref={monitorLogoLedBottomRef}
            color="#70deff"
            emissive="#70deff"
            emissiveIntensity={1.05}
            metalness={0.2}
            roughness={0.35}
          />
        </mesh>

        <Text
          position={[-0.75, -0.12, -0.17]}
          rotation={[0, Math.PI, 0]}
          fontSize={0.34}
          color="#ffffff"
          anchorX="right"
          anchorY="middle"
          maxWidth={1.55}
          outlineWidth={0.018}
          outlineColor="#0b1020"
        >
          Malejo Portfolio
        </Text>

        <mesh position={[0, -0.1, 0.12]}>
          <planeGeometry args={[4.32, 2.32]} />
          <meshBasicMaterial map={screenTexture} />
        </mesh>
        <pointLight position={[0, -0.1, 1.5]} intensity={0.6} color="#ffffff" />

        <mesh position={[0, -1.84, -0.12]}>
          <cylinderGeometry args={[0.16, 0.2, 0.42, 24]} />
          <meshStandardMaterial color="#35a7d8" metalness={0.55} roughness={0.28} />
        </mesh>

        {/* monitor stand arm — connects neck top to monitor bottom */}
        <mesh position={[0, -1.558, -0.13]}>
          <boxGeometry args={[0.18, 0.145, 0.12]} />
          <meshStandardMaterial color="#2a8abf" metalness={0.55} roughness={0.3} />
        </mesh>

        {/* monitor stand bracket — horizontal plate touching monitor bottom */}
        <mesh position={[0, -1.488, -0.08]}>
          <boxGeometry args={[0.52, 0.04, 0.22]} />
          <meshStandardMaterial color="#246ea0" metalness={0.52} roughness={0.28} />
        </mesh>

        <mesh position={[0, -2.08, -0.08]}>
          <boxGeometry args={[2.05, 0.08, 1.0]} />
          <meshStandardMaterial color="#2a4f7d" metalness={0.44} roughness={0.36} />
        </mesh>

        <group>
          <mesh position={[2.84, -0.57, -0.48]}>
            <boxGeometry args={[0.72, 2.5, 0.08]} />
            <meshStandardMaterial color="#15304f" metalness={0.42} roughness={0.46} />
          </mesh>

          <mesh position={[3.2, -0.57, 0.45]}>
            <boxGeometry args={[0.08, 2.5, 1.86]} />
            <meshStandardMaterial color="#15304f" metalness={0.42} roughness={0.46} />
          </mesh>

          <mesh position={[2.84, 0.73, 0.45]}>
            <boxGeometry args={[0.72, 0.1, 1.86]} />
            <meshStandardMaterial color="#3b5fd1" metalness={0.45} roughness={0.34} />
          </mesh>

          <mesh position={[2.84, -1.87, 0.45]}>
            <boxGeometry args={[0.72, 0.1, 1.86]} />
            <meshStandardMaterial color="#274b9f" metalness={0.45} roughness={0.38} />
          </mesh>

          <mesh position={[2.84, -0.57, 1.38]}>
            <boxGeometry args={[0.72, 2.5, 0.08]} />
            <meshStandardMaterial color="#203a73" metalness={0.42} roughness={0.44} />
          </mesh>

          <mesh position={[2.525, -0.57, 1.425]}>
            <boxGeometry args={[0.03, 2.24, 0.03]} />
            <meshStandardMaterial ref={caseLedLeftRef} color="#61d7ff" emissive="#61d7ff" emissiveIntensity={1.2} />
          </mesh>

          <mesh position={[3.155, -0.57, 1.425]}>
            <boxGeometry args={[0.03, 2.24, 0.03]} />
            <meshStandardMaterial ref={caseLedRightRef} color="#ff6ce3" emissive="#ff6ce3" emissiveIntensity={1.2} />
          </mesh>

          <mesh position={[2.74, -0.05, 0.27]}>
            <torusGeometry args={[0.23, 0.035, 18, 40]} />
            <meshStandardMaterial ref={fanOneLedRef} color="#70deff" emissive="#70deff" emissiveIntensity={1.0} metalness={0.2} roughness={0.45} />
          </mesh>

          <mesh position={[2.74, -1.05, 0.27]}>
            <torusGeometry args={[0.23, 0.035, 18, 40]} />
            <meshStandardMaterial ref={fanTwoLedRef} color="#ff73df" emissive="#ff73df" emissiveIntensity={1.0} metalness={0.2} roughness={0.45} />
          </mesh>

          <mesh position={[2.74, -0.05, 0.27]}>
            <cylinderGeometry args={[0.16, 0.16, 0.03, 22]} />
            <meshStandardMaterial color="#2f4c88" metalness={0.5} roughness={0.28} />
          </mesh>

          <mesh position={[2.74, -1.05, 0.27]}>
            <cylinderGeometry args={[0.16, 0.16, 0.03, 22]} />
            <meshStandardMaterial color="#2f4c88" metalness={0.5} roughness={0.28} />
          </mesh>

          <group>
            <mesh position={[2.72, -0.62, 0.62]}>
              <boxGeometry args={[0.5, 0.22, 1.06]} />
              <meshStandardMaterial color="#101417" metalness={0.5} roughness={0.34} />
            </mesh>

            <mesh position={[2.72, -0.53, 1.12]}>
              <boxGeometry args={[0.46, 0.035, 0.06]} />
              <meshStandardMaterial color="#7dff45" emissive="#7dff45" emissiveIntensity={0.35} metalness={0.28} roughness={0.26} />
            </mesh>

            <mesh position={[2.72, -0.62, 0.28]} rotation={[0, Math.PI / 2, 0]}>
              <cylinderGeometry args={[0.12, 0.12, 0.03, 22]} />
              <meshStandardMaterial color="#1d2228" metalness={0.55} roughness={0.3} />
            </mesh>

            <mesh position={[2.72, -0.62, 0.88]} rotation={[0, Math.PI / 2, 0]}>
              <cylinderGeometry args={[0.12, 0.12, 0.03, 22]} />
              <meshStandardMaterial color="#1d2228" metalness={0.55} roughness={0.3} />
            </mesh>

            <Text
              position={[2.43, -0.61, 0.62]}
              rotation={[0, -Math.PI / 2, 0]}
              fontSize={0.12}
              color="#83ff44"
              anchorX="center"
              anchorY="middle"
              maxWidth={0.9}
            >
              GTX 3060
            </Text>
          </group>
        </group>

        <group rotation={[-0.08, 0.12, 0]}>
          <group position={[-0.5, -1.82, 1.2]} rotation={[0, Math.PI, 0]}>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[2.36, 0.05, 0.88]} />
              <meshStandardMaterial color="#111826" roughness={0.42} metalness={0.18} />
            </mesh>

            <mesh position={[0, 0.06, 0.38]}>
              <boxGeometry args={[2.24, 0.014, 0.07]} />
              <meshStandardMaterial ref={keyboardLedRef} color="#6fdcff" emissive="#6fdcff" emissiveIntensity={1.05} />
            </mesh>

            {keyboardKeys.map((key, index) => (
              <mesh key={index} position={[key.x, key.y, key.z]}>
                <boxGeometry args={[0.072, 0.02, 0.085]} />
                <meshStandardMaterial color="#d8e1ff" roughness={0.46} metalness={0.08} />
              </mesh>
            ))}
          </group>
        </group>

        <mesh rotation={[-0.08, 0.12, 0]}>
          <tubeGeometry args={[keyboardCableCurve, 40, 0.009, 8, false]} />
          <meshStandardMaterial color="#89ff65" metalness={0.28} roughness={0.4} />
        </mesh>

        <group position={[1.95, -1.66, 1.48]} rotation={[-0.06, -0.08, 0]}>
          {/* body */}
          <mesh scale={[1.05, 0.72, 1.35]}>
            <sphereGeometry args={[0.2, 20, 20]} />
            <meshStandardMaterial color="#8aa8e0" roughness={0.38} metalness={0.2} />
          </mesh>

          {/* left click button */}
          <mesh position={[-0.098, 0.120, -0.09]}>
            <boxGeometry args={[0.195, 0.005, 0.32]} />
            <meshStandardMaterial color="#111111" roughness={0.28} metalness={0.3} />
          </mesh>

          {/* right click button */}
          <mesh position={[0.098, 0.120, -0.09]}>
            <boxGeometry args={[0.195, 0.005, 0.32]} />
            <meshStandardMaterial color="#111111" roughness={0.28} metalness={0.3} />
          </mesh>

          {/* center divider */}
          <mesh position={[0, 0.122, -0.09]}>
            <boxGeometry args={[0.007, 0.007, 0.32]} />
            <meshStandardMaterial color="#3a3a4a" roughness={0.5} metalness={0.3} />
          </mesh>

          {/* scroll wheel */}
          <mesh position={[0, 0.141, -0.09]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.022, 0.022, 0.042, 16]} />
            <meshStandardMaterial color="#2a2a38" roughness={0.38} metalness={0.4} />
          </mesh>

          {/* LED ring around base */}
          <mesh position={[0, -0.055, 0.02]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.19, 0.011, 12, 48]} />
            <meshStandardMaterial ref={mouseLedRef} color="#ff4de1" emissive="#ff4de1" emissiveIntensity={1.1} />
          </mesh>
        </group>

        <mesh rotation={[-0.08, 0.12, 0]}>
          <tubeGeometry args={[mouseCableCurve, 40, 0.008, 8, false]} />
          <meshStandardMaterial color="#59d7ff" metalness={0.28} roughness={0.36} />
        </mesh>
      </group>
    </mesh>
  );
};

const waitForTexture = (texture) => {
  if (!texture || !texture.image) return Promise.resolve();

  const image = texture.image;
  if (image.complete) return Promise.resolve();

  return new Promise((resolve) => {
    const done = () => {
      image.removeEventListener?.("load", done);
      image.removeEventListener?.("error", done);
      resolve();
    };

    image.addEventListener?.("load", done);
    image.addEventListener?.("error", done);
  });
};

const DetailedComputer = ({ onFirstRender }) => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");
  const [texturesReady, setTexturesReady] = useState(false);

  const model = useMemo(() => {
    const cloned = scene.clone(true);
    const hiddenNodePattern = /(Plane|metal-mesh-500x500|MY SCREEN)/i;
    const hiddenMaterialPattern = /(Material\.053|MY SCREEN|Screen)/i;

    cloned.traverse((node) => {
      if (!node.isMesh || !node.geometry) return;

      const materialNames = Array.isArray(node.material)
        ? node.material.map((mat) => mat?.name || "").join(" ")
        : node.material?.name || "";

      if (hiddenNodePattern.test(node.name || "") || hiddenMaterialPattern.test(materialNames)) {
        node.visible = false;
        return;
      }

      node.geometry.computeBoundingBox();
      const bb = node.geometry.boundingBox;
      if (!bb) return;

      const sizeX = bb.max.x - bb.min.x;
      const sizeY = bb.max.y - bb.min.y;
      const sizeZ = bb.max.z - bb.min.z;

      if (Math.max(sizeX, sizeY, sizeZ) > 8) {
        node.visible = false;
      }

      const materials = Array.isArray(node.material) ? node.material : [node.material];
      materials.forEach((material) => {
        if (!material) return;

        const maps = [
          material.map,
          material.emissiveMap,
          material.roughnessMap,
          material.metalnessMap,
          material.normalMap,
          material.alphaMap,
        ].filter(Boolean);

        maps.forEach((map) => {
          map.colorSpace = THREE.SRGBColorSpace;
          map.needsUpdate = true;
        });

        material.needsUpdate = true;
      });
    });

    return cloned;
  }, [scene]);

  useEffect(() => {
    let mounted = true;

    const textures = [];
    model.traverse((node) => {
      if (!node.isMesh) return;
      const materials = Array.isArray(node.material) ? node.material : [node.material];

      materials.forEach((material) => {
        if (!material) return;
        [
          material.map,
          material.emissiveMap,
          material.roughnessMap,
          material.metalnessMap,
          material.normalMap,
          material.alphaMap,
        ]
          .filter(Boolean)
          .forEach((map) => textures.push(map));
      });
    });

    Promise.all(textures.map(waitForTexture)).then(() => {
      if (mounted) setTexturesReady(true);
    });

    return () => {
      mounted = false;
    };
  }, [model]);

  if (!texturesReady) {
    return null;
  }

  return (
    <mesh>
      <hemisphereLight intensity={0.3} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow={false}
      />
      <primitive
        object={model}
        scale={0.62}
        position={[-1, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        onAfterRender={() => {
          if (onFirstRender) onFirstRender();
        }}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [detailedRendered, setDetailedRendered] = useState(false);
  const [forceLightweight, setForceLightweight] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    setHasWebGL(hasWebGLSupport());
    setDetailedRendered(false);
    setForceLightweight(false);
  }, []);

  useEffect(() => {
    if (!hasWebGL || detailedRendered || forceLightweight) return;

    const timer = window.setTimeout(() => {
      setForceLightweight(true);
    }, DETAILED_TIMEOUT_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, [hasWebGL, detailedRendered, forceLightweight]);

  if (!hasWebGL) {
    return null;
  }

  const cameraProps = isMobile
    ? { position: [7, -1, 1.75], fov: 42 }
    : { position: [18.8, 2.4, 5.2], fov: 26 };

  return (
    <div
      style={{
        width: "100%",
        height: isMobile ? "65vh" : "100%",
        position: isMobile ? "relative" : "absolute",
        top: 0,
        left: 0,
        touchAction: "pan-y",
        cursor: isMobile ? "default" : isDragging ? "grabbing" : "grab",
      }}
    >
    <Canvas
      frameloop="demand"
      camera={cameraProps}
      gl={{ preserveDrawingBuffer: false, alpha: true, powerPreference: "high-performance", antialias: true }}
      dpr={isMobile ? [1, 1.5] : [1.5, 2]}
      style={{ width: "100%", height: "100%" }}
      onPointerDown={() => {
        if (!isMobile) setIsDragging(true);
      }}
      onPointerUp={() => {
        if (!isMobile) setIsDragging(false);
      }}
      onPointerLeave={() => {
        if (!isMobile) setIsDragging(false);
      }}
    >
      <Suspense fallback={<LightweightComputer />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.35}
          touches={isMobile ? { ONE: 0, TWO: 0 } : undefined}
          target={isMobile ? [0, -2.2, 0] : [0, -1.6, 0]}
        />
        {!detailedRendered && (
          <group>
            <LightweightComputer />
          </group>
        )}
        {forceLightweight ? null : (
          <DetailedComputer
            onFirstRender={() => {
              setDetailedRendered(true);
            }}
          />
        )}
        {forceLightweight && (
          <LightweightComputer />
        )}
      </Suspense>
    </Canvas>
    </div>
  );
};

useGLTF.preload("/desktop_pc/scene.gltf");

export default ComputerCanvas;
