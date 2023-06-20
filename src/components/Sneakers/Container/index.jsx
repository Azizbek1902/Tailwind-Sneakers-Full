import React from 'react';
import Data from './Data'
import { AiFillStar, AiFillCaretDown } from 'react-icons/ai';
import img from '../../../assets/images/big.png'
import img1 from '../../../assets/svg/1.png'
import img2 from '../../../assets/svg/2.png'

function Container() {
  return (
    <div>
      <div className="bg-[#40BFFF] mx-3">
        <div className="flex justify-center gap-6">
          <div className='pt-12'>
            <h1 className='text-4xl text-white font-semibold'>Adidas Men Running <br /> Sneakers</h1>
            <p className='text-white pt-5'>Performance and design. Taken right to the edge.</p>
            <button className='pt-11 text-white border-b-4 pb-1 border-white font-semibold'>SHOP NOW</button>
          </div>
          <img src={img} className="w-[397px] relative bottom-9" alt="" />
        </div>
      </div>
      <div className="flex justify-between bg-[#F6F7F8] mb-5 mt-5 mx-3">
        <div className='flex gap-9 items-center pl-5'>
          <h2 className='pr-6'>13 Items</h2>
          <h2>Sort By</h2>
          <h2 className='pr-1'>Name</h2>
          <AiFillCaretDown />
          <h2 className='pl-5'>Show</h2>
          <h2 className='pr-6'>12</h2>
          <AiFillCaretDown />
        </div>
        <div className='flex'>
          <img src={img2} alt="" />
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-3">
        {Data.map((item) => (
          <div className="mx-3 my-2 border-2 boder-[#F6F7F8] text-center pb-3" key={item.id}>
            <img src={item.img} alt="" />
            {/* <p className='bg-[#FF4858] w-14 py-1 text-white relative bottom-18'>HOT</p> */}
            <h1 className='font-[700] text-[#223263] pt-3'>Nike Air Max 270 React</h1>
            <div className="flex justify-center gap-2 my-2">
              <AiFillStar color='#FFC600' />
              <AiFillStar color='#FFC600' />
              <AiFillStar color='#FFC600' />
              <AiFillStar color='#FFC600' />
              <AiFillStar color='#C1C8CE' />
            </div>
            <div className="flex mx-8 justify-between">
              <h1 className='text-[#40BFFF] font-bold'>$299,43</h1>
              <p className='text-[#9098B1] font-semibold text-base'>$534,33</p>
              <p className='text-[#FB7181] font-semibold text-base'>24% Off</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Container