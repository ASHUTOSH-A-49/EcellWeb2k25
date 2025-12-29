import { useEffect, useRef, useState } from "react";

export default function PastSpeakers() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const speakers = [
    {
      name: "Dr. Gajendra Purohit",
      role: "Founder @MathsCare,Mathematics Educator",
      image: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766851697/gp_c3opaq.jpg",
      // quote: "Build first, perfect later. Momentum beats perfection.",
    },
    {
      name: "Anubhav Dubey",
      role: "Co-Founder @Chai Sutta Bar",
      image: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766851697/anubhavdubey_gnevsx.jpg",
      // quote: "Trust is the real currency of the internet economy.",
    },
    {
      name: "Sandeep Jain",
      role: "Founder of Coding Platform:GeeksforGeeks",
      image: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766851696/sandeepjain_h6oftr.jpg",
      // quote: "Consistency compounds more than talent.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="past-speakers"
      className="relative py-28 bg-ecell-bg overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="absolute -top-40 after:after:from-transparent via-ecell-mine to-transparent blur-[120px] rounded-full" />

      {/* Spark line */}
      <div
        className={`
          h-[2px] w-full mb-16
          bg-linear-to-r from-transparent via-ecell-mine to-transparent
          transition-all duration-500
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-50"}
        `}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <h2
          className={`
            text-center text-4xl md:text-5xl font-extrabold mb-16
            bg-linear-to-r from-ecell-primary via-ecell-mine to-ecell-accent
            bg-clip-text text-transparent
            transition-all duration-500
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          Past Speakers
        </h2>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {speakers.map((speaker, i) => (
            <div
              key={speaker.name}
              className={`
                group relative rounded-2xl overflow-hidden
                bg-white/5 border border-white/10 backdrop-blur-xl
                shadow-xl transition-all duration-300

                opacity-0 translate-y-10
                md:translate-y-0
                md:${i === 0 ? "-translate-x-10" : i === 2 ? "translate-x-10" : "translate-y-10"}

                ${
                  visible
                    ? "opacity-100 translate-y-0 md:translate-x-0"
                    : ""
                }
              `}
            >
              {/* Floating overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-ecell-mine/20 via-transparent to-purple-500/10 opacity-70 animate-[pulse_6s_ease-in-out_infinite]" />

              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6 text-center">
                <h3 className="text-xl font-bold text-white">
                  {speaker.name}
                </h3>
                <p className="text-ecell-mine text-sm font-medium mb-3">
                  {speaker.role}
                </p>

                <p className="text-sm text-gray-300 italic leading-relaxed">
                  “{speaker.quote}”
                </p>
              </div>

              {/* Bottom glow */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-ecell-mine to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
