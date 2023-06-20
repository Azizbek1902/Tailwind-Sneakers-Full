import React from 'react'
import Data from './Data'

function MiddleTwo() {
  return (
    <div>
      <div className="grid grid-cols-3 mx-16">
        {
          Data.map((elem, index) => (
            <div className="flex justify-center items-center gap-4 p-5" key={index + 1}>
              <img src={elem.img} className="" alt="" />
              <div className="">
                <p className='text-[#C1C8CE] text-lg'>{elem.date}</p>
                <h1 className='font-medium text-[27px]'>{elem.title}</h1>
                <p className='pt-2'>{elem.desc}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MiddleTwo