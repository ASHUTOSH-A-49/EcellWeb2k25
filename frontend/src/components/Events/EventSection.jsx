import React from 'react';
import EventCard from './EventCard'; // Import EventCard to render individual items

/**
 * Renders a titled section containing a responsive grid of EventCards.
 * @param {string} title - The title of the section (e.g., "Upcoming Events").
 * @param {Array} events - The list of event objects to display.
 * @param {function} openModal - Function to open the modal when a card is clicked.
 */
const EventSection = ({ title, events, openModal }) => (
    <section className="mt-12 mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10">
            {title}
            <span className="block h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map(event => (
                <EventCard 
                    key={event.id} 
                    event={event} 
                    onClick={openModal} 
                />
            ))}
        </div>
    </section>
);

export default EventSection;