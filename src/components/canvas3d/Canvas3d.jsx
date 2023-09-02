import {useRef, useEffect, useState} from 'react'
import { Canvas, extend, useLoader, useFrame } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three'
import { EffectComposer, ChromaticAberration, Bloom, Noise, Vignette, } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React from "react";
import { useGLTF } from "@react-three/drei";
import { Stats } from '@react-three/drei'
import DNA from '/src/assets/dna-03.glb' 
const number = 662742;

const randoms = new Float32Array (number /3);
const colorRandoms = new Float32Array (number /3);
for(var i = 0; i < number / 3; i++) {
  randoms.set( [Math.random ()] ,i) ;
  colorRandoms.set( [Math.random()],i) ;
}


const material = new THREE.ShaderMaterial( {

	uniforms: {

		time: 0,
    uColor1: {value: new THREE.Color(0x0ea7b5)},
    uColor2: {value: new THREE.Color(0xffbe4f)},
    uColor3: {value: new THREE.Color(0x0c457d)},

	},

	vertexShader: `
    varying vec2 vUv;
    varying float colorR;
    attribute float randoms;
    attribute float cRandoms;
    void main() {
      vUv = uv;
      colorR = cRandoms;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = (70. * randoms + 15.0) * (1. / - mvPosition.z) ;
      gl_Position = projectionMatrix * mvPosition;
  }`,

	fragmentShader: ` 
  uniform float time;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  varying float colorR;
  vec3 finalColor;
  
  varying vec2 vUv;
  void main() {

      float alpha = 1.0 - smoothstep(-0.2, 0.5, length(gl_PointCoord - vec2(0.5)));
      if(colorR > .33 && colorR < .66){
         finalColor = uColor2;
      }

      else if(colorR > .66){
         finalColor = uColor3;
      }

      else{
         finalColor = uColor1;
      }
      gl_FragColor = vec4(finalColor, alpha);

    }
    
  
  `

  });


//Model loading Function
function Model(props) {

 const [data, setData] = useState(props.message);
 
  const gltf = useLoader(GLTFLoader, DNA)
  const { nodes } = useGLTF(DNA);

  gltf.materials.map = material
  gltf.scene.children[0].geometry.setAttribute('randoms', new THREE.BufferAttribute(randoms,1))
  gltf.scene.children[0].geometry.setAttribute('cRandoms', new THREE.BufferAttribute(colorRandoms,1))
  material.transparent = true;
  material.depthTest = false;
  material.depthWrite = false;
  material.blending = THREE.AdditiveBlending;
  const mesh = new THREE.Points(gltf.scene.children[0].geometry, material)
  const wave = useRef()
  
 
  const a = props.message
  

  const [clock] = React.useState(new THREE.Clock());

  useFrame(( state , delta) => {

    // Will be 0 when the scrollbar is at the starting position,
    // then increase to 1 until 1 / 3 of the scroll distance is reached
    wave.current.rotation.x  =  THREE.MathUtils.damp(wave.current.rotation.x, (-Math.PI / 1.9) * a, 4, delta)
    wave.current.rotation.z  =  THREE.MathUtils.damp(wave.current.rotation.z, (-Math.PI / 2.8) * a, 4, delta)
    wave.current.position.x = THREE.MathUtils.damp(wave.current.position.x, (-Math.PI / 1.45) * a, 4, delta)
    wave.current.position.z = THREE.MathUtils.damp(wave.current.position.z, (-Math.PI / 1.45) * 0.5 * a, 4, delta)

    state.ready = false;
    const timeUntilNextFrame = (1000 / props.fps) - clock.getDelta();

    setTimeout(() => {
      state.ready = true;
      state.invalidate();
    }, Math.max(0, timeUntilNextFrame));


  },[a])
  


  return (

    <group {...props} dispose={null}>
      <points  ref={wave}  position={[0,0,0]} rotation={[0,-0.57,0]} 
        geometry={nodes.wave1.geometry}
        material={material}
      />
    </group>
  );
}

useGLTF.preload("/dna-03.glb");


//Render Function
function ThreeCanvas(props) {

  const [scrollProgress, setScrollProgress] = useState(props.scrollProgress);
 const progress = props.scrollProgress


  return ( 
    
    <div className='ThreeCanvas'>
      <Canvas
        dpr={1}
        frameloop="demand"
        camera={{
          fov: 75,
          aspect: 2,
          near: 0.1,
          far: 1000,
          position: [0,0,4],
          rotation: [0,0,0]
        }}
      > 
      <EffectComposer>
        <Bloom luminanceThreshold={1.0} luminanceSmoothing={0.4} height={900} />
        {/* <Noise opacity={0.06} /> */}
        <ChromaticAberration
    blendFunction={BlendFunction.NORMAL} // blend mode
    offset={[0.0025, 0.001]} // color offset
  />
        {/* <Vignette eskil={false} offset={0.6} darkness={0.9} /> */}
      </EffectComposer>
        <color args={['#181b1f']} attach={'background'}/>              
          <Model message={progress}/>
        {/* <OrbitControls/> */}
        {/* <Stats /> */}
      </Canvas>
    </div>
  );
}

export default ThreeCanvas;