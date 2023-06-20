import React from 'react';
import Data from './Data'
import { AiFillStar, AiFillCaretDown, AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
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
      <div className="">
        {Data.map((item) => (
          <div className="mx-3 my-16 flex gap-4" key={item.id}>
            <img src={item.img} className="w-[299.5px] h-[272.5px]" alt="" />
            <div className="te">
              <h1 className='font-[500] text-2xl text-[#22262A]'>Nike Air Max 270 React</h1>
              <div className="flex gap-4 mt-4 mb-3">
                <div className="flex justify-center gap-2 my-1">
                  <AiFillStar color='#FFC600' size={14}/>
                  <AiFillStar color='#FFC600' size={14}/>
                  <AiFillStar color='#FFC600' size={14}/>
                  <AiFillStar color='#FFC600' size={14}/>
                  <AiFillStar color='#C1C8CE' size={14}/>
                </div>
                <p>0 reviews</p>
                <p>Submit a review</p>
              </div>
              <div className="flex gap-3 pb-5 items-center">
                <h1 className='text-[#40BFFF] text-xl font-bold'>$299,43</h1>
                <p className='text-[#9098B1] text-sm font-semibold'>$534,33</p>
                <p className='text-[#FB7181] text-sm  font-semibold'>24% Off</p>
              </div>
              <p className='text-sm pb-9'>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut <br /> lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin <br /> vulputate g nisl ut dolor ...</p>
              <div className="flex relative top-4 gap-5">
                <button className="flex gap-5 bg-[#EBF5FF] px-4 py-3">
                  <AiOutlineShoppingCart color='#33A0FF' size={18}/>
                  <span className='text-[#33A0FF] text-sm'>Add to Cart</span>
                </button>
                <button className="bg-[#EBF5FF] px-4 py-3">
                  <AiOutlineHeart color='#33A0FF' size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Container