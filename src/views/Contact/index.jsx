import React from 'react'
import img from '../../assets/images/card3.png';
import img1 from '../../assets/images/card7.png';

function Contact() {
    const data = [
        {
            id: 1,
            img: img,
            price: "$998",
            priceOld: "$499"
        },
        {
            id: 2,
            img: img1,
            price: "$998",
            priceOld: "$499"
        }
    ]
    return (
        <div>
            <div className="bg-[#F6F7F8] flex justify-center py-2 gap-2 mb-14">
                <p className='hover:text-[#40BFFF] cursor-pointer text-[#40BFFF]' >Home / Hot Deal</p>
                <span className='text-[#C1C8CE]'>/</span>
                <p className='hover:text-[#40BFFF] cursor-pointer'>Nike Airmax 270 React</p>
            </div>
            <div className="flex justify-center">
                <div className="w-[1100px]">
                    <div className="flex justify-between">
                        <h1>PRODUCT</h1>
                        <div className="flex gap-12">
                            <h1>PRICE</h1>
                            <h1>QTY</h1>
                            <h1>UNIT PRICE</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-[1100px]">
                    {
                        data.map((elem) => (
                            <div key={elem.id}>
                                <div className="flex justify-between items-center my-10">
                                    <div className="flex items-center gap-7">
                                        <img src={elem.img} className="w-[137.85px] h-[94px]" alt="" />
                                        <h1>Nike Airmax 270 react</h1>
                                    </div>
                                    <div className="flex items-center gap-24">
                                        <p>{elem.price}</p>
                                        <button className='flex items-center justify-between px-4 py-2 gap-6 bg-[#F6F7F8]' >
                                            <span className='text-[#33A0FF] text-2xl'>-</span>
                                            <span className='text-lg'>2</span>
                                            <span className='text-[#33A0FF] text-2xl'>+</span>
                                        </button>
                                        <p>{elem.priceOld}</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex justify-center mt-20">
                <div className="w-[1100px]">
                    <div className="flex justify-between">
                        <div className="flex items-start">
                            <input type="text" className='rounded-l px-5 outline-0 py-3 border-2 border-[#40BFFF]' placeholder='Search query...' />
                            <button className='bg-[#40BFFF] text-white px-5 py-3 rounded-r-md h-[52px]'>Search</button>
                        </div>
                        <div className="mr-10 w-72">
                            <div className="flex justify-between my-4">
                                <h1 className='text-lg'>Subtotal</h1>
                                <h1 className='text-lg'>$998</h1>
                            </div>
                            <div className="flex justify-between my-4">
                                <h1 className='text-lg'>Shipping fee</h1>
                                <h1 className='text-lg'>$20</h1>
                            </div>
                            <div className="flex justify-between my-4">
                                <h1 className='text-lg'>Coupon</h1>
                                <h1 className='text-lg'>No</h1>
                            </div>
                            <hr />
                            <div className="flex justify-between mt-4">
                                <h1 className='text-3xl font-medium'>TOTAL</h1>
                                <h1 className='text-3xl font-medium'>$118</h1>
                            </div>
                            <button className='flex justify-center rounded items-center w-full bg-[#33A0FF] text-white py-3 mt-3'>Check out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact