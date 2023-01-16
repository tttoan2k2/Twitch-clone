import React from "react";
import { GrChannel } from "react-icons/gr";
import Channel from "./Channel";
import { BsArrowBarLeft } from "react-icons/bs";
import toast from "../assets/toast.png";
import kyedae from "../assets/kyedae.png";
import kata from "../assets/kata.png";
import fex from "../assets/fex.png";
import root from "../assets/root.png";
import poke from "../assets/poke.jpg";
import will from "../assets/will.png";
import h39daph from "../assets/39daph.jpeg";
import olof from "../assets/olof.png";
import epul from "../assets/epulze.png";

const CHANNELS = [
    {
        id: 1,
        img: toast,
        user_name: "DisguisedToast",
        game_name: "Teamfight Tactics",
        views: 7.6,
    },
    {
        id: 2,
        img: kyedae,
        user_name: "Kyedae",
        game_name: "VALORANT",
        views: 11.8,
    },
    {
        id: 3,
        img: kata,
        user_name: "Katarinafps",
        game_name: "VALORANT",
        views: 2.7,
    },
    {
        id: 4,
        img: fex,
        user_name: "Fextralife",
        game_name: "Elden Ring",
        views: 14.5,
    },
    {
        id: 5,
        img: root,
        user_name: "root",
        game_name: "VALORANT",
        views: 2,
    },
    {
        id: 6,
        img: poke,
        user_name: "pokelawls",
        game_name: "Minecraft",
        views: 7.6,
    },
    {
        id: 7,
        img: will,
        user_name: "will1us",
        game_name: "VALORANT",
        views: 2.3,
    },
    {
        id: 8,
        img: h39daph,
        user_name: "39daph",
        game_name: "Father's Day",
        views: 6.5,
    },
    {
        id: 9,
        img: olof,
        user_name: "olofmeister",
        game_name: "CSGO",
        views: 2,
    },
    {
        id: 10,
        img: epul,
        user_name: "EpulzeGaming",
        game_name: "Dota 2",
        views: 16.1,
    },
];

const Sidebar = () => {
    return (
        <div className="sticky top-[52px] bg-[#EFEFF1] p-3 max-w-[300px] h-screen z-10">
            {/* Title */}
            <div className="flex items-center justify-center gap-2">
                <p className="font-semibold text-[13.5px] hidden xl:flex">
                    RECOMMENDED CHANNELS
                </p>
                <div className="hidden xl:flex items-center">
                    <BsArrowBarLeft className="text-[18px]" />
                </div>
                <div className="xl:hidden flex items-center">
                    <GrChannel />
                </div>
            </div>
            {/* Channels */}
            <div className="mt-3">
                {CHANNELS.map((channel) => (
                    <Channel
                        key={channel.id}
                        img={channel.img}
                        user_name={channel.user_name}
                        game_name={channel.game_name}
                        views={channel.views}
                    />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
