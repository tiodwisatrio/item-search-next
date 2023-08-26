"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import logo_uty from "../assets/logo_uty.png";

import { NAVLINKS } from "../constants";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full md:grid md:grid-cols-3 flex items-center mb-5">
            <div className="flex flex-row justify-start items-center gap-x-4 w-full ">
                <div className="w-10 h-10 bg-violet-700 rounded-full">
                    <Image src={logo_uty} alt="logo" />
                </div>
                <p className="text-base font-medium">FindUTY</p>
            </div>

            <div className="hidden md:flex md:flex-row md:justify-center md:items-center gap-x-8  text-sm ">
                {NAVLINKS.map((navlink) => (
                    <Link href={navlink.path} key={navlink.id}>
                        <p className="cursor-pointer text-white hover:text-violet-600">{navlink.name}</p>
                    </Link>
                ))}
            </div>
            <div className="hidden md:flex md:flex-row md:items-center md:justify-end gap-x-6  text-sm">
                <Link href="/login">
                    <button className="bg-violet-800 w-28 h-10 rounded-full hover:bg-violet-900 transition-all 0.4s">
                        Login
                    </button>
                </Link>
                <Link href="/register">
                    <button>Register</button>
                </Link>
            </div>
            <div className="flex justify-end">
                <button
                    className="md:hidden rounded-lg focus:outline-none z-50"
                    onClick={handleToggle}
                >
                    <svg
                        className="h-6 w-6 text-white-500 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
                <div>
                    {isOpen && (
                        <div className="navbar-container bg-black bg-opacity-80 backdrop-filter backdrop-blur-sm fixed top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center p-4 z-10 animate-slide">
                            <div className="animate-slide-close">
                                {NAVLINKS.map((navlink) => (
                                    <Link href={navlink.path} key={navlink.id}>
                                        <p className="cursor-pointer text-white hover:text-violet-800 my-8 text-center text-lg mb-5">
                                            {navlink.name}
                                        </p>
                                    </Link>
                                ))}

                                <div className="flex flex-col justify-center items-center gap-y-6 mt-16">
                                    <Link href="/login">
                                        <button className="px-24 py-3 bg-violet-800  rounded-full hover:bg-violet-900 transition-all 0.4s">
                                            Login
                                        </button>
                                    </Link>
                                    <Link href="/register">
                                        <button>Register</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
