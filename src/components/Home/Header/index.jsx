import React from 'react'
import Img from '../../../assets/images/headerBg.png'
import Card from './Card'

function Header() {
    return (
        <div>
            <div className="bg-cover bg-no-repeat h-[80vh] w-full bg-[image:var(--image-url)]" style={{ '--image-url': `url(${Img})` }}>
                <h1 className='text-white text-[64px] leading-snug ml-24 pt-36'>Super Flash Sale <br />  50% Off</h1>
                <div className="mx-24 mt-8">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Header