import React, { Suspense } from "react"
import {Canvas} from '@react-three/fiber'

import { Float, OrbitControls, useTexture } from "@react-three/drei"

import CanvasLoader from "../Loader"


const Ball = (props) => {

  const [decal] = useTexture([props.imgUrl]) 

  return (
    <Float speed={1.35} rotationIntensity={0.6} floatIntensity={1.25}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0, 0.05]}/>
      <mesh castShadow receiveShadow scale={2.55}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial
          color="#d9d9d9"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
      </mesh>

      <sprite position={[0, 0, 2.8]} scale={[2, 2, 1]} renderOrder={20}>
        <spriteMaterial map={decal} transparent depthTest={false} toneMapped={false} />
      </sprite>
    </Float>
  )
}

const BallCanvas = ({icon}) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[0.8, 1.2]}
      gl={{ preserveDrawingBuffer: false, powerPreference: 'low-power', antialias: false }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <Ball imgUrl={icon}/>
      </Suspense>


    </Canvas>
  )
}

export default BallCanvas