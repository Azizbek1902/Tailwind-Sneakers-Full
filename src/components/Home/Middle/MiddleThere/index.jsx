import React from 'react'
import Data from './Data'
import { GrStar } from 'react-icons/gr';

function MidleThere() {
  return (
    <div>
      <div className="grid grid-cols-3 mx-16">
        {
          Data.map((elem, index) => (
            <div className="flex justify-center items-center gap-4 p-5" key={index + 1}>
              <img src={elem.img} className="" alt="" />
              <div className="">
                <h1 className='font-normal text-[22px]'>{elem.title}</h1>
                <div className="flex gap-2 py-1" >
                  <GrStar className='text-[#FFC600]' />
                  <GrStar className='text-[#FFC600]' />
                  <GrStar className='text-[#FFC600]' />
                  <GrStar className='text-[#FFC600]' />
                  <GrStar className='text-[#C1C8CE]' />
                </div>
                <div className="flex pt-2 gap-3">
                  <p className='text-xl font-medium text-[#FF4858]'>{elem.price}</p>
                  <del className='text-[#C1C8CE] text-xl font-normal'>{elem.discount}</del>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MidleThere