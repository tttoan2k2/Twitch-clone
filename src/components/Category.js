import React from "react";

const Category = ({ title, icon, css }) => {
    return (
        <div className="relative shadow-lg shadow-400-gray cursor-pointer">
            <div className="bg-[#9147FF] w-[12rem] sm:w-[17em] lg:w-[13.5rem] xl:w-[14.5rem] py-[0.3rem] pl-[0.5rem] rounded-[5px] hover:bg-[#7229e0]">
                <p className="text-white font-bold text-[23px]">{title}</p>
            </div>
            <div className={`absolute ${css}`}>
                <img src={icon} alt="Games" className="" />
            </div>
        </div>
    );
};

export default Category;
