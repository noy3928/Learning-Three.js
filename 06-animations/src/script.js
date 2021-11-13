import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

// Clock 
const clock = new THREE.Clock()

//Animation 
let time = Date.now()

const tick = () => 
{

    //Clock 
    const elapsedTime = clock.getElapsedTime()
    console.log(elapsedTime)


    // const currentTime = Date.now()
    // const deltaTime = currentTime - time
    // time = currentTime

// Updata ojects
// mesh.position.x += 0.01
// mesh.rotation.y = elapsedTime * Math.PI * 2 // 1초에 한바퀴. 
// mesh.position.y = Math.sin(elapsedTime) // 위 아래 왔다갔다. 
// mesh.position.x = Math.cos(elapsedTime)

camera.position.y = Math.sin(elapsedTime)
camera.position.x = Math.cos(elapsedTime)
camera.lookAt(mesh.position) // 대상은 멈춰있고, 카메라만 움직이는 동작

//Render
renderer.render(scene, camera)

window.requestAnimationFrame(tick)
}

tick()