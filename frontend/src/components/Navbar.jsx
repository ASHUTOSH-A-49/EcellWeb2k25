

import { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex gap-4"> 
            <span><Logo /></span>
            <h1 className="text-2xl font-bold tracking-wide cursor-pointer text-center flex-col">
                <div>
                  E-Cell
                </div>
                <div className="text-sm">
                  NITRR
                </div>
            </h1>
        </div>

        {/* Desktop Menu */}
        
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 transition"><Link to="/">Home</Link></li>
          <li className="hover:text-blue-600 transition"><Link to="/events">Events</Link></li>
          <li className="hover:text-blue-600 transition"><Link to="/">Team</Link></li>
          <li className="hover:text-blue-600 transition"><Link to="/about">About</Link></li>
          <li className="hover:text-blue-600 transition"><Link to="/sponsors">Sponsors</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-[99]"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4 text-gray-700 font-medium">
          <li className="hover:text-blue-600 transition"><Link to="/">Home</Link></li>
          <li className="hover:text-blue-600 transition"><Link to="/events">Events</Link></li>
          <li className="hover:text-blue-600 transition"><Link to="/">Team</Link></li>
          <li className="hover:text-blue-600 transition"><Link to="/about">About</Link></li>
          <li className="hover:text-blue-600 transition"><Link to="/sponsors">Sponsors</Link></li>
        </ul>
      )}
    </nav>
  );
}
