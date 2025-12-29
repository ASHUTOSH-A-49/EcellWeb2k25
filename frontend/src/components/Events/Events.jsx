import React, { useState } from 'react';
import EventSection from './EventSection';
import EventModal from './EventModal'; 
import { AnimatePresence } from 'framer-motion';

// 🚀 IMPORT DATA FROM JSON
import eventData from '../../assets/Data/eventsdata.json'; 

const Events = () => {
    // Filter events from the imported JSON
    const upcomingEvents = eventData.filter(e => e.type === 'upcoming');
    const pastEvents = eventData.filter(e => e.type === 'past');
    
    const [selectedEvent, setSelectedEvent] = useState(null);
    const openModal = (event) => setSelectedEvent(event);
    const closeModal = () => setSelectedEvent(null);

    return (
        <div className="min-h-screen bg-ecell-bg relative overflow-hidden">
            {/* Background Blobs */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-40 left-10 h-80 w-80 bg-ecell-primary/40 rounded-full blur-3xl" />
                <div className="absolute top-40 right-0 h-96 w-96 bg-ecell-secondary/30 rounded-full blur-[110px]" />
                <div className="absolute bottom-16 left-1/2 h-72 w-72 -translate-x-1/2 bg-ecell-accent/20 rounded-full blur-3xl" />
            </div>

            <div className="page-content pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <header className="py-10 text-center">
                    <h1 className="text-5xl font-extrabold text-white tracking-tight">
                        EVENTS
                    </h1>
                </header>

                <main>
                    <EventSection 
                        title="Upcoming Events" 
                        events={upcomingEvents} 
                        openModal={openModal} 
                    />
                    <EventSection 
                        title="Past Events" 
                        events={pastEvents} 
                        openModal={openModal} 
                    />
                </main>
            </div>
            
            <AnimatePresence mode="wait">
                {selectedEvent && (
                    <EventModal event={selectedEvent} onClose={closeModal} />
                )}
            </AnimatePresence>
        </div>
    );
}

export default Events;