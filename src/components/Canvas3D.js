import React, {useEffect} from 'react';
import useThreeJs from "../lib/utilThreeJs.";

const Canvas3D = ({className, canvasId, asset3D, width= 300, height = 300, options}) => {

  useEffect(() => {
    const three = new useThreeJs(canvasId)
    three.initialize(width, height)
    three.animate()
    three.loaderAsset({asset: asset3D, ...options})
  }, [asset3D, width, height])


  return (
    <canvas className={className} id={canvasId}/>
  );
}

export default Canvas3D;