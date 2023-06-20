import React from "react";
import foo from "../../assets/images/footere.png";
import logo from "../../assets/images/Icon.png";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <div className="bg-[#BCDDFE] mt-16">
        <div className="mx-28 pt-28 mb-9 grid grid-cols-4">
          <div className="p-2 col-span-2">
            <div className="flex gap-3 items-center pb-6" >
              <img src={logo} alt="" />
              <p className="text-lg font-bold">E-Comm</p>
            </div>
            <p className="text-xs">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard <br /> dummy text ever.Since the 1500s, when <br /> an unknown printer.</p>
          </div>
          <div className="pt-8">
            <h2 className="text-lg font-medium pb-5">Follow Us</h2>
            <p className="text-xs">Since the 1500s, when an unknown <br /> printer took a galley of type and <br /> scrambled.</p>
            <div className="flex gap-8 pt-4">
                <FaFacebookF color="#385C8E"/>
                <BsTwitter color="#03A9F4"/>
            </div>
          </div>
          <div className="pt-7">
            <h1 className="text-lg font-medium pb-5">Contact Us</h1>
            <p className="text-xs">E-Comm , 4578 <br /> Marmora Road, <br /> Glasgow D04 89GR</p>
          </div>
        </div>
        <div className="grid grid-cols-4 mx-28 mb-9">
          <div className="p-4">
            <h1 className="pb-7 text-lg">Infomation</h1>
            <p className="text-sm">About Us <br />  Infomation <br /> Privacy Policy <br /> Terms & Conditions</p>
          </div>
          <div className="p-4">
            <h1 className="pb-7 text-lg">Service</h1>
            <p className="text-sm">About Us <br />  Infomation <br /> Privacy Policy <br /> Terms & Conditions</p>
          </div>
          <div className="p-4">
            <h1 className="pb-7 text-lg">My Account</h1>
            <p className="text-sm">About Us <br />  Infomation <br /> Privacy Policy <br /> Terms & Conditions</p>
          </div>
          <div className="p-4">
            <h1 className="pb-7 text-lg">Our Offers</h1>
            <p className="text-sm">About Us <br />  Infomation <br /> Privacy Policy <br /> Terms & Conditions</p>
          </div>
        </div>
        <hr className=" w-11/12 border-[1.5px] ml-12 bprder-[#F6F7F8]" />
        <div className="px-20 pt-10 pb-10 flex justify-end">
          <img src={foo} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Footer