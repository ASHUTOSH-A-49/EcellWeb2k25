import React from 'react';
import { X, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion'; 

// --- FRAMER MOTION VARIANTS ---

// Variants for the overall modal wrapper (scale/pop-in remains)
const modalVariants = {
    hidden: { 
        opacity: 0, 
        scale: 0.9, 
        rotateZ: -1,
    },
    visible: { 
        opacity: 1, 
        scale: 1, 
        rotateZ: 0, 
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 25,
            when: "beforeChildren", 
        }
    },
    exit: { 
        opacity: 0, 
        scale: 0.9,
        rotateZ: 1,
        transition: {
            duration: 0.2,
        }
    },
};

// Variants for the SVG rectangle drawing animation
const sketchVariants = {
    hidden: { pathLength: 0 },
    visible: { 
        pathLength: 1, 
        transition: {
            duration: 0.5,
            delay: 0.1, // Start drawing just after the modal appears
            ease: "easeInOut"
        }
    }
};

// Variants for the modal's internal content to fade/slide in
const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.4, 
            delay: 0.6 // Start content fade-in after the sketch animation finishes
        } 
    },
};


const EventModal = ({ event, onClose }) => {
    if (!event) return null;

    // Use a function to calculate SVG dimensions dynamically based on modal size
    const ModalContent = ({ children }) => (
        <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit" 
            
            className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-lg lg:max-w-3xl max-h-[90vh] overflow-y-auto relative" // Removed static border here
            onClick={(e) => e.stopPropagation()} 
        >
            
            {/* 💡 SKETCH ANIMATION SVG */}
            <svg 
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ overflow: 'visible' }} // Allow stroke to show outside bounds
            >
                {/* The rectangle boundary for the sketch effect */}
                <motion.rect 
                    x="2" y="2" 
                    rx="12" ry="12" // Match modal border radius
                    width="calc(100% - 4px)" 
                    height="calc(100% - 4px)"
                    fill="none" 
                    // Use theme color for the stroke
                    stroke="var(--color-ecell-primary, #6366f1)" 
                    strokeWidth="3"
                    
                    variants={sketchVariants}
                    initial="hidden"
                    animate="visible"
                />
            </svg>

            <button 
                onClick={onClose} 
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition z-20 backdrop-blur-sm" // Increased z-index
                aria-label="Close Modal"
            >
                <X className="w-5 h-5 text-white" />
            </button>

            {/* Inner Content - Z-Index 10 is implied/default, sits above the SVG (z-0) */}
            <div className="lg:h-64 h-48 overflow-hidden rounded-t-xl relative z-10">
                <img 
                    src={event.imageUrl} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x400/9ca3af/ffffff?text=Image+Missing"; }}
                />
            </div>
            
            {/* Content Fade-in */}
            <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10"
            >
                <div className="p-6 md:p-8">
                    
                    <h2 className="text-3xl font-extrabold text-ecell-primary mb-3">{event.title}</h2>
                    
                    <div 
                        className="flex flex-col md:flex-row md:items-center justify-between text-gray-400 mb-6 border-b border-white/10 pb-4"
                    >
                        <p className="flex items-center gap-2 font-medium"><Calendar className="w-5 h-5 text-ecell-primary" />{event.date}</p>
                        <p className="flex items-center gap-2 font-medium mt-2 md:mt-0"><MapPin className="w-5 h-5 text-ecell-primary" />{event.location}</p>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{event.details}</p>
                    
                    {event.type === 'upcoming' && (
                        <a href="#" className="mt-8 inline-block bg-ecell-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-lg">
                            Register Now
                        </a>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-[100]"
            onClick={onClose}
        >
            <ModalContent />
        </div>
    );
};

export default EventModal;