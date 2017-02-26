console.log("Starting three script");
/* global THREE */
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.z = 100;
camera.updateProjectionMatrix();

var renderer = new THREE.WebGLRenderer();
var controls =
  renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// Add the orbit controls
controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target = new THREE.Vector3(0, 0, 0);

var data = {
  text: "Lonnie L. Souder",
  size: 5,
  height: 2,
  curveSegments: 12,
  font: "helvetiker",
  weight: "regular",
  bevelEnabled: false,
  bevelThickness: 1,
  bevelSize: 0.5,
  bevelSegments: 3
}
var textfuncts = add3dText();
//addGary();
addLights();
maketheskycube();

var cuberot = makeSomeRotatingCubes();

//must define this before I call it???
var render = function() {
  requestAnimationFrame(render);

  cuberot();
  textfuncts.rotate();

  renderer.render(scene, camera);
  controls.update();
};


//wait for fonts to load then render stuff.
console.log('wait for font to load...');
var waitFont = function() {
  if (textfuncts.meshReady()) {
    console.log("ready!");
    render();
  }
  else {
    console.log('waiting...');
    setTimeout(waitFont, 1);
  }
}
waitFont();

// of the function defs start here
function addLights() {
  var dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(100, 100, 50);
  scene.add(dirLight);

  var point1 = new THREE.PointLight(0x333333, 3, 150);
  point1.position.set(70, 5, 70);
  scene.add(point1);
  scene.add(new THREE.PointLightHelper(point1, 3));

  var point2 = new THREE.PointLight(0x333333, 1, 150);
  point2.position.set(-70, 5, 70);
  scene.add(point2);
  scene.add(new THREE.PointLightHelper(point2, 3));
}

function maketheskycube() {
  // Create a cube used to build the floor and walls
  var cube = new THREE.CubeGeometry(200, 1, 200);

  var texloader = new THREE.TextureLoader();
  var itsMe = texloader.load("images/Lonnie.jpg");

  // create different materials
  var floorMat = new THREE.MeshPhongMaterial({
    map: itsMe
  });


  // Floor
  var floor = new THREE.Mesh(cube, floorMat);
  floor.position.set(0, -50, 0)
  scene.add(floor);
  // Back wall
  var backWall = new THREE.Mesh(cube, floorMat);
  backWall.rotation.x = Math.PI / 180 * 90;
  backWall.position.set(0, 50, -100);
  scene.add(backWall);

  // Left wall
  var leftWall = new THREE.Mesh(cube, floorMat);
  leftWall.rotation.x = Math.PI / 180 * -90;
  leftWall.rotation.z = Math.PI / 180 * 90;
  leftWall.position.set(-100, 50, 0);
  scene.add(leftWall);

  // Right wall
  var rightWall = new THREE.Mesh(cube, floorMat);
  rightWall.rotation.x = Math.PI / 180 * 90;
  rightWall.rotation.z = Math.PI / 180 * 90;
  rightWall.position.set(100, 50, 0);
  scene.add(rightWall);

}

function add3dText() {
  var mesh;
  var textmat = new THREE.MeshPhongMaterial({
    color: 0x00dd00,
    specular: 0x999999,
    shininess: 0,
    shading: THREE.SmoothShading
  });
  var loader = new THREE.FontLoader();
  loader.load('js/helvetiker_regular.typeface.json', function(font) {

    var geometry = new THREE.TextGeometry(data.text, {
      font: font,
      size: data.size,
      height: data.height,
      curveSegments: data.curveSegments,
      bevelEnabled: data.bevelEnabled,
      bevelThickness: data.bevelThickness,
      bevelSize: data.bevelSize,
      bevelSegments: data.bevelSegments
    });
    geometry.center();
    mesh = new THREE.Mesh(geometry, textmat);
    scene.add(mesh);
  });

  return {
    rotate: function() {
      //mesh.rotation.y += .02;
    },
    meshReady: function() {
      return typeof mesh !== 'undefined' && typeof mesh.rotation !== 'undefined';
    }
  }
}

function makeSomeRotatingCubes() {
  var cubegeo = new THREE.BoxGeometry(1, 1, 1);
  var cubemat = new THREE.MeshPhongMaterial({
    color: 0x00dd00,
    specular: 0x999999,
    shininess: 0,
    shading: THREE.SmoothShading
  });
  var cube1 = new THREE.Mesh(cubegeo, cubemat);
  scene.add(cube1);

  cubemat = new THREE.MeshPhongMaterial({
    color: 0xdddd00,
    specular: 0x999999,
    shininess: 0,
    shading: THREE.FlatShading
  });

  var cube2 = new THREE.Mesh(cubegeo, cubemat);
  cube2.position.set(1, 1, 1);
  scene.add(cube2);
  return function() {
    cube1.rotation.x += 0.01;
    cube2.rotation.y += 0.01;
  }
}

// function addGary() {
//   var loader = new THREE.JSONLoader();
//   loader.load("js/gary.json", addModelToScene);
// }
// After loading JSON from our file, we add it to the scene
function addModelToScene(geometry, materials) {
  var material = new THREE.MeshFaceMaterial(materials);
  var model = new THREE.Mesh(geometry, material);
  model.scale.set(0.5, 0.5, 0.5);
  scene.add(model);
}