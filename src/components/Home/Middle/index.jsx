import React from 'react'
import MiddleOne from './MiddleCardOne'
import MiddleTwo from './MiddleCardTwo'
import MidleThere from './MiddleThere'

function Middle() {
    return (
        <div>
            <MiddleOne />
            <h1 className='text-4xl font-semibold leading-10 text-center my-16'>LATEST NEWS</h1>
            <MiddleTwo />
            <h1 className='text-4xl font-semibold leading-10 text-center my-16'>FEATURED PRODUCTS</h1>
            <MidleThere />
            <div className="flex justify-center mt-16">
                <input type="text" className='rounded-l px-5 outline-0 py-3 w-[36%] border-2 border-[#40BFFF]' placeholder='Search query...' />
                <button className='bg-[#40BFFF] text-white px-5 py-3 rounded-r-md'>Search</button>
            </div>
        </div>
    )
}

export default Middle