import React from "react";
import SubHeading from "./SubHeading";
import Heading from "./Heading";
import SessionHeading from "./SessionHeading";
import ReactCard from "./ReactCard"
import TailwindCard from "./TailwindCard";

function App() {
    return (
        <div>

            <Heading />
            <SubHeading />

            <h1 className="block text-center font-appleEmoji font-bold text-3xl text-sky-900 mt-20 select-none underline hover:text-gray-600 duration-150">
                Workshop Resources List
            </h1>

            <SessionHeading subtitle= "Session1: Reactjs - Front End Framework"/>


            <ReactCard/>
            
            <SessionHeading subtitle="Session2: TailwindCSS - Utility-First CSS framework"/>

            <TailwindCard/>
        </div>
    );
}

export default App;