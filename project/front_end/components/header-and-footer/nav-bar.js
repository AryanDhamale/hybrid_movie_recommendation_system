"use client";
import { Search, Bell, User, Menu } from 'lucide-react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

function NavBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white font-bold text-xl">M</div>
                <span className="text-2xl font-bold text-white tracking-wide">MOVIERECOM</span>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
                <Link href="/">
                    <li className="hover:text-white transition-colors cursor-pointer">Home</li>
                </Link>
                <ScrollLink to="popular" spy={true} smooth={true} offset={-70} duration={500}>
                    <li className="hover:text-white transition-colors cursor-pointer">New & Popular</li>
                </ScrollLink>
                <Link href="/">
                    <li className="hover:text-white transition-colors cursor-pointer">My List</li>
                </Link>
            </ul>

            {/* Right Side Icons */}
            <div className="flex items-center gap-6 text-white">
                {/* <Search className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" /> */}
                {/* <Bell className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" /> */}
                <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center border border-white/20">
                        <User className="w-5 h-5" />
                    </div>
                </div>
                {/* Mobile Menu Button */}
                <Menu className="w-6 h-6 md:hidden cursor-pointer" />
            </div>
        </nav>
    );
}

export default NavBar;