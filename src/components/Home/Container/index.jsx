import React from 'react'
import Card from '../Card'
import Data from './Data'

function Container() {
    return (
        <div>
            <div className="mt-64 mb-11">
                <h1 className='text-[35px] leading-[52px] font-semibold text-center'>BEST SELLER</h1>
                <div className="flex text-xl cursor-pointer  justify-center gap-14 mt-6 mb-9">
                    <h2 className='hover:text-[#40BFFF] hover:border-b-2 border-[#40BFFF]'>All</h2>
                    <h2 className='hover:text-[#40BFFF] hover:border-b-2 border-[#40BFFF]'>Bags</h2>
                    <h2 className='hover:text-[#40BFFF] hover:border-b-2 border-[#40BFFF]'>Sneakers</h2>
                    <h2 className='hover:text-[#40BFFF] hover:border-b-2 border-[#40BFFF]'>Belt</h2>
                    <h2 className='hover:text-[#40BFFF] hover:border-b-2 border-[#40BFFF]'>Sunglasses</h2>
                </div>
                <div className="w-11/12 ml-14">
                    <div className="grid grid-cols-4 gap-4">
                        {
                            Data.map((elem) => (
                                <Card image={elem.img} />
                            ))
                        }
                    </div>
                </div>
                <div className="flex justify-center">
                    <h1 className='border-b-2 border-[#40BFFF] text-xl leading-7 text-[#33A0FF] w-32 text-center font-medium pb-1'>LOAD MORE</h1>
                </div>
            </div>
        </div>
    )
}

export default Container