/* global THREE */

// x (+)right to (-)left
// y (+)up to (-)down
// z (+)forwar to (-)backward



function addTheFloor(scene) {

  var floor = checkerBoard(20);
  floor.rotation.x = Math.PI / 180 * -90;
  floor.position.set(0, -8, 0);
  floor.receiveShadow = true;
  scene.add(floor);
}

// of the function defs start here
function addLights(scene) {
  var dirLight = new THREE.DirectionalLight(0xffffff, .5);
  dirLight.position.set(0, 100, 100);
  dirLight.castShadow = true;

  // dirLight.shadowCameraNear = 2;
  // dirLight.shadowCameraFar = 5;
  dirLight.shadowCameraLeft = -100;
  dirLight.shadowCameraRight = 100;
  dirLight.shadowCameraTop = 100;
  dirLight.shadowCameraBottom = -100;

  scene.add(dirLight);

  // var helper1 = new THREE.CameraHelper(dirLight.shadow.camera);
  // scene.add(helper1);

  var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.2);
  hemiLight.position.set(0, -1, 1);
  hemiLight.castShadow = true;
  scene.add(hemiLight);

}

function maketheskycube(scene) {
  // Create a cube used to build the floor and walls
  var cube = new THREE.CubeGeometry(200, 1, 200);

  var texloader = new THREE.TextureLoader();
  var itsMe = texloader.load("images/Lonnie.jpg");

  // create different materials
  var itsMeMat = new THREE.MeshPhongMaterial({
    map: itsMe
  });


  /* Floor  */
  var geometry = new THREE.PlaneGeometry(1000, 1000, 1, 1);
  var material = new THREE.MeshPhongMaterial({
    color: 0x0000aa
  });
  var floor = new THREE.Mesh(geometry, material);
  floor.material.side = THREE.DoubleSide;
  floor.rotation.x = Math.PI / 180 * 90;
  floor.position.set(0, -10, 0);
  scene.add(floor);

  // Back wall
  var backWall = new THREE.Mesh(cube, itsMeMat);
  backWall.rotation.x = Math.PI / 180 * 90;
  backWall.position.set(0, 50, -100);
  scene.add(backWall);

  // Left wall
  var leftWall = new THREE.Mesh(cube, itsMeMat);
  leftWall.rotation.x = Math.PI / 180 * -90;
  leftWall.rotation.z = Math.PI / 180 * 90;
  leftWall.position.set(-100, 50, 0);
  scene.add(leftWall);

  // Right wall
  var rightWall = new THREE.Mesh(cube, itsMeMat);
  rightWall.rotation.x = Math.PI / 180 * 90;
  rightWall.rotation.z = Math.PI / 180 * 90;
  rightWall.position.set(100, 50, 0);
  scene.add(rightWall);

  floor.receiveShadow = true;

}

//
function add3dText(data, scene) {
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
    mesh.position.set(data.x, data.y, data.z);
    scene.add(mesh);
    mesh.castShadow = true;
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

function makeSomeRotatingCubes(scene) {
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

function addGary(scene) {
  var loader = new THREE.JSONLoader();
  loader.load("js/gary.json", addModelToScene);

  // After loading JSON from our file, we add it to the scene
  function addModelToScene(geometry, materials) {
    var material = new THREE.MeshFaceMaterial(materials);
    var model = new THREE.Mesh(geometry, material);
    model.scale.set(2, 2, 2);
    model.castShadow = true;
    model.position.set(-40, -2, -20);
    scene.add(model);
  }
}

function checkerBoard(segments) {
  //Build a checkerboard colored square plane with "segments"
  //number of tiles per side. Using three.js v62
  var geometry = new THREE.PlaneGeometry(100, 100, segments, segments);
  var materialEven = new THREE.MeshBasicMaterial({
    color: 0xccccfc
  });
  var materialOdd = new THREE.MeshBasicMaterial({
    color: 0x444464
  });
  var materials = [materialEven, materialOdd];

  for (var x = 0; x < segments; x++) {
    for (var y = 0; y < segments; y++) {
      var i = x * segments + y
      var j = 2 * i
      geometry.faces[j].materialIndex = geometry.faces[j + 1].materialIndex = (x + y) % 2
    }
  }

  return new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials))
}
