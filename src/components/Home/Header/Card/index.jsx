import React from 'react'
import img from '../../../../assets/images/card2.png';
import img2 from '../../../../assets/images/card1.png';
import img3 from '../../../../assets/images/card3.png';

function Card() {
    const data = [
        {
            id: 1,
            img: img,
            title: `FS - QUILTED MAXICROSS BAG`,
            price: "$299,43",
            priceOld: "$534,33",
            discount: "24% Off"
        },
        {
            id: 2,
            img: img2,
            title: `FS - Nike Air Max 270 React...`,
            price: "$299,43",
            priceOld: "$534,33",
            discount: "24% Off"
        },
        {
            id: 3,
            img: img3,
            title: `FS - Nike Air Max 270 React...`,
            price: "$299,43",
            priceOld: "$534,33",
            discount: "24% Off"
        }
    ]
    return (
        <div>
            <div className="flex">
                {
                    data.map((elem, index) => (
                        <div key={index + 1} className="p-8 bg-cover bg-no-repeat  w-full h-[354px] bg-[image:var(--image-url)]" style={{ '--image-url': `url(${elem.img})` }}>
                            <div className="flex justify-between gap-6">
                                <h2 className='text-[#223263] font-bold text-[20px] '>{elem.title}</h2>
                                <h2 className='text-[#40BFFF] font-bold text-[30px] font-serif'>{elem.price}</h2>
                            </div>
                            <div className="flex justify-center pt-60 gap-5">
                                <del className='text-[18px] text-[#9098B1] font-semibold leading-[27px]'>{elem.priceOld}</del>
                                <h4 className='text-[18px] text-[#FB7181] font-semibold leading-[27px]'>{elem.discount}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Card