import React from 'react'
import img from '../../../assets/images/slider.png'
function Sleder() {
    const deals = [
        { id: 1, title: "Nike", total: 2 },
        { id: 2, title: "Airmax", total: 48 },
        { id: 3, title: "Nike", total: 14 },
        { id: 4, title: "Adidas", total: 15 },
        { id: 5, title: "Vans", total: 23 },
        { id: 6, title: "All Stars", total: 1 },
        { id: 7, title: "Adidas", total: 5 },
    ]
    const brand = [
        { id: 1, title: "Nike", total: 99 },
        { id: 2, title: "Nike", total: 99 },
        { id: 3, title: "Adidas", total: 99 },
        { id: 4, title: "Siemens", total: 99 }
    ]
    return (
        <div>
            <div>
                <div className="bg-[#F6F7F8] p-5" >
                    <h1 className='pb-4 font-bold'>Hot Deals</h1>
                    {
                        deals.map((elem) => (
                            <div className="flex justify-between py-2 hover:text-blue-600" key={elem.id}>
                                <h4>{elem.title}</h4>
                                <h4 className='text-gray-500'>{elem.total}</h4>
                            </div>
                        ))
                    }
                </div>
                <div className="bg-[#F6F7F8] p-5 mt-8" >
                    <h1 className='pb-4 font-bold'>PRICES</h1>
                    <div className="flex justify-between">
                        <h4>Ranger:</h4>
                        <span className="font-semibold">
                            $13.99-@25.99
                        </span>
                    </div> <br />
                    <img src={img} alt="" />
                </div>
                <div className='bg-[#F6F7F8] p-5 mt-8'>
                    <h1 className='pb-8 font-bold'>PRICES</h1>
                    <div className="flex justify-between">
                        <div className="bg-[#006CFF] w-6 h-6 rounded-full"></div>
                        <div className="bg-[#FC3E39] w-6 h-6 rounded-full"></div>
                        <div className="bg-[#171717] w-6 h-6 rounded-full"></div>
                        <div className="bg-[#FFF600] w-6 h-6 rounded-full"></div>
                        <div className="bg-[#FF00B4] w-6 h-6 rounded-full"></div>
                        <div className="bg-[#EFDFDF] w-6 h-6 rounded-full"></div>
                    </div>
                </div>
                <div className="bg-[#F6F7F8] p-5 mt-8" >
                    <h1 className='pb-4 font-bold'>BRAND</h1>
                    {
                        brand.map((elem) => (
                            <div className="flex justify-between py-2 hover:text-blue-600" key={elem.id}>
                                <h4>{elem.title}</h4>
                                <h4 className='text-gray-500'>{elem.total}</h4>
                            </div>
                        ))
                    }
                </div>
                <button className='bg-[#F6F7F8] w-[100%] py-4 mt-8'>MORE</button>
            </div>
        </div>
    )
}

export default Sleder