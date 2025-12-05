import React from 'react'
import { X, Calendar, MapPin } from 'lucide-react';
const EventModal = ({ event, onClose }) => {
    if (!event) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-[100]"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-lg lg:max-w-3xl max-h-[90vh] overflow-y-auto transform transition-all"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition z-10"
                    aria-label="Close Modal"
                >
                    <X className="w-5 h-5 text-gray-700" />
                </button>
                <div className="lg:h-64 h-48 overflow-hidden rounded-t-xl">
                    <img 
                        src={event.imageUrl} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x400/9ca3af/ffffff?text=Image+Missing"; }}
                    />
                </div>
                <div className="p-6 md:p-8">
                    <h2 className="text-3xl font-extrabold text-blue-700 mb-3">{event.title}</h2>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between text-gray-600 mb-6 border-b pb-4">
                        <p className="flex items-center gap-2 font-medium"><Calendar className="w-5 h-5 text-blue-500" />{event.date}</p>
                        <p className="flex items-center gap-2 font-medium mt-2 md:mt-0"><MapPin className="w-5 h-5 text-blue-500" />{event.location}</p>
                    </div>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{event.details}</p>
                    {event.type === 'upcoming' && (
                        <a href="#" className="mt-8 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-lg">
                            Register Now
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventModal
