import React from 'react';
import Canvas3D from "./Canvas3D";
import furniture1 from '../assets/3d/furniture1.glb'

const Banner = () => (
  <section className='w-full md:w-[90%] mx-auto flex items-center justify-between'>
    <div className='space-y-6'>
      <div className="space-y-3 max-w-[400px]">
        <h1 className='text-3xl font-bold'>
          Exotic minimal <br/>furniture
        </h1>
        <p>Choose from a wide range of well-created premium quality wooden furniture online</p>
      </div>
      <button className='bg-gray-800 text-white rounded-sm py-3 px-4 leading-none text-sm'>
        EXPLORE
      </button>
    </div>
    <Canvas3D
      className='cursor-grab '
      width={350}
      height={400}
      containerId='test'
      canvasId='canvasId1'
      asset3D={furniture1}
      options={{
        scale: 0.3,
        positionY: -7
      }}
    />
  </section>
);

export default Banner;