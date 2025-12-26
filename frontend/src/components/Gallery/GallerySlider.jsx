



import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './GallerySlider.css'; // Custom CSS for styling
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// ******************************************************
// CHANGE 1: Import the Autoplay module
// ******************************************************
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

// --- Placeholder Image Data ---
const flowerImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'A colorful bouquet' },
  { id: 2, url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fHww', alt: 'Red rose' },
  { id: 3, url: 'https://images.unsplash.com/photo-1429087969512-1e85aab2683d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D', alt: 'Lavender' },
  { id: 4, url: 'https://images.unsplash.com/photo-1605677725437-74dafaa1272d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D', alt: 'Dark pink flower' },
  { id: 5, url:  'https://images.unsplash.com/photo-1584025027548-f08b71022a49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8', alt: 'Another red rose' },
  { id: 6, url: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Yellow tulips' },
  { id: 7, url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fHww', alt: 'White daisies' },
];

export default function GallerySlider({ images = flowerImages }) {
  return (
    <div className="flower-gallery-container* *relative** bg-white/10 backdrop-blur-md p-6 rounded-xl
    /* --- GLOW EFFECT STARTS HERE --- */
      
      /* 1. Base Container Styling (Glass + Shadow) */
      shadow-2xl z-10 overflow-visible
      
      /* 2. Inner Glow (Subtle Indigo Light) */
      shadow-[0_0_20px_0_rgba(99,102,241,0.5)] 
      
      /* 3. Outer Bleed/Border Glow (Vibrant Cyan) */
      
     
      
      /* 4. Remove custom glowing-border class */
      /* Note: We no longer need the 'glowing-border' class */ ">
     
      
      <Swiper
        effect={'coverflow'} 
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        
        // CHANGE 2: Add the autoplay configuration
        autoplay={{
          delay: 3000, // Wait 3.5 seconds before moving to the next slide
          disableOnInteraction: false, // Keep autoplating even if user interacts
          pauseOnMouseEnter: true, // Pause slideshow when mouse hovers over it
        }}

        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        
        navigation={true}
        pagination={{ clickable: true }}
        
        // CHANGE 3: Add Autoplay to the modules array
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="flower-swiper-gallery"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <img 
              src={image.url} 
              alt={image.alt} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                borderRadius: '15px'
              }} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}