import React, { useState, useEffect, useRef, useCallback } from 'react';

import { GallerySection } from './Gallery/GallerySection';

import GallerySlider from './Gallery/GallerySlider';
import { useLocation } from 'react-router-dom';
import "./Gallery/Gallery.css"
// --- Sample Image Data (Using placeholders for Tailwind) ---

const GLIMPS_IMAGES = [

  // You should replace these with actual paths/URLs in your project

  { id: 1, url: 'https://picsum.photos/600/400?random=201', alt: 'Motivational Interior' },

  { id: 2, url: 'https://picsum.photos/600/400?random=201', alt: 'Mountain Lake Canoe' },

  { id: 3, url: 'https://picsum.photos/600/400?random=201', alt: 'Yellow Smile Decor' },

  { id: 4, url: 'https://picsum.photos/600/400?random=201', alt: 'Another Event Moment' },

  { id: 5, url: 'https://picsum.photos/600/400?random=201', alt: 'Forest Scene' },

  { id: 6, url: 'https://picsum.photos/600/400?random=201', alt: 'Close-up Decor' },

];



const E_SUMMIT_IMAGES = [

    // ... data for lower section ...

    { id: 'a', url: 'https://picsum.photos/600/400?random=201', alt: 'E-Summit grid 1' },

    { id: 'b', url: 'https://picsum.photos/600/400?random=201', alt: 'E-Summit grid 2' },

    { id: 'c', url: 'https://picsum.photos/600/400?random=201', alt: 'E-Summit grid 3' },

    { id: 'd', url: 'https://picsum.photos/600/400?random=201', alt: 'E-Summit grid 4' },

    { id: 'e', url: 'https://picsum.photos/600/400?random=201', alt: 'E-Summit grid 5' },

    { id: 'f', url: 'https://picsum.photos/600/400?random=201', alt: 'E-Summit grid 6' },

];



const Gallery = () => {

  const location = useLocation();

  const [activeIndex, setActiveIndex] = useState(1);

  const timeoutRef = useRef(null);


useEffect(() => {
    // Scrolls to the top of the page immediately upon loading the Gallery page.
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Use 'instant' for immediate snap, or 'smooth' if preferred.
    });
    
   
    
  }, [location.pathname]); // The effect runs whenever the path changes (i.e., when you navigate here)
 



   

  //  

  const eventImages = {

    large: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    topRight: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fHww",

    bottomLeft: "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",

    bottomMiddle: "https://images.unsplash.com/photo-1605677725437-74dafaa1272d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",

    bottomRight: "https://images.unsplash.com/photo-1584025027548-f08b71022a49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",

  };

  return (

    <>

   

<div className="bg-gradient-to-br from-[#020617] via-slate-900 to-indigo-950 min-h-screen
  /* Required structural classes */
  text-gray-100 min-h-screen pt-10 pb-20 font-sans
">
     





      {/* --- 1. Glimps of Events (Full-Width Animated Slider) --- */}

       <header className="text-center mt-16 mb-8">

  <h2
    className="
      text-center text-5xl md:text-5xl font-extrabold mb-2
      bg-gradient-to-r from-ecell-primary via-ecell-mine to-ecell-accent
      bg-clip-text text-transparent pb-2
    "
    style={{
  opacity: 0,
  animation: `
    premiumSlide 1.2s cubic-bezier(.19,1,.22,1) forwards,
    premiumGlow 3s ease-in-out 1.3s infinite alternate
  `
}}

  >
    Glimps Of Events
  </h2>

  <p
    className="text-gray-400 italic mt-2"
    style={{
      opacity: 0,
      animation: "premiumFade 1.5s ease-out 0.4s forwards",
    }}
  >
    Moments from our entrepreneurial journey
  </p>

</header>




   

    <GallerySlider/>

    <GallerySection images={eventImages} />
    </div>

    </>

  );

};



export default Gallery;



