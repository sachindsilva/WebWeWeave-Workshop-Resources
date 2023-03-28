import React from "react";
import title from "../title";

function SessionHeading() {
    return (
        <h1 className="block text-center font-appleEmoji font-semibold text-2xl text-sky-900 mt-10 leading-5 space-x-10 select-none px-2">
            {title.subtitle}
        </h1>
    );
}

export default SessionHeading;