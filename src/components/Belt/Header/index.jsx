import React from 'react'
import img from '../../../assets/images/card3.png';
import img1 from '../../../assets/images/carddd1.png';
import img2 from '../../../assets/images/carddd2.png';
import img3 from '../../../assets/images/card3.png';
import img4 from '../../../assets/images/carddd3.png';
import img5 from '../../../assets/images/card7.png';
import { AiFillStar, AiOutlineCaretDown , AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'

function Header() {
    return (
        <div className="flex justify-center">
            <div className='w-[1245px]'>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-4">
                        <img src={img} className="w-[375px] h-[271.68px]" alt="" />
                        <div className="flex justify-between mx-2 mt-28">
                            <img src={img1} className="w-[85.79px]" alt="" />
                            <img src={img2} className="w-[85.79px]" alt="" />
                            <img src={img3} className="w-[85.79px]" alt="" />
                            <img src={img4} className="w-[85.79px]" alt="" />
                        </div>
                    </div>
                    <div className="col-span-5">
                        <h1 className='font-[500] text-2xl text-[#22262A]'>Nike Air Max 270 React</h1>
                        <div className="flex gap-4 mt-4 mb-3">
                            <div className="flex justify-center gap-2 my-1">
                                <AiFillStar color='#FFC600' size={14} />
                                <AiFillStar color='#FFC600' size={14} />
                                <AiFillStar color='#FFC600' size={14} />
                                <AiFillStar color='#FFC600' size={14} />
                                <AiFillStar color='#C1C8CE' size={14} />
                            </div>
                            <p>0 reviews</p>
                            <p>Submit a review</p>
                        </div>
                        <hr />
                        <div className="flex gap-3 pb-5 pt-4 items-center">
                            <h1 className='text-[#40BFFF] text-xl font-bold'>$299,43</h1>
                            <p className='text-[#9098B1] text-sm font-semibold'>$534,33</p>
                            <p className='text-[#FB7181] text-sm  font-semibold'>24% Off</p>
                        </div>
                        <div className="flex justify-between w-48 pb-2">
                            <h1 className='text-sm'>Availability:</h1>
                            <h1 className='text-sm'>In stock</h1>
                        </div>
                        <div className="flex justify-between w-48 pb-2  ">
                            <h1 className='text-sm'>Category::</h1>
                            <h1 className='text-sm'>Accessories</h1>
                        </div>
                        <h1 className='text-sm pb-6'>Free shipping</h1>
                        <div className="flex gap-24">
                            Select Color:
                            <div className="flex gap-4">
                                <div className="w-6 h-6 rounded-full bg-[#006CFF]"></div>
                                <div className="w-6 h-6 rounded-full bg-[#FC3E39]"></div>
                                <div className="w-6 h-6 rounded-full bg-[#171717]"></div>
                                <div className="w-6 h-6 rounded-full bg-[#FFF600]"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-48 mt-8">
                            <h1>Size</h1>
                            <button className='flex gap-20 border-[#E5E5E5] border-[1px] py-2 px-3 items-center'>
                                XS
                                <AiOutlineCaretDown />
                            </button>
                        </div>
                        <hr />
                        <div className="flex justify-between mt-12">
                            <button className='flex items-center justify-between px-4 py-2 gap-6 bg-[#F6F7F8]' >
                                <span className='text-[#33A0FF] text-2xl'>-</span>
                                <span className='text-lg'>2</span>
                                <span className='text-[#33A0FF] text-2xl'>+</span>
                            </button>
                            <div className="flex gap-5">
                                <button className="flex gap-5 bg-[#EBF5FF] px-4 py-3">
                                    <AiOutlineShoppingCart color='#33A0FF' size={18} />
                                    <span className='text-[#33A0FF] text-sm'>Add to Cart</span>
                                </button>
                                <button className="bg-[#EBF5FF] px-4 py-3">
                                    <AiOutlineHeart color='#33A0FF' size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <h1 className='text-lg text-[#C1C8CE] '>BEST SELLER</h1>
                        <div className="border-2 border-[#F6F7F8]">
                            <img src={img5} alt="" />
                            <div className="flex justify-center gap-1 my-1 mt-12">
                                <AiFillStar color='#FFC600' size={14} />
                                <AiFillStar color='#FFC600' size={14} />
                                <AiFillStar color='#FFC600' size={14} />
                                <AiFillStar color='#FFC600' size={14} />
                                <AiFillStar color='#C1C8CE' size={14} />
                            </div>
                            <div className='flex justify-center gap-3 my-1 mt-3 mb-8'>
                                <span className='text-[#FF4858] text-base'>$499</span>
                                <del className='text-[#C1C8CE] text-base'>$599</del>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header