import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Mesh } from "three"
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";


export function Golden (){

    //load do carro

    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + "models/golden/scene.gltf"
    );

        //dar downscale pq vem demasiado grande normalmente
    useEffect(() =>{
        //escala do carro
        gltf.scene.scale.set(1, 1, 1);
        //altura do carro
        gltf.scene.position.set(12, 0, 0);
        gltf.scene.rotateY(1.05)
        gltf.scene.traverse((object) => {
            if(object instanceof Mesh) {
                //ligar sombras
                object.castShadow = true ; 
                //ligar receber sombras de outros objetos
                object.receiveShadow = false;
                //intensidade do material
                object.material.envMapIntensity = 20;
            }
        });
    },[gltf]);



    //export do objeto
    return <primitive object={gltf.scene} />;
}
