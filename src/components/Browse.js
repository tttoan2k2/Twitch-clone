import React from "react";
import Category from "./Category";
import games from "../assets/games.png";
import irl from "../assets/irl.png";
import music from "../assets/music.png";
import esports from "../assets/esports.png";
import creative from "../assets/creative.png";

const Browse = () => {
    const categories = [
        {
            title: "Games",
            icon: games,
            css: "-top-[1px] right-1 -rotate-45 w-[3.2rem] h-[3.2rem]",
        },
        {
            title: "IRL",
            icon: irl,
            css: "-top-3 right-8 -rotate-[40deg] w-[1.8rem] h-[1.8rem]",
        },
        {
            title: "Music",
            icon: music,
            css: "-top-1 right-4 -rotate-45 w-[2.5rem] h-[2.5rem]",
        },
        {
            title: "Esports",
            icon: esports,
            css: "-top-[2px] right-4 -rotate-[35deg] w-[2.5rem] h-[2.5rem]",
        },
        {
            title: "Creative",
            icon: creative,
            css: "-top-1 right-1 -rotate-90 w-[3rem] h-[3rem]",
        },
    ];
    return (
        <div className="">
            {/* Title */}
            <div className="">
                <h1 className="text-[55px] font-bold">Browse</h1>
            </div>
            {/* Categories */}
            <div className="flex flex-wrap gap-x-2 gap-y-6 mt-[1.5rem]">
                {categories.map((category) => (
                    <Category
                        title={category.title}
                        icon={category.icon}
                        css={category.css}
                    />
                ))}
            </div>
        </div>
    );
};

export default Browse;
