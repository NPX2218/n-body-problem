import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import { AdditiveBlending, Float32BufferAttribute } from "three";
import LocomotiveScroll from "locomotive-scroll";

window.onload = function () {
  /**
   * Base
   */
  // Debug
  const gui = new dat.GUI({
    width: 400,
    closed: true,
  });

  const textureLoader = new THREE.TextureLoader();
  const shape = null;
  // shape = textureLoader.load("./1.png");
  // Canvas
  let canvas = null;
  if (document.querySelector("canvas.webgl") != null) {
    canvas = document.querySelector("canvas.webgl");
  } else {
    canvas = null;
  }

  // Scene
  const scene = new THREE.Scene();

  //Galaxy Generator

  const parameters = {};

  parameters.count = 60300;
  parameters.showGalaxy = true;
  parameters.size = 0.008;
  parameters.radius = 5;
  parameters.branches = 8;
  parameters.spin = -1.688;
  parameters.randomness = 0.3;
  parameters.randomnessPower = 5;
  parameters.stars = 9000;
  parameters.starColor = "#1b3984";
  parameters.insideColor = "#ff6030";
  parameters.outsideColor = "#1b3984";
  parameters.immersiveMode = false;
  gui
    .add(parameters, "count")
    .min(100)
    .max(100000)
    .step(100)
    .onChange(generateGalaxy)
    .name("Stars in Galaxy");

  gui
    .add(parameters, "stars")
    .min(0)
    .max(100000)
    .step(100)
    .onChange(generateBgStars)
    .name("Background Stars");

  gui
    .addColor(parameters, "starColor")
    .onChange(generateBgStars)
    .name("Star Color");

  gui
    .add(parameters, "size")
    .min(0.001)
    .max(0.1)
    .step(0.001)
    .onChange(generateGalaxy)
    .name("Star Size in Galaxy");

  gui
    .add(parameters, "radius")
    .min(1)
    .max(10)
    .step(1)
    .onChange(generateGalaxy)
    .name("Galaxy Radius");

  gui
    .add(parameters, "branches")
    .min(1)
    .max(10)
    .step(1)
    .onChange(generateGalaxy)
    .name("Galaxy Branches");

  gui
    .add(parameters, "spin")
    .min(-5)
    .max(5)
    .step(0.001)
    .onChange(generateGalaxy)
    .name("Galaxy Spin");

  gui
    .add(parameters, "randomness")
    .min(0)
    .max(2)
    .step(0.01)
    .onChange(generateGalaxy)
    .name("Randomness");

  gui
    .add(parameters, "randomnessPower")
    .min(1)
    .max(10)
    .step(1)
    .onChange(generateGalaxy)
    .name("Randomness Power");

  gui
    .addColor(parameters, "insideColor")
    .onChange(generateGalaxy)
    .name("Core Color");

  gui
    .addColor(parameters, "outsideColor")
    .onChange(generateGalaxy)
    .name("Branch Color");

  gui
    .add(parameters, "showGalaxy")
    .onChange((value) => {
      if (points) points.visible = value;
    })
    .name("Show Galaxy");

  gui
    .add(parameters, "immersiveMode")
    .onChange((value) => {
      const ui = document.getElementById("ui");
      if (ui) ui.style.display = value ? "none" : "block";
    })
    .name("Immersive Mode");

  function generateGalaxy() {
    if (points !== null) {
      geometry.dispose();
      material.dispose();
      scene.remove(points);
    }

    geometry = new THREE.BufferGeometry();

    const positions = new Float32Array(parameters.count * 3);
    const colors = new Float32Array(parameters.count * 3);

    const colorInside = new THREE.Color(parameters.insideColor);
    const colorOutside = new THREE.Color(parameters.outsideColor);

    for (let i = 0; i < parameters.count; i++) {
      //Position
      const x = Math.random() * parameters.radius;
      const branchAngle =
        ((i % parameters.branches) / parameters.branches) * 2 * Math.PI;
      const spinAngle = x * parameters.spin;

      const randomX =
        Math.pow(Math.random(), parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1);
      const randomY =
        Math.pow(Math.random(), parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1);
      const randomZ =
        Math.pow(Math.random(), parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1);

      positions[i * 3] = Math.sin(branchAngle + spinAngle) * x + randomX;
      positions[i * 3 + 1] = randomY;
      positions[i * 3 + 2] = Math.cos(branchAngle + spinAngle) * x + randomZ;

      //Color

      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, x / parameters.radius);

      colors[i * 3 + 0] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    material = new THREE.PointsMaterial({
      color: "white",
      size: parameters.size,
      depthWrite: false,
      sizeAttenuation: true,
      blending: AdditiveBlending,
      vertexColors: true,
      transparent: true,
      alphaMap: shape,
    });

    points = new THREE.Points(geometry, material);
    points.visible = parameters.showGalaxy; // <- respect the toggle state
    scene.add(points);
  }

  let bgStarsGeometry = null;
  let bgStarsMaterial = null;
  let bgStars = null;

  //Background stars
  function generateBgStars() {
    if (bgStars !== null) {
      bgStarsGeometry.dispose();
      bgStarsMaterial.dispose();
      scene.remove(bgStars);
    }

    bgStarsGeometry = new THREE.BufferGeometry();
    const bgStarsPositions = new Float32Array(parameters.stars * 3);

    for (let j = 0; j < parameters.stars; j++) {
      bgStarsPositions[j * 3 + 0] = (Math.random() - 0.5) * 20;
      bgStarsPositions[j * 3 + 1] = (Math.random() - 0.5) * 20;
      bgStarsPositions[j * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    bgStarsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(bgStarsPositions, 3)
    );

    bgStarsMaterial = new THREE.PointsMaterial({
      color: "white",
      size: parameters.size,
      depthWrite: false,
      sizeAttenuation: true,
      blending: AdditiveBlending,
      color: parameters.starColor,
      transparent: true,
      alphaMap: shape,
    });

    bgStars = new THREE.Points(bgStarsGeometry, bgStarsMaterial);

    scene.add(bgStars);
  }

  generateBgStars();

  //gALAXY GENerator
  let geometry = null;
  let material = null;
  let points = null;

  generateGalaxy();

  /**
   * Sizes
   */
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  // lagging when doing height: (window.innerHeight * 500) / 100

  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  /**
   * Camera
   */
  // Base camera
  const camera = new THREE.PerspectiveCamera(
    85,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.x = 3;
  camera.position.y = 3;
  camera.position.z = 3;
  scene.add(camera);

  // Controls
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

  let scroll;
  // Locomotive Scroll initialization
  if (document.querySelector(".scroll-container")) {
    scroll = new LocomotiveScroll({
      el: document.querySelector(".scroll-container"),
      smooth: true,
    });
  }

  /**
   * Renderer
   */
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  /**
   * Animate
   */
  const clock = new THREE.Clock();

  const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Update the camera
    points.rotation.y = elapsedTime * 0.3;
    bgStars.rotation.y = -elapsedTime * 0.05;

    // Update controls
    controls.update();

    // Update locomotive scroll
    if (scroll) {
      scroll.update();
    }

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };

  tick();
};
