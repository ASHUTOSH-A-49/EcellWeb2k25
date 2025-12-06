import React, { useRef } from 'react'; // 💡 Import useRef
import { Calendar, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion'; 

const EventCard = ({ event, onClick, index }) => { 
    
    // --- Framer Motion Load-in Variants (Level 2) ---
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1, // Staggered delay based on index
                duration: 0.5,
                ease: "easeOut"
            },
        }),
    };

    // --- Framer Motion Parallax Scroll ---
    const cardRef = useRef(null); //reference for the card
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"] // Target the card's visibility range
    });

    // 2.image movement: transform scroll progress (0 to 1) into vertical movement (e.g., -50px to 50px)
    const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <motion.div 
            ref={cardRef} //ATTACH REF to the main card container
            onClick={() => onClick(event)}
            aria-label={`View details for ${event.title}`}
            
            // Base Class Names
            className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer flex flex-col h-full 
                       border border-gray-100 hover:border-gray-300 hover:z-10"
            
            // FRAMER MOTION PROPS for initial load animation
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index} 
            
            // FRAMER MOTION PROPS for smooth hover
            whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
            }}
        >
            {/* 💡 IMAGE WRAPPER - Important: overflow-hidden is key for parallax */}
            <div className="aspect-w-3 aspect-h-2 overflow-hidden"> 
                <motion.img // motion.img is used for the animated image
                    style={{ y: yImage }} //APPLY THE PARALLAX Y-TRANSFORM
                    src={event.imageUrl} 
                    alt={event.title} 
                    className="object-cover w-full h-full"
                    
                    // Added initial scale to ensure the image always fills the viewport during the Y-transform
                    initial={{ scale: 1.1 }} 
                    animate={{ scale: 1.1 }} 
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/9ca3af/ffffff?text=Image+Missing"; }}
                />
            </div>
            
            <div className="p-4 flex flex-col grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-4 grow">{event.shortDescription}</p>

                <div className="space-y-2 text-sm text-gray-500 border-t pt-3 mt-auto">
                    <p className="flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-500" />{event.date}</p>
                    <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500" />{event.location}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default EventCard;