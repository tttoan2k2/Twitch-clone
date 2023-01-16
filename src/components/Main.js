import React from "react";
import Browse from "./Browse";
import Cards from "./Cards";

const Main = () => {
    return (
        <div className="w-full px-4 lg:px-10 mt-[0.8rem]">
            {/* Brower */}
            <Browse />
            {/* Cards */}
            <Cards />
        </div>
    );
};

export default Main;
