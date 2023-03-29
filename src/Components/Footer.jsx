import React from "react";


function Footer() {
    return (
        <footer>
            <div className="relative bottom-0 top-0 flex flex-col justify-center items-center md:justify-start md:flex-row space-y-5 md:space-y-0  w-full h-40 mt-20 p-10 bg-gray-200 font-medium font-appleEmoji text-gray-400 text-opacity-70 select-none">

                <p>&copy; The Web We Weave</p>
                 <div className="flex items-center justify-center md:ml-60 letter-spacing">Made with ♥ by Sachin Dsilva</div>
            </div>
        </footer>
    );
}

export default Footer;