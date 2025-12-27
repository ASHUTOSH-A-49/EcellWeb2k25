import React, { useRef, useState } from 'react'; 
import { Calendar, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion'; 

const EventCard = ({ event, onClick, index }) => { 
    const cardRef = useRef(null); 
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false); 

    // Parallax logic: slightly reduced range to prevent the image from sliding out of frame
    const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
    const yImage = useTransform(scrollYProgress, [0, 1], [-30, 30]);

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            },
        }),
    };

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        setTilt({ 
            x: (centerY - e.clientY) / 10, 
            y: (e.clientX - centerX) / 10 
        });
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
        setIsHovered(false);
    };

    return (
        <motion.div 
            ref={cardRef}
            onClick={() => onClick(event)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group rounded-xl overflow-hidden cursor-pointer flex flex-col h-full 
                       bg-gray-900/50 backdrop-blur-lg border border-white/10 relative" 
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index} 
            whileHover={{
                rotateX: tilt.x,
                rotateY: tilt.y,
                y: -15,
                scale: 1.05,
                transition: { type: "spring", stiffness: 100, damping: 10, mass: 0.5 }
            }}
            style={{ perspective: 1000 }}
        >
            <div 
                className={`absolute inset-0 -z-10 rounded-xl transition-all duration-500
                    ${isHovered ? `scale-[1.05] opacity-40 shadow-[0_0_40px_-5px_var(--color-ecell-primary)]` : 'opacity-0'}`}
                style={{ background: `radial-gradient(circle at center, var(--color-ecell-primary) 0%, transparent 60%)` }}
            />

            <div className="h-px bg-linear-to-r from-transparent via-ecell-mine to-transparent" />
            
            {/* FIXED SIZING: Aspect ratio container with forced cover */}
            <div className="relative aspect-[3/2] w-full overflow-hidden"> 
                <motion.img 
                    style={{ y: yImage }}
                    src={event.imageUrl} 
                    alt={event.title} 
                    className="absolute inset-0 w-full h-[120%] object-cover" // h-[120%] accounts for parallax movement
                    initial={{ scale: 1.2 }} 
                    animate={{ scale: 1.2 }} 
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/1e1e1e/ffffff?text=Event+Poster"; }}
                />
            </div>
            
            <div className="p-4 flex flex-col grow">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{event.title}</h3>
                <p className="text-sm text-gray-300 mb-4 grow line-clamp-3">{event.shortDescription}</p>

                <div className="space-y-2 text-sm text-gray-400 border-t border-white/10 pt-3 mt-auto">
                    <p className="flex items-center gap-2"><Calendar className="w-4 h-4 text-ecell-primary" />{event.date}</p>
                    <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-ecell-primary" />{event.location}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default EventCard;