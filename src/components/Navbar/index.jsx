import React from 'react';
import img from '../../assets/images/Icon.png'
import ButtonAppBar from './AppBar';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ButtonAppBar />
            <div className='flex justify-center'>
                <div className='w-11/12 flex justify-between my-4'>
                    <div className='flex gap-2'>
                        <img src={img} alt="" />
                        <h5  className='font-bold relative top-2'>E-Comm</h5>
                    </div>
                    <ul className='flex gap-28'>
                        <li>
                            <Link className='font-semibold focus:text-[#40BFFF] ' to="/">HOME</Link>
                        </li>
                        <li>
                            <Link className='font-semibold focus:text-[#40BFFF] ' to="/bag">BAGS</Link>
                        </li>
                        <li>
                            <Link className='font-semibold focus:text-[#40BFFF] ' to="/snak">SNEAKERS</Link>
                        </li>
                        <li>
                            <Link className='font-semibold focus:text-[#40BFFF] ' to="/belt">BELT</Link>
                        </li>
                        <li>
                            <Link className='font-semibold focus:text-[#40BFFF] ' to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar