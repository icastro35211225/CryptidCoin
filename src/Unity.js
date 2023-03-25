import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function UnityApp() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/UnityBuild.loader.js",
    dataUrl: "Build/UnityBuild.data",
    frameworkUrl: "Build/UnityBuild.framework.js",
    codeUrl: "Build/UnityBuild.wasm",
  });

  return <Unity unityProvider={unityProvider} />;
}