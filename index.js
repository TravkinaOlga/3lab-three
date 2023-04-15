var scene = new THREE.Scene();
scene.background = new THREE.Color('white');
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// scene.background = new THREE.Color(0x111111);

var spotlight = new THREE.SpotLight(0xeeeece);
spotlight.position.set(1000, 1000, 1000);
scene.add(spotlight);
var spotlight2 = new THREE.SpotLight(0xffffff);
spotlight2.position.set(-200, -200, -200);
scene.add(spotlight2)

// var geometry = new THREE.BoxGeometry(10, 10, 10);
// var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

var geometry = new THREE.TorusGeometry(10, 3, 16, 100);

var material = new THREE.MeshPhongMaterial();
material.color.setHSL(0, 1, .5);
material.flashShading = true;

camera.position.z = 25;

function render() {
    requestAnimationFrame(animate);
    
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}