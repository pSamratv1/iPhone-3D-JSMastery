import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef, useState } from "react";
import ModelView from "./ModelView";
import { yellowImg } from "../utils";
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { Group } from "three";
import { View } from "@react-three/drei";
import { models } from "../constants";

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in NAtural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  // Camera control for model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  const small = useRef(new Group());
  const large = useRef(new Group());

  // Rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  useGSAP(() => {
    gsap.to("#heading", { opacity: 1, y: 0 });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 className="section-heading" id="heading">
          Take a closer look.
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={small}
              groupType="view1"
              controlRef={cameraControlSmall}
              onRotationState={setSmallRotation}
              item={model}
              size={size}
            />
            <ModelView
              index={2}
              groupRef={large}
              groupType="view2"
              controlRef={cameraControlLarge}
              onRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas
              className="w-ful h-full"
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>
          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>
            <div className="flex-center">
              <ul className="color-container">
                {models.map((items, idx) => (
                  <li
                    key={idx}
                    className="w-6 h-6 rounded-full mx-2"
                    style={{ backgroundColor: items.color[0] }}
                    onClick={() => setModel(items)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
