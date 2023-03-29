import React from "react";


function Footer() {
    return (
        <footer>
            <div className="relative bottom-0 top-0 flex flex-col justify-center items-center md:justify-start md:flex-row space-y-5 md:space-y-0 md:px-20 md:space-x-10  w-full h-auto mt-20 p-10 bg-gray-200 font-medium font-appleEmoji text-gray-400 text-opacity-70  select-none grid grid-cols-1 md:grid-cols-3">

                <div className="flex justify-center items-center md:justify-start border-1 px-4 md:px-10 py-5 ">
                    <p>&copy; The Web We Weave</p>
                </div>

                <div className="flex items-center border-1 justify-center px-10 py-5 border-gray-900 md:px-8 letter-spacing ">Made with ♥ by Sachin Dsilva</div>


                <div className="flex items-center border-1 justify-center px-10 py-5 border-gray-900 md:px-8 letter-spacing  space-x-3 ">

                    {/* GITHUB  */}
                    <a href="https://github.com/sachindsilva16" className="hover:scale-110  hover:grayscale duration-200">
                    <i className="fa-brands fa-github fa-beat-fade fa-xl " style={{color: "#080808"}}></i>
                    </a>

                    {/* INSTAGRAM  */}
                    <a href="https://www.instagram.com/sachin.dsilva_/" className="hover:scale-110 hover:grayscale duration-200">
                    <i className="fa-brands fa-instagram fa-beat-fade fa-xl" style={{color: "#f71844"}}></i>
                    </a>



                    {/* LINKEDIN  */}

                    <a href="https://www.linkedin.com/in/sachin-dsilva-43169a1bb" className="hover:scale-110 hover:grayscale duration-200">
                    <i className="fa-brands fa-linkedin fa-beat-fade fa-xl" style={{color: "#1a6eff"}}></i>
                    </a>


                    {/* TWITTER  */}
                    
                    
                    <a href="https://twitter.com/sachinrons123" className="hover:scale-110 hover:grayscale duration-200">
                    <i className="fa-brands fa-twitter fa-beat-fade fa-xl" style={{color: "#1899fb"}}></i>
                    </a>

                    {/* TELEGRAM  */}
                    
                    <a href="https://t.me/ise_nmamit" className="hover:scale-110 hover:grayscale duration-200">
                    <i className="fa-brands fa-telegram fa-beat-fade fa-xl" style={{color: "#7370ff"}}></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;