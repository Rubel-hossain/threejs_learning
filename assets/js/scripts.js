import * as THREE from 'three';

// scene  object camera rendered

// scene

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });

const obj = new THREE.Mesh(geometry, material);

scene.add(obj);

const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camrea = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camrea.position.z = 3;

scene.add(camrea);

const canvas = document.querySelector(".canvas");

const rendered = new THREE.WebGLRenderer({canvas});

rendered.setSize(aspect.width, aspect.height);

rendered.render(scene,camrea)