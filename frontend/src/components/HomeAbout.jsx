import { useEffect, useRef, useState } from "react";
import { Target, Eye, Award, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To cultivate an entrepreneurial mindset among students and provide resources to turn ideas into successful ventures.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To establish NIT Raipur as a leading hub for innovation and startup culture.",
  },
  {
    icon: Award,
    title: "Our Values",
    description:
      "Innovation, integrity, collaboration, and resilience drive everything we do.",
  },
  {
    icon: TrendingUp,
    title: "Our Impact",
    description:
      "Building a thriving ecosystem where students learn, network, and build the future.",
  },
];

export default function HomeAbout() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const parallaxRef = useRef(null);

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Parallax movement effect
  useEffect(() => {
    const handleParallax = (e) => {
      if (!parallaxRef.current) return;
      const x = (window.innerWidth / 2 - e.clientX) / 50;
      const y = (window.innerHeight / 2 - e.clientY) / 50;
      parallaxRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleParallax);
    return () => window.removeEventListener("mousemove", handleParallax);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-ecell-bg"
    >
      {/* 🔥 Background Decorative Blobs */}
      <div ref={parallaxRef} className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-20 w-80 h-80 bg-ecell-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-28 w-96 h-96 bg-ecell-secondary/20 blur-[140px] rounded-full" />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-ecell-accent/20 blur-[100px] rounded-full" />
      </div>

      {/* Top + Bottom Gradient Borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-ecell-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-ecell-primary/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* 📝 Section Header */}
        <span
          className={`
            inline-block text-ecell-primary uppercase tracking-wider text-sm font-semibold mb-4 
            transition-all duration-700 
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          About Us
        </span>

        <h2
          className={`
            text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 
            transition-all duration-700 delay-100 
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          Empowering{" "}
          <span className="bg-linear-to-r from-ecell-primary to-ecell-accent bg-clip-text text-transparent">
            Tomorrow's
          </span>{" "}
          Innovators
        </h2>

        <p
          className={`
            text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed 
            transition-all duration-700 delay-200
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          E-Cell NIT Raipur fosters an entrepreneurial mindset by providing
          hands-on learning, mentorship, and opportunities to turn bold ideas
          into real-world impact.
        </p>

        {/* 🎯 Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
            //   <div
            //     key={feature.title}
            //     className={`
            //       group rounded-2xl p-8 backdrop-blur-xl 
            //       bg-white/5 border border-white/10 
            //       hover:border-ecell-mine/50 
            //       transition-all duration-500 
            //       hover:scale-[1.03] hover:shadow-xl hover:shadow-ecell-mine/20 
            //       ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            //     `}
            //     style={{ transitionDelay: `${100 + index * 10}ms` }}
            //   >
            <div
                className={`
                    group rounded-2xl p-8 bg-white/5 backdrop-blur-xl border border-white/10
                    hover:border-ecell-primary/50 transition-all duration-300 
                    hover:scale-[1.03] hover:shadow-xl hover:shadow-ecell-primary/20

                    opacity-0 translate-y-10
                    ${isVisible ? "opacity-100 translate-y-0" : ""}
                `}
                style={{ transitionDelay: `${200 + index * 120}ms` }}
                >

                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="
                    w-14 h-14 rounded-xl bg-ecell-mine/10 border border-ecell-mine/30 
                    flex items-center justify-center shrink-0 
                    group-hover:bg-ecell-mine/20 group-hover:scale-110 
                    transition-all duration-300
                  ">
                    <Icon className="w-7 h-7 text-ecell-mine" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-bold text-xl mb-2 group-hover:text-ecell-mine transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
