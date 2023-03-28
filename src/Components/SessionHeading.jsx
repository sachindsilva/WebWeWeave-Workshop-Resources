import React from "react";

function SessionHeading(props) {
    return (
        <h1 className="block text-center font-appleEmoji font-semibold text-2xl text-sky-900 mt-10 leading-5 space-x-10 select-none px-2">
            {props.subtitle}
        </h1>
    );
}

export default SessionHeading;