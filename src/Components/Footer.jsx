import React from "react";


function Footer() {
    return (
        <footer>
            <div className="relative bottom-0 top-0 flex flex-col justify-center items-center md:justify-start md:flex-row space-y-5 md:space-y-0 md:px-20 md:space-x-10  w-full h-40 mt-20 p-10 bg-gray-200 font-medium font-appleEmoji text-gray-400 text-opacity-70  select-none grid grid-cols-1 md:grid-cols-3">

                <div className="flex justify-center items-center md:justify-start border-1 px-4 md:px-10 py-5 border border-1 border-red-500">
                    <p>&copy; The Web We Weave</p>
                </div>

                <div className="flex items-center border-1 justify-center px-10 py-5 border-gray-900 md:px-8 letter-spacing border border-1 border-red-500">Made with ♥ by Sachin Dsilva</div>

                
                <div className="flex items-center border-1 justify-center px-10 py-5 border-gray-900 md:px-8 letter-spacing border border-1 border-red-500">Made with ♥ by Sachin Dsilva</div>
            </div>
        </footer>
    );
}

export default Footer;