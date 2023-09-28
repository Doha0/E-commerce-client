import React, { useEffect, useState } from "react";
import Logo from "../../assets/Navbar/logo.png"
import { FaBars } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(true);
    const [isSticky, setIsSticky] = useState(false);
    const [logoSrc, setLogoSrc] = useState(Logo);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsSticky(true);
            setLogoSrc("https://i.ibb.co/821XCP8/galaxy-meeting-LIGHT.png");
        } else {
            setIsSticky(false);
            setLogoSrc(Logo);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    const dropdownItemStyle = {
        color: isSticky ? "black" : "",
    };

    const navItem = (
        <>
            <a>Home</a>
            <a>Feature</a>
            <div className="relative group py-2">
                <div className="flex">
                    <button className="group-hover:text-red ml-5">Explore</button>
                    <FaCaretDown className="mt-1" />
                </div>
                <div
                    className="absolute hidden bg-white sm:w-auto group-hover:block z-20 space-y-1 rounded-lg shadow-lg"
                    style={dropdownItemStyle}
                >
                    <a className="block px-4 py-2">
                        Solution
                    </a>
                    <a className="block px-4 py-2">
                        Community
                    </a>
                    <a className="block px-4 py-2">
                        About Us
                    </a>
                </div>
            </div>
        </>
    );

    return (
        <div
            className={`${isSticky
                ? "z-10 backdrop-opacity-60 bg-[#1D2E42] text-white sticky top-0"
                : "bg-transparent -top-24"
                } transition duration-300 ease-in-out z-10}
      style={{ transition: "all 0.3s ease" }`}
        >
            <div className={`container mx-auto py-2 flex justify-between`}>
                <div className="lg:flex lg:items-center">
                    <a>
                        <img className="w-16 ms-5 z-20" src={logoSrc} alt="Logo" />
                    </a>
                </div>
                <div>
                    <button
                        onClick={handleNavToggle}
                        className="md:hidden text-3xl ml-52 mr-5"
                    >
                        {isNavOpen ? <FaBars /> : <ImCross />}
                    </button>
                    <ul className={`md:hidden ${isNavOpen ? "hidden" : "static"}`}>
                        <li className="nav-items-responsive font-semibold text-lg">
                            {navItem}
                        </li>
                    </ul>
                    <ul className="hidden md:block">
                        <li className="nav-items font-semibold text-lg flex justify-center items-center">
                            {navItem}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;