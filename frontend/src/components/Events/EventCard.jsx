import React from 'react'
import { Calendar, MapPin } from 'lucide-react';

const EventCard = ({ event, onClick }) => {
    return (
        <div 
            
            className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-500 rounded-xl overflow-hidden cursor-pointer flex flex-col h-full 
                       transform hover:scale-[1.05] hover:z-25 transition duration-500 ease-in-out"
            onClick={() => onClick(event)}
            aria-label={`View details for ${event.title}`}
        >
            <div className="aspect-w-3 aspect-h-2">
                <img 
                    src={event.imageUrl} 
                    alt={event.title} 
                    className="object-cover w-full h-full"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/9ca3af/ffffff?text=Image+Missing"; }}
                />
            </div>
            
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">{event.shortDescription}</p>

                <div className="space-y-2 text-sm text-gray-500 border-t pt-3 mt-auto">
                    <p className="flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-500" />{event.date}</p>
                    <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500" />{event.location}</p>
                </div>
            </div>
        </div>
    );
};

export default EventCard; 