import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
mesh.position.x = 0.7
mesh.position.y = -0.6
mesh.position.z = 1
scene.add(mesh)

//position의 메서드들.
// console.log(mesh.position.normalize())
// mesh.position.set(0.6, -0.3, 3)


// Scale 
mesh.scale.x = 2
mesh.scale.y = 0.5
mesh.scale.z = 0.5
//여기서도 set을 사용할 수 있음. 


//rotation
mesh.rotation.y = 6.5
mesh.rotation.x = 0.5



//Axes helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper)


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

//카메라와 obj와의 거리값.
console.log(mesh.position.distanceTo(camera.position))

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)