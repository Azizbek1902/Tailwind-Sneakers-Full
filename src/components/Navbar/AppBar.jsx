import React from "react"
import { BsPerson } from 'react-icons/bs';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function ButtonAppBar() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-11/12 flex justify-between my-4">
          <div className="flex gap-3">
            <h4 className="flex gap-1">EN <AiOutlineCaretDown className="relative top-1/4" size={12} /></h4>
            <h4 className="flex gap-1">USD <AiOutlineCaretDown className="relative top-1/4" size={12} /></h4>
          </div>
          <div className="flex gap-9">
            <p className="flex gap-2">
              <BsPerson size={18} className="relative top-1" />
              My profile
            </p>
            <p className="flex gap-7">
              <AiOutlineShoppingCart className="relative top-1" />
              Items
            </p>
            <p className="flex gap-3 text-gray-400">
              $0.00
              <AiOutlineSearch className="relative top-1 text-black" />
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default ButtonAppBar