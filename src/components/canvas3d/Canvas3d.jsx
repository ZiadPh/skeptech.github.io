import { Canvas, extend, useLoader } from '@react-three/fiber'
import { OrbitControls, shaderMaterial } from '@react-three/drei';
import * as THREE from 'three'
import { EffectComposer, ChromaticAberration, Bloom, Noise, Vignette, } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
const PointShader = shaderMaterial(
  {},
  `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    void main() {
      gl_FragColor = vec4(1.0,1.0,0.0,1.0);
    }
  `
)
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
    uColor1: {value: new THREE.Color(0x612574)},
    uColor2: {value: new THREE.Color(0x293583)},
    uColor3: {value: new THREE.Color(0x1954ec)},

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
      gl_PointSize = (70. * randoms ) * (1. / - mvPosition.z);
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
extend({PointShader})

function Model() {

  const gltf = useLoader(GLTFLoader, '/dna-03.glb')
  console.log(gltf)
 
  gltf.materials.map = PointShader
  gltf.scene.children[0].geometry.setAttribute('randoms', new THREE.BufferAttribute(randoms,1))
  gltf.scene.children[0].geometry.setAttribute('cRandoms', new THREE.BufferAttribute(colorRandoms,1))
  gltf.scene.children[1].geometry.setAttribute('randoms', new THREE.BufferAttribute(randoms,1))
  gltf.scene.children[1].geometry.setAttribute('cRandoms', new THREE.BufferAttribute(colorRandoms,1))
  material.transparent = true;
  material.depthTest = false;
  material.depthWrite = false;
  material.blending = THREE.AdditiveBlending;
  const mesh = new THREE.Points(gltf.scene.children[0].geometry, material)
  const mesh2 = new THREE.Points(gltf.scene.children[1].geometry, material)
  console.log(gltf.scene.children[0].geometry.attributes.position.array.length)

 

  return (<>
  <primitive object={mesh} position={[0,0,0]}>  </primitive>
  <primitive object={mesh2} position={[0,0,0]} rotation={[0,10,0]}>  </primitive></>
  )

}
function Canvas3d() {

  
  return ( 
    <div className='canvas3d'>
      <Canvas
        camera={{
          fov: 75,
          aspect: 2,
          near: 0.1,
          far: 1000,
          position: [12,0,12],
          rotation: [0,0,0]
        }}
      > 
      <EffectComposer>
        <Bloom luminanceThreshold={0.6} luminanceSmoothing={0.2} height={900} />
        {/* <Noise opacity={0.06} /> */}
        <ChromaticAberration
    blendFunction={BlendFunction.NORMAL} // blend mode
    offset={[0.001, 0.001]} // color offset
  />
        {/* <Vignette eskil={false} offset={0.6} darkness={0.9} /> */}
      </EffectComposer>
        <color args={['#181b1f']} attach={'background'}/>              
         <Model />
         
      
      </Canvas>
    </div>
  );
}

export default Canvas3d;