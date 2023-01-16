import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const Channel = ({ img, user_name, game_name, views }) => {
    return (
        <div className="flex items-start justify-between gap-3 mt-2 xl:mt-1">
            <div className="flex items-center gap-3">
                <div className="w-[30px] h-[30px]">
                    <img src={img} alt="" className="rounded-full" />
                </div>
                <div className="w-[110px] hidden xl:block">
                    <p className="font-semibold text-[15px]">{user_name}</p>
                    <p className="text-gray-500 text-[14px] -mt-1">
                        {game_name}
                    </p>
                </div>
            </div>
            <div className="hidden xl:flex items-center">
                <GoPrimitiveDot className="text-[red]" />
                <p className="text-gray-700 text-[13.5px]">{views}k</p>
            </div>
        </div>
    );
};

export default Channel;
