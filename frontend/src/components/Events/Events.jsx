import React from 'react'
import Navbar from '../Navbar'
import About from '../About' 
import EventSection from './EventSection';
import { useState } from 'react';
import  EventModal  from './EventModal'; 

const mockEvents = [
    {
        id: 1,
        type: 'upcoming',
        title: 'E-Summit 2025: The Innovation Leap',
        shortDescription: 'Our flagship event featuring global speakers, pitch competitions, and startup expos.',
        date: 'March 15-17, 2025',
        location: 'NITRR Campus Auditorium',
        imageUrl: 'https://placehold.co/600x400/1e3a8a/ffffff?text=E-SUMMIT',
        details: 'The annual E-Summit brings together entrepreneurs, venture capitalists, and students for three days of intense learning, networking, and innovation. Highlights include a national-level Hackathon and keynotes from industry leaders.'
    },
    {
        id: 2,
        type: 'upcoming',
        title: 'Pitch Perfect 2.0',
        shortDescription: 'Present your groundbreaking idea to a panel of top-tier investors and secure funding.',
        date: 'February 28, 2025',
        location: 'Online / Incubation Center',
        imageUrl: 'https://placehold.co/600x400/3b82f6/ffffff?text=PITCH+PERFECT',
        details: 'A high-stakes competition where young entrepreneurs have 5 minutes to pitch their startup idea. Cash prizes, mentorship, and direct funding opportunities are on the line.'
    },
    {
        id: 3,
        type: 'upcoming',
        title: 'Web 3.0 Workshop Series',
        shortDescription: 'A hands-on technical workshop focused on blockchain, NFTs, and decentralized finance (DeFi).',
        date: 'January 10, 2025',
        location: 'Computer Center, Lab 3',
        imageUrl: 'https://placehold.co/600x400/10b981/ffffff?text=WEB3+WORKSHOP',
        details: 'Learn the fundamentals of building decentralized applications (dApps) on Ethereum. No prior blockchain experience required, but knowledge of JavaScript is recommended.'
    },
    {
        id: 4,
        type: 'past',
        title: 'HackBattle 2024',
        shortDescription: '24-hour hackathon that tackled sustainability challenges using AI and ML.',
        date: 'October 2024',
        location: 'NITRR Main Hall',
        imageUrl: 'https://placehold.co/600x400/ef4444/ffffff?text=HACKBATTLE',
        details: 'A successful 24-hour coding challenge that resulted in three patent-pending solutions for water conservation and renewable energy optimization.'
    },
    {
        id: 5,
        type: 'past',
        title: 'Startup Expo 2024',
        shortDescription: 'Showcasing 50+ student-led startups and securing 10 seed funding rounds.',
        date: 'August 2024',
        location: 'Open Ground',
        imageUrl: 'https://placehold.co/600x400/f59e0b/ffffff?text=EXPO+2024',
        details: 'The annual Startup Expo attracted over 5,000 visitors, leading to significant mentorship pairings and media coverage for the participating student ventures.'
    },
    {
        id: 6,
        type: 'past',
        title: 'Alumni Fireside Chat',
        shortDescription: 'A discussion with NITRR alumni who successfully launched their tech ventures in Silicon Valley.',
        date: 'May 2024',
        location: 'Online (Zoom)',
        imageUrl: 'https://placehold.co/600x400/6366f1/ffffff?text=ALUMNI+CHAT',
        details: 'Our most-attended virtual event, providing deep insights into fundraising, scaling operations, and navigating the complexities of international market expansion.'
    },
];

const Events = () => {
    const upcomingEvents = mockEvents.filter(e => e.type === 'upcoming');
    const pastEvents = mockEvents.filter(e => e.type === 'past');
    const [selectedEvent, setSelectedEvent] = useState(null);
    const openModal = (event) => setSelectedEvent(event);
    const closeModal = () => setSelectedEvent(null);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="page-content pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <header className="py-10 text-center">
                    <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
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
                
                <footer className="py-10 text-center text-gray-500 text-sm">
                    © 2025 E-Cell NITRR. All rights reserved.
                </footer>
            </div>
            <EventModal event={selectedEvent} onClose={closeModal} />
        </div>
    );
}

export default Events;