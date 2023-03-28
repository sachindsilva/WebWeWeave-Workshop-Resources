import React from "react";
import ReactResources from "./ReactResource";

function ReactCard() {
    return (
        <div className="font-appleEmoji border block rounded-md max-auto my-4 mt-10 mx-8 px-6 py-2 h-auto align-middle cursor-pointer text-2xl text-sky-600">
            <ul className="list-disc list-inside text-lg md:text-xl md:ml-8 md:text-left select-none">
                <ReactResources/>
            </ul>
        </div>
    )
}


export default ReactCard;