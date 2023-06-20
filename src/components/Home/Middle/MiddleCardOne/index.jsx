import React from 'react';
import Data from './Data'

function MiddleOne() {
  return (
    <div>
      <div className="grid grid-cols-3 mt-20">
        {
          Data.map((elem, index) => (
            <div className="flex justify-center items-center" key={index + 1}>
              <div className="text-center">
                <img src={elem.img} className="pb-9 px-12" alt="" />
                <h1 className='font-medium text-[27px]'>{elem.title}</h1>
                <p className='w-44 pt-2'>{elem.desc}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MiddleOne