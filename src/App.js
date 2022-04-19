import React, {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import Fairwell_kaal from './Fairwell_kaal.js'
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className='webGl'>
    <Canvas style={{width : '100%', height: '100%', margin:'150px', position: 'absolute'}}>
      <OrbitControls autoRotate= { true} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}/>
      <ambientLight intensity={1}/>
      <directionalLight intensity={0.5} position ={[-1, -10, 1]} />
      <directionalLight intensity={0.5} position ={[-1, 10, 1]} />
      <pointLight intensity={1} position={[3, 0, 5]} />
      <pointLight intensity={1} position={[-3, 0, 0]} />
      <pointLight intensity={1} position={[0, 0, -5]} />
      <Suspense fallback={null}>
        <Fairwell_kaal scale={[1 , 1, 1  ]} position={[0,-1,-1]} />
        <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={1} width={5} height={5} blur={0.5} far={0.8}  />
        {/* <Environment  /> */}
      </Suspense>
    </Canvas>
    </div>
  )
}

export default App