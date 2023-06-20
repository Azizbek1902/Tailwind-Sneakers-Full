import React from 'react'
import { GrStar } from 'react-icons/gr';

function Card({image}) {
    return (
        <div>
            <div className="border-[#F6F7F8] border-2">
                <img src={image} alt="" />
                <div className="my-5 text-center">
                    <h1 className='text-[#223263] text-lg font-bold leading-7'>Nike Air Max 270 React</h1>
                    <div className="flex gap-2 py-1 justify-center" >
                        <GrStar className='text-[#FFC600]' />
                        <GrStar className='text-[#FFC600]' />
                        <GrStar className='text-[#FFC600]' />
                        <GrStar className='text-[#FFC600]' />
                        <GrStar className='text-[#C1C8CE]' />
                    </div>
                    <div className="flex gap-3 justify-center items-center">
                        <h3 className='text-[#40BFFF] text-lg leading-8 font-bold'>$299,43</h3>
                        <del className='text-sm text-[#9098B1] font-normal'>$534,33</del>
                        <p className='text-[#FB7181] font-bold'>24% Off</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card