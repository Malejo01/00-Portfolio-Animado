import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader'


const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.3} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.62}
        position={isMobile ? [0,-2,0] : [-1, -3.25, -1.5]}
        rotation={isMobile ? [-0.01, 0.5, -0.1] : [-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {

  const [isMobile,SetIsMobile] = useState(false)

  useEffect(() => {
    //Añadimos un eventlistener para los cambios en el tamaño de la pantalla
   const mediaQuery = window.matchMedia('(max-width:500px)');
  // Inicializamos la variable isMobile
    SetIsMobile(mediaQuery.matches);
    // Definimos una funcion callback para ver cambios en el mediaQuery
    const handleMediaQueryChange = (event) => {
      SetIsMobile(event.matches)
    }
    //añadimos la funcion callback como listener para cambios en el mediaQuery
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    // Removemos el listener una vez que el componente ya a sido montado
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  },[])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>


    </Canvas>
  )
}

export default ComputerCanvas