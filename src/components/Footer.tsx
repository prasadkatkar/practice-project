import { RxTwitterLogo } from "react-icons/rx";
import { SlSocialFacebook } from "react-icons/sl";
import { SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <div>
      <div className="bg-[#232323]">
        <div className="flex justify-center">
          <h1 className="text-[#9E866A] text-[36px]">GET IN TOUCH</h1>
        </div>
        <div className="flex flex-col items-center">
          <input
            className="text-[#9E866A] w-[50%] border-b-1 border-[#9E866A] outline-none p-1"
            type="text"
            placeholder="Name"
          />
          <input
            className="text-[#9E866A] w-[50%] border-b-1 border-[#9E866A] outline-none p-1"
            type="text"
            placeholder="Email"
          />
          <input
            className="text-[#9E866A] w-[50%] border-b-1 border-[#9E866A] outline-none p-1"
            type="text"
            placeholder="Message"
          />
          <button className="bg-[#9E866A] w-[50%] mt-[29px] p-1 mb-[29px]">
            Submit
          </button>
        </div>
      </div>
      <div className="bg-black ">
        <div className="flex justify-center gap-10">
          <a className="" href="https://x.com/i/flow/login" target="_blank">
            <RxTwitterLogo className="bg-white mt-[26px]" />
          </a>
          <a href="https://www.facebook.com/kajavefurniturekop" target="_blank">
            <SlSocialFacebook className="bg-white mt-[26px]" />
          </a>
          <a
            href="https://www.instagram.com/kajavefurniturekolhapur/"
            target="blank"
          >
            <SiInstagram className="bg-white mt-[26px]" />
          </a>
        </div>
        <div className="flex justify-between mx-auto pl-10 pr-10 mt-5 pb-10 ">
          <p className="text-white">
            <span className="text-[#C3A989]">Email:</span>{" "}
            kajavefurniture@gmail.com
          </p>
          <p className="text-white">
            <span className="text-[#C3A989]">Address:</span> 9/1/3, Lonar
            vasahat, Near Menon and Menon, Kolhapur, Maharashtra 416005
          </p>
          <p className="text-white">Kajave Furniture | Copyright 2019</p>
        </div>
      </div>
    </div>
  );
}
