import React from "react";

const Card = ({ title, image, views, types }) => {
    return (
        <div className="mt-4">
            <div className="transition ease-linear transform hover:translate-x-[6px] hover:-translate-y-[6px] cursor-pointer hover:border-l-[5px] hover:border-b-[5px] border-[#9147FF]">
                <img src={image} alt="" className="" />
            </div>
            <p className="font-bold text-[17px] hover:text-[#9147FF] cursor-pointer">
                {title}
            </p>
            <p className="text-gray-500 text-[14px] hover:text-[#9147FF] cursor-pointer">
                {views}K viewers
            </p>
            <div className="flex items-center gap-2 mt-1">
                {types.map((type) => {
                    return (
                        <div className="bg-[#EAEAEB] p-[1px] rounded-[15px] hover:bg-[#d4d4d6] cursor-pointer">
                            <p className="font-semibold text-[#434345] text-[12px] pl-2 pr-2">
                                {type}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Card;
