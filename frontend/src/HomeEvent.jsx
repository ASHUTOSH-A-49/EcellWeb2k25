import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, ArrowUpRight, Clock } from "lucide-react";

const events = [
  {
    title: "E-Summit 2024",
    date: "March 15–17, 2024",
    location: "NIT Raipur Campus",
    description:
      "The flagship annual entrepreneurship summit featuring keynotes, workshops, and startup competitions.",
    type: "Summit",
    status: "Upcoming",
  },
  {
    title: "Startup Bootcamp",
    date: "February 20, 2024",
    location: "Innovation Hub",
    description:
      "Intensive 3-day bootcamp for aspiring entrepreneurs with hands-on mentorship.",
    type: "Workshop",
    status: "Registration Open",
  },
  {
    title: "Pitch Perfect",
    date: "January 28, 2024",
    location: "Seminar Hall",
    description:
      "Master the art of pitching your startup idea to investors and judges.",
    type: "Competition",
    status: "Completed",
  },
  {
    title: "Founder's Talk Series",
    date: "Every Saturday",
    location: "Virtual",
    description:
      "Weekly sessions with successful founders sharing their journey and lessons.",
    type: "Talk Series",
    status: "Ongoing",
  },
];

export default function HomeEvent() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="events" ref={sectionRef} className="relative py-32 bg-ecell-bg">
      {/* Decorative Background */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-ecell-primary/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-ecell-secondary/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span
              className={`
                inline-block text-ecell-primary font-semibold tracking-wider uppercase text-sm mb-4 
                transition-all duration-700 
                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
              `}
            >
              Events
            </span>

            <h2
              className={`
                text-4xl md:text-5xl lg:text-6xl font-extrabold 
                transition-all duration-700 delay-100
                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
              `}
            >
              What's <span className="text-ecell-mine">Happening</span>
            </h2>
          </div>

          {/* Replace Button with simple JSX */}
          <button
            className={`
              px-5 py-3 border rounded-xl font-medium flex items-center gap-2
              border-ecell-primary text-ecell-primary
              hover:bg-ecell-primary hover:text-white 
              transition-all duration-700 delay-200
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
            `}
          >
            View All Events <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={event.title}
              className={`
                group relative rounded-2xl p-6 cursor-pointer 
                bg-white/5 backdrop-blur-xl border border-white/10
                transition-all duration-500
                ${hoveredIndex === index ? "border-ecell-primary/50 scale-[1.02]" : "hover:border-white/30"}
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
              style={{ transitionDelay: `${100 + index * 10}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Status Tags */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-ecell-primary/20 text-ecell-primary border border-ecell-primary/30">
                  {event.type}
                </span>

                <span
                  className={`
                    px-3 py-1 text-xs font-semibold rounded-full 
                    ${
                      event.status === "Upcoming"
                        ? "bg-ecell-accent/20 text-ecell-accent border border-ecell-accent/30"
                        : event.status === "Completed"
                        ? "bg-gray-700 text-gray-400 border border-gray-600"
                        : "bg-ecell-secondary/20 text-ecell-secondary border border-ecell-secondary/30"
                    }
                  `}
                >
                  {event.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-2xl mb-3 group-hover:text-ecell-mine transition-colors">
                {event.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 line-clamp-2">{event.description}</p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-ecell-primary" />
                  <span>{event.date}</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-ecell-primary" />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Hover Arrow */}
              <div
                className={`
                  absolute top-6 right-6 w-10 h-10 rounded-full bg-ecell-primary/10 
                  flex items-center justify-center transition-all duration-300
                  ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                `}
              >
                <ArrowUpRight className="w-5 h-5 text-ecell-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
