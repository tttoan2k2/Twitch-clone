import React from "react";
import Card from "./Card";
import { BiSearch } from "react-icons/bi";
import chatting from "../assets/chatting.jpg";
import valorant from "../assets/valorant.jpg";
import lol from "../assets/lol.jpg";
import csgo from "../assets/csgo.jpg";
import cod from "../assets/cod.jpg";
import gta from "../assets/gta.jpg";
import tft from "../assets/tft.jpg";
import minecraft from "../assets/minecraft.jpg";
import genshin from "../assets/genshin.jpg";
import fifa from "../assets/fifa.jpg";
import er from "../assets/er.jpg";
import pubg from "../assets/pubg.jpg";
import chess from "../assets/chess.jpg";
import dota from "../assets/dota.jpg";
import apex from "../assets/apex.jpg";

const CARDS = [
    {
        title: "Just Chatting",
        image: chatting,
        views: 164,
        types: ["IRL"],
    },
    {
        title: "VALORANT",
        image: valorant,
        views: 81.3,
        types: ["Shooter", "FPS", "Action"],
    },
    {
        title: "League of Legends",
        image: lol,
        views: 80.6,
        types: ["MOBA", "Action"],
    },
    {
        title: "Call of Duty",
        image: cod,
        views: 92.7,
        types: ["Simulation", "FPS"],
    },
    {
        title: "Minecraft",
        image: minecraft,
        views: 15.7,
        types: ["Adventure", "MMO"],
    },
    {
        title: "Grand Theft Auto V",
        image: gta,
        views: 81.1,
        types: ["FPS", "Adventure Game"],
    },
    {
        title: "Counter-Strike",
        image: csgo,
        views: 12.7,
        types: ["Shooter", "FPS", "Action"],
    },
    {
        title: "Genshin Impact",
        image: genshin,
        views: 8.3,
        types: ["Action", "RPG"],
    },
    {
        title: "Teamfight Tactics",
        image: tft,
        views: 25.5,
        types: ["Strantegy"],
    },
    {
        title: "FIFA 23",
        image: fifa,
        views: 15,
        types: ["Sports Game", "Simulation"],
    },
    {
        title: "Elden Ring",
        image: er,
        views: 22.1,
        types: ["RPG", "Action"],
    },
    {
        title: "PUBG",
        image: pubg,
        views: 9.4,
        types: ["Shooter", "FPS"],
    },
    {
        title: "Chess",
        image: chess,
        views: 25.5,
        types: ["Strantegy", "Action"],
    },
    {
        title: "Dota",
        image: dota,
        views: 66.2,
        types: ["MOBA", "Action"],
    },
    {
        title: "Apex Legends",
        image: apex,
        views: 60,
        types: ["FPS", "Shooter", "Action"],
    },
    {
        title: "Teamfight Tactics",
        image: tft,
        views: 25.5,
        types: ["Strantegy"],
    },
    {
        title: "Teamfight Tactics",
        image: tft,
        views: 25.5,
        types: ["Strantegy"],
    },
    {
        title: "Teamfight Tactics",
        image: tft,
        views: 25.5,
        types: ["Strantegy"],
    },
    {
        title: "Teamfight Tactics",
        image: tft,
        views: 25.5,
        types: ["Strantegy"],
    },
    {
        title: "Teamfight Tactics",
        image: tft,
        views: 25.5,
        types: ["Strantegy"],
    },
];

const Cards = () => {
    return (
        <div>
            {/* Title */}
            <div className="flex items-center gap-x-4 font-semibold text-[19px] pt-[42px]">
                <p className="hover:border-b-[2px] border-[#9147FF] hover:text-[#9147FF] cursor-pointer">
                    Categories
                </p>
                <p className="hover:border-b-[2px] border-[#9147FF] hover:text-[#9147FF] cursor-pointer">
                    Live Channels
                </p>
            </div>
            {/* Filter */}
            <div className="flex items-center justify-between flex-wrap gap-y-2 sm:flex pt-[28px]">
                <div className="flex items-center gap-x-3">
                    <p className="font-bold text-[14px]">Filter by Tag</p>
                    <div className="flex items-center relative ">
                        <input
                            type="search"
                            placeholder="Search Category Tags"
                            className="outline-[#9147FF] w-[222px] placeholder-[#444444] text-[14px] bg-[#E4E4E5] p-1 pl-[30px] rounded-[5px] focus:bg-white"
                        />
                        <BiSearch className="absolute left-[5px] text-[20px]" />
                    </div>
                </div>
                <div className="flex items-center gap-x-3">
                    <p className="font-bold text-[14px]">Sort by</p>
                    <select className="w-[189px] outline-0 cursor-pointer text-[14px] p-[2.5px] px-2 bg-[#E4E4E5] rounded-[5px] border-[2px] focus:border-[#9147FF] focus:bg-white">
                        <option>Recommended For You</option>
                        <option>Viewers (High to Low)</option>
                    </select>
                </div>
            </div>
            {/* Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {CARDS.map((card) => (
                    <Card
                        title={card.title}
                        image={card.image}
                        views={card.views}
                        types={card.types}
                    />
                ))}
            </div>
        </div>
    );
};

export default Cards;
