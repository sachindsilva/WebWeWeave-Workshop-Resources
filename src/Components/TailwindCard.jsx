import React from "react";
import TailwindResources from "./TailwindResources";

function TailwindCard() {
    return (
        <div className="font-appleEmoji border block rounded-md max-auto my-4 mt-10 mx-8 px-6 py-2 h-auto align-middle cursor-pointer text-2xl text-sky-600">
            <ul className="list-disc list-inside text-lg md:text-xl md:ml-8 md:text-left select-none">
                <TailwindResources />
            </ul>
        </div>
    )
}


export default TailwindCard;