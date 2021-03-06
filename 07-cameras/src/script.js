import './style.css'
import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

//cursor /마우스의 위치를 얻는 방법 
const cursor = {
    x:0,
    y:0
}

// window.addEventListener('mousemove', (event) => 
// {
//     cursor.x = event.clientX / sizes.width - 0.5 // 화면 위에서의 마우스 위치. -0.5를 한 것은, 왼쪽과 오른쪽의 값을 구하기 위한 것이다. 
//     cursor.y = -(event.clientY / sizes.height - 0.5)
// })


/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1,4) // 첫번째 인자는 degree를 나타낸다. 수직으로의 높이. 두번째 인자는 카메라에 보여질 화면의 비율이다.

// const aspectRatio = sizes.width / sizes.height
// const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 100) // 화면으로부터 계산해서 뭔가를 그린다. 그래서 화면의 비율에 따라서 모양이 달라진다. 

camera.position.x = 2
// camera.position.y = 2
camera.position.z = 2
console.log(camera.position.length())
camera.lookAt(mesh.position)
scene.add(camera)

//Controls
const controls = new OrbitControls(camera, canvas) // 두개의 인자를 가진다. 카메라와 dom엘리먼트
controls.enableDamping = true  // 뎀핑 효과 . 이것을 적용하기 위해서는 컨트롤을 지속적으로 업데이트 해줘야 한다. 그래서 매 프레임마다 업데이트 하는 코드를 넣어준다. 
// controls.target.y = 1
// controls.update()

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    //update camera
    camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
    camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
    camera.position.y = cursor.y * 5
    // camera.lookAt(new THREE.Vector3())
    camera.lookAt(mesh.position)

    // Update objects
    // mesh.rotation.y = elapsedTime;

    // Update Controls
    controls.update() // 매 프레임마다 컨트롤을 업데이트해줘야 한다. 

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()