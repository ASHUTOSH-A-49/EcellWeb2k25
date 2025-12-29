// import React from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer';
// import { useState , useEffect } from 'react';

// const events = [
//   {
//     title: "Startup Expo",
//     desc: "A showcase of innovative student-led startups, inspiring business ideas, and groundbreaking projects at NIT Raipur.",
//     btn: "Explore Expo"
//   },
//   {
//     title: "HackBattle",
//     desc: "A thrilling hackathon where teams build tech solutions to real-world problems under intense time pressure.",
//     btn: "Join HackBattle"
//   },
//   {
//     title: "Pitch Perfect",
//     desc: "A pitching competition where young entrepreneurs present their ideas to investors, mentors, and industry experts.",
//     btn: "Pitch Your Idea"
//   },
//   {
//     title: "Workshops & Talks",
//     desc: "Interactive workshops and guest sessions led by founders, innovators, and startup mentors across the country.",
//     btn: "View Schedule"
//   }
// ];

// const Home = () => {
//   const [offsetY, setoffsetY] = useState(0);
//   const handleScroll = () => setoffsetY(window.pageYOffset);
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (

//     <div>
//       {/* <Navbar /> */}
//       {/* <div className="mt-20 text-black">this is</div> */}
//       <section className="w-full min-h-screen flex items-center justify-center px-6 pt-24 bg-gradient-to-b from-blue-50 to-white">
//         <div style={{
//     transform: `translateY(${offsetY * 0.5}px)`,
//     opacity: Math.max(1 - offsetY / 400, 0),
//     transition: "opacity 0.2s ease-out"
//   }} className="max-w-4xl mx-auto text-center">

//           {/* Glow background circle */}
//           <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-blue-300/20 blur-3xl z-30"></div>

//           {/* Heading */}
//           <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
//             Where Ideas Take Flight
//           </h1>

//           {/* Subheading */}
//           <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
//             Join our vibrant community of innovators, dreamers, and doers. Transform your ideas into impactful ventures with E-Cell.
//           </p>

//           {/* Buttons */}
//           <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
//             <button  className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
//               Join Us
//             </button>

//             <button className="px-8 py-3 rounded-lg border border-gray-400 text-gray-700 font-semibold hover:bg-gray-100 transition">
//               Explore Events
//             </button>
//           </div>
//         </div>
//       </section>

//       <section className="py-24 bg-white px-6">
//         <div className="max-w-5xl mx-auto">

//           {/* Cool Heading */}
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center tracking-tight">
//             Igniting Ideas Since 2015
//           </h2>

//           {/* Short underline accent */}
//           <div className="w-24 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>

//           {/* Content */}
//           <div className="mt-12 flex flex-col md:flex-row items-center gap-32">
//             <div className="relative w-full md:w-[380px] h-[320px] flex justify-center items-center">

//               {/* Photo 1 */}
//               <img
//                 src='https://tse3.mm.bing.net/th/id/OIP.SdpBJdswjZ_RGn_TVGn3egHaHa?pid=Api&P=0&h=180'
//                 alt="E-Cell NITRR"
//                 className="absolute w-72 h-48 object-cover rounded-xl shadow-xl border border-gray-200
//                rotate-[-10deg] -translate-x-20 -translate-y-4 z-0
//                hover:rotate-[-6deg] transition-all duration-500 ease-out hover:scale-105 hover:z-15"
//               />

//               {/* Photo 2 */}
//               <img
//                 src="https://pbs.twimg.com/media/Fheyl_UacAA_HV0?format=jpg&name=large"
//                 alt="E-Cell NITRR"
//                 className="absolute w-72 h-48 object-cover rounded-xl shadow-xl border border-gray-200
//                rotate-[8deg] translate-x-10 translate-y-10 z-0
//                hover:rotate-[4deg] transition-all duration-500 ease-out hover:scale-105 hover:z-15"
//               />

//             </div>

//             <div className="home-about">
//               <p className="mt-10 text-lg md:text-xl text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
//                 E-Cell NIT Raipur is the entrepreneurial hub of the institute—created
//                 to inspire innovation, foster problem-solving, and empower students to
//                 transform ideas into impactful ventures. Through events, workshops,
//                 mentorship programs, and national-level competitions, we cultivate a
//                 thriving startup ecosystem driven by curiosity and passion.
//               </p>
//             </div>
//           </div>


//         </div>
//       </section>

//       <section className="py-24 bg-gray-50 px-6" id="events">
//   <div className="max-w-6xl mx-auto">

//     {/* Section Heading */}
//     <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 tracking-tight">
//       Events That Inspire Innovation
//     </h2>

//     <div className="w-24 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>

//     {/* Cards */}
//     <div className="mt-16 flex flex-wrap justify-center gap-10">

//       {events.map((event, idx) => {
//         const randomImg = `https://source.unsplash.com/random/400x300?sig=${idx}&startup,tech,event`;

//         return (
//           <div
//             key={idx}
//             className="
//               relative
//               rounded-xl 
//               overflow-hidden
//               w-[300px]
//               h-[380px]
//               shadow-md 
//               hover:shadow-xl
//               transition 
//               duration-300 
//               transform
//               hover:-translate-y-2
//               hover:scale-[1.03]
//             "
//           >

//             {/* Background Image */}
//             <img
//               src='data:image/jpeg;base64,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'
//               alt="event background"
//               className="absolute inset-0 w-full h-full object-cover"
//             />

//             {/* Dark Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

//             {/* Text Content */}
//             <div className="relative z-10 p-8 flex flex-col h-full">
//               <h3 className="text-2xl font-bold text-black">
//                 {event.title}
//               </h3>

//               <p className="mt-4 text-gray-200 leading-relaxed flex-grow">
//                 {event.desc}
//               </p>

//               <button
//                 className="mt-6 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
//               >
//                 {event.btn}
//               </button>
//             </div>

//           </div>
//         );
//       })}

//     </div>

//   </div>
// </section>


//       <section className="py-24 bg-white px-6">
//         <div className="max-w-6xl mx-auto">

//           {/* Heading */}
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center tracking-tight">
//             Glimpses of E-Cell Moments
//           </h2>
//           <div className="w-24 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>

//           {/* Photos Row */}
//           <div className="mt-16 flex flex-wrap justify-center gap-8 relative">

//             {/* Image 1 */}
//             <img
//               src="https://images.pexels.com/photos/3182770/pexels-photo-3182770.jpeg"
//               alt="glimpse"
//               className="w-64 h-44 object-cover rounded-xl shadow-lg border 
//         border-gray-200 transform rotate-[-8deg] hover:rotate-[-4deg] 
//         hover:scale-105 transition-all duration-500"
//             />

//             {/* Image 2 */}
//             <img
//               src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg"
//               alt="glimpse"
//               className="w-64 h-44 object-cover rounded-xl shadow-lg border
//         border-gray-200 transform rotate-[5deg] hover:rotate-[2deg]
//         hover:scale-105 transition-all duration-500"
//             />

//             {/* Image 3 */}
//             <img
//               src="https://images.pexels.com/photos/1181393/pexels-photo-1181393.jpeg"
//               alt="glimpse"
//               className="w-64 h-44 object-cover rounded-xl shadow-lg border
//         border-gray-200 transform rotate-[-4deg] hover:rotate-[-1deg]
//         hover:scale-105 transition-all duration-500 z-10"
//             />

//             {/* Image 4 */}
//             <img
//               src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
//               alt="glimpse"
//               className="w-64 h-44 object-cover rounded-xl shadow-lg border
//         border-gray-200 transform rotate-[7deg] hover:rotate-[3deg]
//         hover:scale-105 transition-all duration-500"
//             />

            

//           </div>

//           {/* View More Button */}
//           <div className="mt-12 flex justify-center">
//             <button className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-md">
//               View Gallery
//             </button>
//           </div>

//         </div>
//       </section>

//       {/* <Footer/> */}


//     </div>
//   )
// }

// export default Home


import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import React from "react";
import { ArrowRight, Sparkles, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

// Standard Components
import HomeEvent from "../HomeEvent";
import HomeAbout from "./HomeAbout";
import HomeGallery from "./HomeGallery";
import PastSpeakers from "./PastSpeaker";
import Gallery from "./Gallery";
import HomeSponsors from "./HomeSponsors";
// import AboutSliding from "./AboutSliding";

export default function Hero() {
  const ref = useRef(null);
  const [offsetY, setoffsetY] = useState(0);

  const handleScroll = () => setoffsetY(window.pageYOffset);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgImage = "https://res.cloudinary.com/daoth3ia9/image/upload/v1766953561/Copy_of_IMG_8935_xutg4o.jpg";

  return (
    <div className="relative w-full">
      {/* 📱 1. FIXED SOCIAL BAR (Stays on screen) */}
      <div className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-[100] hidden sm:flex flex-col gap-6 items-center">
        <div className="w-[1px] h-16 bg-gradient-to-t from-ecell-primary to-transparent opacity-50" />
        <SocialIcon href="https://www.instagram.com/ecell_nitraipur_/" icon={<Instagram size={20} />} />
    <SocialIcon href="https://www.linkedin.com/company/entrepreneurship-cell-nit-raipur/" icon={<Linkedin size={20} />} />
    <SocialIcon href="https://twitter.com/ecell_nitrr" icon={<Twitter size={20} />} />
        <div className="w-[1px] h-16 bg-gradient-to-b from-ecell-primary to-transparent opacity-50" />
      </div>

      {/* 🏗️ 2. HERO SECTION */}
      <section
        id="home"
        ref={ref}
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-6 pt-20"
      >
        {/* 🖼️ BACKGROUND IMAGE LAYER */}
        <div 
          className="absolute inset-0 z-[-30] w-full h-full"
          style={{ 
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed', // This creates a high-end parallax feel
            transform: `scale(${1 + offsetY * 0.0002})`,
          }} 
        />
        
        {/* 🌑 OVERLAY LAYER (Darkens image so text is visible) */}
        <div className="absolute inset-0 z-[-20] bg-black/60 bg-gradient-to-b from-black/40 via-transparent to-ecell-bg" />

        {/* 📝 CONTENT LAYER */}
        <motion.div 
          style={{
            y: offsetY * 0.3,
            opacity: Math.max(1 - offsetY / 600, 0),
          }} 
          className="relative z-10 max-w-4xl text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.3em] text-ecell-secondary text-xs md:text-sm mb-6 font-bold flex items-center justify-center gap-2"
          >
            <Sparkles className="h-4 w-4" />
            Empower • Innovate • Build
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter"
          >
            Transforming Ideas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecell-primary via-ecell-secondary to-ecell-accent animate-gradient">
              Into Reality
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-200 mt-8 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed"
          >
            Fostering the spirit of entrepreneurship at NIT Raipur. We help you turn your vision into a scalable venture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
          >
            <Link to="/about" className="group px-10 py-4 rounded-full font-bold bg-ecell-primary text-white shadow-[0_0_20px_rgba(var(--color-primary),0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2">
              Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link to="/event" className="px-10 py-4 rounded-full font-bold border border-white/40 text-white backdrop-blur-md hover:bg-white/10 transition-all text-center">
              Explore Events
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
    {/* </ScrollSection> */}
    {/* ScrollSection className="bg-white text-black"> */}
    

    <HomeAbout  />
    {/* </ScrollSection> */}
    {/* <AboutSliding/> */}
    <HomeEvent />
    <PastSpeakers/>
    <HomeSponsors/>
    <HomeGallery />
   
    </div>
  );
}

// 🔵 Social Icon Mini-Component
const SocialIcon = ({ icon, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.3, x: 5 }}
    className="text-white/50 hover:text-ecell-primary transition-all duration-300 drop-shadow-lg"
  >
    {icon}
  </motion.a>
);