import React from 'react';
import arrowRight from '../assets/icons/icons8-right-50.png'
import Canvas3D from "./Canvas3D";
import furniture2 from "../assets/3d/furniture2.glb";
import furniture3 from "../assets/3d/furniture3.glb";
import furniture4 from "../assets/3d/furniture4.glb";

const Featured = () => (
  <section className='flex items-center justify-between'>
    <h3 className='-rotate-90 text-xl font-semibold'>Featured</h3>
    <div className="flex space-x-7">
      <div className="h-[90px] w-[128px] relative rounded-xl bg-white shadow-lg flex justify-center">
        <div className="flex flex-col items-center absolute bottom-0">
          <Canvas3D
            width={90}
            height={90}
            containerId='test'
            canvasId='canvasId2'
            asset3D={furniture2}
            options={{
              scale: 70,
              positionY: -10
            }}
          />
          <p className='text-sm text-gray-400'>type 1</p>
          <p>$120.30</p>
        </div>
      </div>
      <div className="h-[90px] w-[128px] relative rounded-xl bg-white shadow-lg flex justify-center">
        <div className="flex flex-col items-center absolute bottom-0">
          <Canvas3D
            width={90}
            height={90}
            containerId='test'
            canvasId='canvasId3'
            asset3D={furniture3}
            options={{
              scale: 1.2,
              positionY: -10
            }}
          />
          <p className='text-sm text-gray-400'>type 2</p>
          <p>$120.30</p>
        </div>
      </div>
      <div className="h-[90px] w-[128px] relative rounded-xl bg-white shadow-lg flex justify-center">
        <div className="flex flex-col items-center absolute bottom-0">
          <Canvas3D
            width={90}
            height={100}
            containerId='test'
            canvasId='canvasId4'
            asset3D={furniture4}
            options={{
              scale: 40,
              positionY: -20
            }}
          />
          <p className='text-sm text-gray-400'>type 3</p>
          <p>$120.30</p>
        </div>
      </div>
    </div>
    <button className='bg-gray-800 p-2 rounded-full'>
      <img className='w-[30px] h-[30px]' src={arrowRight} alt=""/>
    </button>
  </section>
);

export default Featured;