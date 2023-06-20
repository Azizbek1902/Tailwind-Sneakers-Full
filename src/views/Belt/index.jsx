import React from 'react'
import Header from '../../components/Belt/Header'
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import Navigation from '../../components/Belt/Navigation'
import Card from '../../components/Home/Card'
import Data from './Data'

function Belt() {
    return (
        <div>
            <div className="bg-[#F6F7F8] flex justify-center py-2 gap-2 mb-14">
                <p className='hover:text-[#40BFFF] cursor-pointer text-[#40BFFF]' >Home / Hot Deal</p>
                <span className='text-[#C1C8CE]'>/</span>
                <p className='hover:text-[#40BFFF] cursor-pointer'>Nike Airmax 270 React</p>
            </div>
            <Header />
            <div className="flex gap-2 justify-center mt-9">
                <button className='flex gap-3 py-3 px-7 rounded bg-[#385C8E] items-center text-white'>
                    <FaFacebookF />
                    Share on Facebook
                </button>
                <button className='flex gap-3 py-3 px-7 rounded bg-[#03A9F4] items-center text-white'>
                    <AiOutlineTwitter />
                    Share on Twitter
                </button>
            </div>
            <div className="flex justify-center">
                <div className='w-[1100px]'>
                    <Navigation />
                </div>
            </div>
            <h1 className='text-4xl leading-[53px] text-center font-semibold my-10'>RELATED PRODUCTS</h1>
            <div className="flex justify-center">
                <div className="w-[1245px]">
                    <div className="grid grid-cols-4 gap-4">
                        {
                            Data.map((elem) => (
                                <Card image={elem.img} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Belt