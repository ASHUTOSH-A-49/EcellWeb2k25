import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function HomeGallery() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Reveal on scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Tilt hover effect
  const handleTilt = (e, index) => {
    const card = document.getElementById(`gallery-card-${index}`);
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 30;
    const y = (e.clientY - rect.top - rect.height / 2) / 30;

    card.style.transform = `translateY(-6px) rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const resetTilt = (index) => {
    const card = document.getElementById(`gallery-card-${index}`);
    if (!card) return;
    card.style.transform = "translateY(0px) rotateY(0deg) rotateX(0deg)";
  };
   
  const handleViewMoreClick = () => {
    // Navigate to the '/gallery' path (assuming your Gallery component is routed here)
    // The { state: { smoothScroll: true } } is a common pattern to signal the
    // destination component or a higher-order component to scroll to the top.
    navigate('/Gallery', { state: { smoothScroll: true } }); 
  };

  const images = [
    "https://res.cloudinary.com/daoth3ia9/image/upload/v1766853086/freecompress-Copy_of_IMG_0425_lj3n1b.jpg",
    "https://res.cloudinary.com/daoth3ia9/image/upload/v1766853085/freecompress-Copy_of__SAV5476_pr6jbk.jpg",
    "https://res.cloudinary.com/daoth3ia9/image/upload/v1766853083/freecompress-Copy_of_IMG_5683-6_y6spyx.jpg",
    "https://res.cloudinary.com/daoth3ia9/image/upload/v1766853080/freecompress-Copy_of_TGR02030_m2no1y.jpg",
  ];

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-28 bg-ecell-bg overflow-hidden"
    >
      {/* Sparkle Line */}
      <div className="sticky top-16 z-20">
  <div
    className={`
      h-[2px] w-full
      bg-linear-to-r from-transparent via-ecell-mine to-transparent
      transition-all duration-500
      ${visible ? "opacity-100 scale-100" : "opacity-0 scale-50"}
    `}
  />
</div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2
          className={`
            text-center text-4xl md:text-5xl font-extrabold mb-12
            bg-linear-to-r from-ecell-primary via-ecell-mine to-ecell-accent 
            bg-clip-text text-transparent pb-2
            transition-all duration-500
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          Gallery Highlights
        </h2>

        {/* 3 Top Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* LEFT IMAGE */}
          <div
            id="gallery-card-0"
            onMouseMove={(e) => handleTilt(e, 0)}
            onMouseLeave={() => resetTilt(0)}
            className={`
    rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-xl
    transition-all duration-300

    opacity-0 translate-y-8
    md:translate-y-0 md:-translate-x-10

    ${visible ? "opacity-100 translate-y-0 md:translate-x-0" : ""}
  `}
          >
            <img src={images[0]} className="w-full h-64 object-cover" />
          </div>

          {/* MIDDLE IMAGE */}
          <div
            id="gallery-card-1"
            onMouseMove={(e) => handleTilt(e, 1)}
            onMouseLeave={() => resetTilt(1)}
            className={`
    rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-xl
    transition-all duration-300

    opacity-0 translate-y-8
    ${visible ? "opacity-100 translate-y-0" : ""}
  `}
          >
            <img src={images[1]} className="w-full h-64 object-cover" />
          </div>

          {/* RIGHT IMAGE */}
          <div
            id="gallery-card-2"
            onMouseMove={(e) => handleTilt(e, 2)}
            onMouseLeave={() => resetTilt(2)}
            className={`
    rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-xl
    transition-all duration-300

    opacity-0 translate-y-8
    md:translate-y-0 md:translate-x-10

    ${visible ? "opacity-100 translate-y-0 md:translate-x-0" : ""}
  `}
          >
            <img src={images[2]} className="w-full h-64 object-cover" />
          </div>
        </div>

        {/* Bottom Large Image */}
        <div
          id="gallery-card-3"
          onMouseMove={(e) => handleTilt(e, 3)}
          onMouseLeave={() => resetTilt(3)}
          className={`
    mt-6 rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-xl
    transition-all duration-300

    opacity-0 translate-y-8
    ${visible ? "opacity-100 translate-y-0" : ""}
  `}

        >
          <img src={images[3]} className="w-full h-72 object-cover" />
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button onClick={handleViewMoreClick}
            className="
              px-8 py-3 rounded-xl font-semibold border border-ecell-mine text-ecell-mine
              hover:bg-ecell-mine hover:text-white transition-all duration-300
            "
          >
            <Link to="/gallery">View More</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
