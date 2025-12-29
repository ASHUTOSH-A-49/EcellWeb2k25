import React from 'react';
import { X, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion'; 

const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateZ: -1 },
    visible: { 
        opacity: 1, scale: 1, rotateZ: 0, 
        transition: { type: "spring", stiffness: 200, damping: 25, when: "beforeChildren" }
    },
    exit: { opacity: 0, scale: 0.9, rotateZ: 1, transition: { duration: 0.2 } },
};

const sketchVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 0.5, delay: 0.1, ease: "easeInOut" } }
};

const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.6 } },
};

const EventModal = ({ event, onClose }) => {
    if (!event) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-[100] backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit" 
                className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-lg lg:max-w-3xl max-h-[90vh] overflow-y-auto relative scrollbar-hide"
                onClick={(e) => e.stopPropagation()} 
            >
                {/* Sketch Animation SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                    <motion.rect 
                        x="2" y="2" rx="12" ry="12" 
                        width="calc(100% - 4px)" height="calc(100% - 4px)"
                        fill="none" stroke="var(--color-ecell-primary, #6366f1)" strokeWidth="3"
                        variants={sketchVariants} initial="hidden" animate="visible"
                    />
                </svg>

                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 rounded-full transition z-30 backdrop-blur-md"
                    aria-label="Close Modal"
                >
                    <X className="w-5 h-5 text-white" />
                </button>

                {/* IMAGE CONTAINER: Set to contain the image fully */}
                <div className="w-full bg-black/20 aspect-video lg:aspect-[21/9] overflow-hidden rounded-t-xl relative z-10 flex items-center justify-center">
                    <img 
                        src={event.imageUrl} 
                        alt={event.title} 
                        // Using 'object-contain' to ensure the 100% of the image is visible
                        className="max-w-full max-h-full object-contain" 
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x400/1e1e1e/ffffff?text=Event+Details"; }}
                    />
                </div>
                
                <motion.div variants={contentVariants} initial="hidden" animate="visible" className="relative z-10">
                    <div className="p-6 md:p-8">
                        <h2 className="text-3xl font-extrabold text-ecell-primary mb-3 leading-tight">{event.title}</h2>
                        
                        <div className="flex flex-col md:flex-row md:items-center justify-between text-gray-400 mb-6 border-b border-white/10 pb-4">
                            <p className="flex items-center gap-2 font-medium">
                                <Calendar className="w-5 h-5 text-ecell-primary" />
                                {event.date}
                            </p>
                            <p className="flex items-center gap-2 font-medium mt-2 md:mt-0">
                                <MapPin className="w-5 h-5 text-ecell-primary" />
                                {event.location}
                            </p>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{event.details}</p>
                        
                        {event.type === 'upcoming' && (
                            <div className="mt-8">
                                <a href="#" className="inline-block bg-ecell-primary text-white py-3 px-8 rounded-lg font-semibold hover:brightness-110 transition duration-200 shadow-lg">
                                    Register Now
                                </a>
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default EventModal;