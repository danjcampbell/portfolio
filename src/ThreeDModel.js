import { Engine, Scene } from "react-babylonjs";
import {
  Vector3,
  Color3,
  ActionManager,
  SetValueAction,
} from "@babylonjs/core";
import { useState } from "react";
import ScaledModelWithProgress from "./ScaledModelWithProgress";

export const ThreeDModel = () => {
  const [settings, setSettings] = useState({
    ypos: -2,
    scaling: 5,
  });

  const onModelLoaded = (model) => {
    let mesh = model.meshes[1];
    console.log("loaded mesh:", mesh);
    mesh.actionManager = new ActionManager(mesh._scene);
    mesh.actionManager.registerAction(
      new SetValueAction(
        ActionManager.OnPointerOverTrigger,
        mesh.material,
        "wireframe",
        true
      )
    );
    mesh.actionManager.registerAction(
      new SetValueAction(
        ActionManager.OnPointerOutTrigger,
        mesh.material,
        "wireframe",
        false
      )
    );
  };

  let baseUrl = "/public/pika";
  return (
    <Engine
      antialias={true}
      adaptToDev
      iceRatio={true}
      canvasId="sample-canvas"
      height="500"
      width="500"
    >
      <Scene>
        <arcRotateCamera
          name="camera1"
          alpha={Math.PI + 0.3}
          beta={Math.PI / 2.5}
          radius={10}
          target={Vector3.Zero()}
          minZ={0.001}
        />
        <hemisphericLight
          name="light1"
          intensity={0.9}
          direction={Vector3.Up()}
        />

        <ScaledModelWithProgress
          rootUrl={`/`}
          sceneFilename="pika/Duck.glb"
          scaleTo={settings.scaling}
          progressBarColor={Color3.FromInts(255, 165, 0)}
          center={new Vector3(0, settings.ypos, 0)}
          onModelLoaded={onModelLoaded}
        />
      </Scene>
    </Engine>
  );
};
