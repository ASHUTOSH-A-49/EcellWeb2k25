
// import { useState } from "react";
// import Logo from "./Logo";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <div className="flex gap-4"> 
//             <span><Logo /></span>
//             <h1 className="text-2xl font-bold tracking-wide cursor-pointer text-center flex-col">
//                 <div>
//                   E-Cell
//                 </div>
//                 <div className="text-sm">
//                   NITRR
//                 </div>
//             </h1>
//         </div>

//         {/* Desktop Menu */}

//         <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
//           <li className="hover:text-blue-600 transition"><Link to="/">Home</Link></li>
//           <li className="hover:text-blue-600 transition"><Link to="/events">Events</Link></li>
//           <li className="hover:text-blue-600 transition"><Link to="/gallery">Gallery</Link></li>
//           <li className="hover:text-blue-600 transition"><Link to="/team">Team</Link></li>
//           <li className="hover:text-blue-600 transition"><Link to="/about">About</Link></li>
//           <li className="hover:text-blue-600 transition"><Link to="/sponsors">Sponsors</Link></li>
//         </ul>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden flex flex-col gap-1.5 z-[99]"
//           onClick={() => setOpen(!open)}
//         >
//           <span className="w-6 h-0.5 bg-black"></span>
//           <span className="w-6 h-0.5 bg-black"></span>
//           <span className="w-6 h-0.5 bg-black"></span>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <ul className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4 text-gray-700 font-medium">
//           <li className="hover:text-blue-600 transition"><Link to="/">Home</Link></li>
//           <li className="hover:text-blue-600 transition"><Link to="/events">Events</Link></li>
//           <li className="hover:text-blue-600 transition"><Link to="/gallery">Gallery</Link></li>
//           <li className="hover:text-blue-600 transition"><Link to="/team">Team</Link></li>
//           <li className="hover:text-blue-600 transition"><Link to="/about">About</Link></li>
//           <li className="hover:text-blue-600 transition"><Link to="/sponsors">Sponsors</Link></li>
//         </ul>
//       )}
//     </nav>
//   );
// }


import { useState } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },

  ];

  return (
    <header className="
      fixed top-0 left-0 w-full z-50 
      bg-black/40 backdrop-blur-xl 
      border-b border-white/10
    ">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="
            h-10 w-10 rounded-xl 
            flex items-center justify-center
            
            shadow-[0_0_20px_rgba(99,102,241,0.5)]
          ">
            {/* <Rocket className="h-5 w-5 text-white" /> */}
            <div className="p-[3px] ">
  <Logo className="h-5 w-5 " />
</div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-ecell-mine font-bold -mb-1">
              E-Cell
            </p>
            <p className="text-sm text-gray-200 font-medium">NIT Raipur</p>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.href}
              className="
        relative text-gray-300 text-sm font-medium
        transition-colors px-3 py-1
        group
      "
            >
              {/* Animated background (ECELL-MINE) */}
              <span
                className="
          absolute inset-0 rounded-full bg-ecell-mine 
          scale-0 opacity-0
          transition-all duration-300 ease-out
          group-hover:scale-100 group-hover:opacity-100
        "
              ></span>

              {/* Text (kept above the background) */}
              <span className="relative z-10 group-hover:text-white transition-colors">
                {link.name}
              </span>
            </Link>
          ))}
        </nav>


        {/* MOBILE BUTTON */}
        <button className="md:hidden text-gray-200" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/60 backdrop-blur-xl border-t border-white/10 px-5 py-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-white text-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
