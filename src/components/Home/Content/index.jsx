import React from 'react'
import Img from '../../../assets/images/big.png'

function Content() {
    return (
        <div>
            <div className="bg-[#40BFFF]">
                <div className="w-11/12 flex" style={{margin:"0 auto"}}>
                    <div className="grid grid-cols-2">
                        <div className="mt-28">
                            <h1 className='text-[55px] text-white font-mono'>Adidas Men Running <br /> Sneakers</h1>
                            <p className='text-white leading-9 text-2xl py-4'>Performance and design. Taken right to the edge.</p>
                            <h1 className='border-b-2 border-white text-xl leading-7 text-white w-32 font-medium pb-1'>SHOP NOW</h1>
                        </div>
                        <img src={Img} className="relative bottom-16" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content