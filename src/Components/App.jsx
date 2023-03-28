import React from "react";
import SubHeading from "./SubHeading";
import Heading from "./Heading";
import SessionHeading from "./SessionHeading";
import Card from "./Card"

function App() {
    return (
        <div>

            <Heading />
            <SubHeading />

            <h1 className="block text-center font-appleEmoji font-bold text-3xl text-sky-900 mt-20 select-none underline hover:text-gray-600 duration-150">
                Workshop Resources List
            </h1>

            <SessionHeading />


            <Card/>
        </div>
    );
}

export default App;