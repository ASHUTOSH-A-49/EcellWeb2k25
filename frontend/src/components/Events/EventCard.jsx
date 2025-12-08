import React, { useRef } from 'react'; 
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
    const cardRef = useRef(null); 
    const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
    const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // 🛠️ MODIFICATION: Changed divisor from 20 to 10 for a higher tilt angle
        const tiltX = (centerY - e.clientY) / 10; // Y-axis tilt
        const tiltY = (e.clientX - centerX) / 10; // X-axis tilt

        setTilt({ x: tiltX, y: tiltY });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
    };

    // Frame Motion style for Tilt
    const dynamicStyle = {
        rotateX: tilt.x,
        rotateY: tilt.y,
        // Increased lift (y: -15) and scale (scale: 1.05) for a more dramatic effect
        y: tilt.x !== 0 || tilt.y !== 0 ? -15 : 0, 
        scale: tilt.x !== 0 || tilt.y !== 0 ? 1.05 : 1, 
        transition: { type: "spring", stiffness: 100, damping: 10, mass: 0.5 },
    };

    return (
        <motion.div 
            ref={cardRef}
            onClick={() => onClick(event)}
            aria-label={`View details for ${event.title}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            
            className="group rounded-xl overflow-hidden cursor-pointer flex flex-col h-full 
                       bg-gray-900/50 backdrop-blur-lg border border-white/10 relative" 
            
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index} 
            
            whileHover={dynamicStyle}
            style={{ perspective: 1000 }}
        >
            {/* Top glowing line - Kept */}
            <div className="h-px bg-linear-to-r from-transparent via-ecell-mine to-transparent" />
            
            {/* Image Wrapper (no changes needed) */}
            <div className="aspect-w-3 aspect-h-2 overflow-hidden"> 
                <motion.img 
                    style={{ y: yImage }}
                    src={event.imageUrl} 
                    alt={event.title} 
                    className="object-cover w-full h-full"
                    initial={{ scale: 1.1 }} 
                    animate={{ scale: 1.1 }} 
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/9ca3af/ffffff?text=Image+Missing"; }}
                />
            </div>
            
            <div className="p-4 flex flex-col grow">
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-sm text-gray-300 mb-4 grow">{event.shortDescription}</p>

                <div className="space-y-2 text-sm text-gray-400 border-t border-white/10 pt-3 mt-auto">
                    <p className="flex items-center gap-2"><Calendar className="w-4 h-4 text-ecell-primary" />{event.date}</p>
                    <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-ecell-primary" />{event.location}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default EventCard;