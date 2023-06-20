import React from 'react'

function ApBar() {
  return (
    <div>
        <div className="bg-[#F6F7F8] flex justify-center py-2 gap-2 mb-14">
            <p className='hover:text-[#40BFFF] cursor-pointer' >Home</p>
            <span className='text-[#C1C8CE]'>/</span>
            <p className='hover:text-[#40BFFF] cursor-pointer'>Hot Deal</p>
        </div>
    </div>
  )
}

export default ApBar