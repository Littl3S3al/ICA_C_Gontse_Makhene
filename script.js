import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/controls/OrbitControls.js';
import { CSS3DRenderer, CSS3DObject } from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/renderers/CSS3DRenderer.js';




// variables for event listeners
const beginBtn = document.querySelector('#btn-begin');
const overlay = document.querySelector('#overlay');
const threeJsWindow = document.querySelector('#three-js-container');

var rotate = 0;

const rhs = document.querySelector('#right');
const left = document.querySelector('#left');

// three.js functions
const main  = () => {

    const canvas = document.querySelector('#c');
    var renderer = new CSS3DRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight);
    canvas.appendChild( renderer.domElement );
    
    // camera
    const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 15000 );
    camera.position.set( 0, 500, 1000 );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();

    const group1 = new THREE.Group();
    group1.add( new Element( 'SJOz3qjfQXU', 0, 0, 240, 0 ) );
    group1.add( new Element( 'Y2-xZ-1HE-Q', 240, 0, 0, Math.PI / 2 ) );
    group1.add( new Element( 'IrydklNpcFI', 0, 0, - 240, Math.PI ) );
    group1.add( new Element( '9ubytEsCaS0', - 240, 0, 0, - Math.PI / 2 ) );
    scene.add( group1 );

    group1.position.x = -300;

    const group2 = new THREE.Group();
    group2.add( new Element( 'SJOz3qjfQXU', 0, 0, 240, 0 ) );
    group2.add( new Element( 'Y2-xZ-1HE-Q', 240, 0, 0, Math.PI / 2 ) );
    group2.add( new Element( 'IrydklNpcFI', 0, 0, - 240, Math.PI ) );
    group2.add( new Element( '9ubytEsCaS0', - 240, 0, 0, - Math.PI / 2 ) );
    scene.add( group2 );

    group2.position.x = 300;


    var light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 0.5, 1, 1 ).normalize();
    scene.add( light );

    scene.add( new THREE.AmbientLight( 0xffffff, 0.5 ) );



     // render the scene
     renderer.render(scene, camera);

     // create a loop to render animation
     const render = () => {

        if(group1.rotation.y < rotate * Math.PI /180){
            group1.rotation.y += (rotate * Math.PI /180 - group1.rotation.y)/10
        } else if(group1.rotation.y > rotate * Math.PI /180){
            group1.rotation.y -= (group1.rotation.y - rotate * Math.PI /180)/10
        } 

        if(group2.rotation.y < rotate * Math.PI /180){
            group2.rotation.y += (rotate * Math.PI /180 - group2.rotation.y)/10
        } else if(group2.rotation.y > rotate * Math.PI /180){
            group2.rotation.y -= (group2.rotation.y - rotate * Math.PI /180)/10
        }
    


         renderer.render(scene, camera);

         requestAnimationFrame(render);
     }
     requestAnimationFrame(render);

     function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );

    }
    window.addEventListener( 'resize', onWindowResize, false );

 }; //end of function


 function Element( id, x, y, z, ry ) {
    const div = document.createElement( 'div' );
    div.style.width = '480px';
    div.style.height = '360px';
    div.style.backgroundColor = '#000';

    const iframe = document.createElement( 'iframe' );
    iframe.style.width = '480px';
    iframe.style.height = '360px';
    iframe.style.border = '0px';
    iframe.src = [ 'https://www.youtube.com/embed/', id, '?rel=0' ].join( '' );
    div.appendChild( iframe );

    const object = new CSS3DObject( div );
    object.position.set( x, y, z );
    object.rotation.y = ry;

    return object;

};



// event listeners
beginBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    threeJsWindow.style.display = 'block';
    main();
});

beginBtn.addEventListener('touchend', () => {
    overlay.style.display = 'none';
    threeJsWindow.style.display = 'block';
    main();
});


left.addEventListener('click', () => {
    rotate -= 90;
    console.log('left')
})

rhs.addEventListener('click', () => {
    rotate += 90;
    console.log('left')
})
