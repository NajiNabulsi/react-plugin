import React, {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import Fairwell_kaal from './Fairwell_kaal.js'
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className='webGl'>
    <Canvas style={{width : '100%', height: '100%', margin:'150px', position: 'absolute'}}>
      <OrbitControls autoRotate= { true}/>
      <ambientLight intensity={1}/>
      <directionalLight intensity={0.5} position ={[-1, -10, 1]} />
      <directionalLight intensity={0.5} position ={[-1, 10, 1]} />
      <Suspense fallback={null}>
        <Fairwell_kaal scale={[1.5 , 1.5, 1.5  ]} position={[0,-1,-1]} />
      </Suspense>
    </Canvas>
    </div>
  )
}

export default App