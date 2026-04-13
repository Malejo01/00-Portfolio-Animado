import { useMemo, useRef, Suspense } from "react" 
import { Canvas, useFrame } from "@react-three/fiber"

import { Points, PointMaterial, Preload } from "@react-three/drei"
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = (props) => {
  const ref = useRef();

  const sphere = useMemo(() => random.inSphere(new Float32Array(2400), { radius: 1.2 }), []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 40;
    ref.current.rotation.y -= delta / 35;
  })
  return (
    <group rotation={[0,0, Math.PI/4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
        transparent
        color="#f272c8"
        size={0.0018}
        sizeAttenuation={true}
        depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
return (
  <div className="w-full h-auto absolute inset-0 z-[-1]">
    <Canvas
      dpr={[0.6, 1]}
      frameloop="always"
      camera={{position:[0,0,1]}}
      gl={{ antialias: false, powerPreference: 'low-power' }}
    >
      <Suspense fallback={null}/>
        <Stars/>
        <Preload all />
    </Canvas>
  </div>
)
}

export default StarsCanvas