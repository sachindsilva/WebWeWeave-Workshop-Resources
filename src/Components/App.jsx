import React from "react";
import SubHeading from "./SubHeading";
import Heading from "./Heading";

function App() {
    return (
        <div>
            
            <Heading/>
            <SubHeading />

            <h1 className="block text-center font-appleEmoji font-bold text-3xl text-sky-900 mt-20 select-none">
           Workshop Resources List
        </h1>
            <h1 className="block text-center font-appleEmoji font-semibold text-2xl text-sky-900 mt-20 leading-5 space-x-10 select-none">
            Session1: Reactjs - Front End Framework
        </h1>


            <div className="font-appleEmoji border block rounded-md max-auto my-4 mt-20 mx-8 px-6 py-2 h-12 align-middle cursor-pointer text-2xl text-sky-600">

             
            </div>
        </div>
    );
}

export default App;