import React from "react";
import logo from "../assets/logo.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { BsFillInboxFill } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { BiWindows } from "react-icons/bi";

const Navbar = () => {
    return (
        <div className="sticky top-0 bg-[#FFFFFF] px-4 py-[0.5rem] flex items-center justify-between shadow-md z-20">
            {/* Left */}
            <div className="flex items-center gap-5">
                <img src={logo} alt="Logo" className="w-9 h-9" />
                <div className="cursor-pointer">
                    <p className="font-semibold text-[18px] hover:text-[#9147FF] hidden md:block lg:block">
                        Browse
                    </p>
                    <BiWindows className="text-[20px] hover:text-[#9147FF] md:hidden lg:hidden cursor-pointer" />
                </div>
                <div className="p-1 rounded-[3px] hover:bg-[#EFEFF1]">
                    <BsThreeDotsVertical className="text-[20px] cursor-pointer" />
                </div>
            </div>
            {/* Midle */}
            <div className="hidden sm:flex items-center relative">
                <input
                    type="seach"
                    placeholder="Search"
                    className="outline-none bg-[#EBEBEB] p-1.5 rounded-[10px] pl-8 sm:w-[10rem] md:w-[20rem] lg:w-[25rem]"
                />
                <BiSearch className="absolute right-5 text-[20px]" />
            </div>
            <div>
                <BiSearch className="hover:text-[#9147FF] text-[20px] sm:hidden" />
            </div>
            {/* Right */}
            <div className="flex items-center gap-3">
                <div className="relative mr-1">
                    <BsFillInboxFill className="text-[20px]" />
                    <div className="absolute -top-1.5 -right-3 w-6 h-4 bg-[red] rounded-[10px] px-1 flex items-center justify-center animate-bounce">
                        <p className="text-[12px] text-[white]">79</p>
                    </div>
                </div>
                <div className="bg-[#EBEBEB] px-2 py-0.5 rounded-[5px] hover:bg-[#d5cfcf]">
                    <button className="font-semibold text-[15px]">
                        Log In
                    </button>
                </div>
                <div className="bg-[#9147FF] px-2 py-0.5 rounded-[5px] hover:bg-[#7229e0]">
                    <button className="text-[#FFFFFF] font-semibold text-[15px]">
                        Sign Up
                    </button>
                </div>
                <div className="p-1 rounded-[3px] hover:bg-[#EFEFF1]">
                    <BiUser className="text-[20px]" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
