import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react'; // Import useRef

// Helper component for the smooth scroll-triggered animation (Fade-in / Slide-up)
function AnimatedContainer({ children, className, delay = 0 }) {
  const ref = useRef(null);
  // Trigger animation when the bottom of the element reaches the bottom of the viewport ("0 1") 
  // and complete it when it reaches 50% up the viewport ("0.5 1").
  const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "0.5 1"] }); 

  // Transform opacity from 0 to 1 as it scrolls up
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  // Transform position from 50px below to 0px (slide up effect)
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ opacity, y }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: delay }}
    >
      {children}
    </motion.div>
  );
}


export function GallerySection({ images }) {
  const events = [
    { title: 'E-Summit 2025', description: 'Annual entrepreneurship summit', featured: true, },
    { title: 'Speaker Sessions', description: 'Industry leaders sharing insights', featured: false, },
    { title: 'Networking Events', description: 'Connect with fellow entrepreneurs', featured: false, },
    { title: 'Workshops', description: 'Hands-on learning experiences', featured: false, },
  ];

  // Ref for scroll tracking of the entire section
  const sectionRef = useRef(null);
  // Track scroll from when the section starts to when it ends in the viewport
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  // Create a slight parallax effect for the featured image (moves the image style up/down)
  const largeImageY = useTransform(scrollYProgress, [0, 1], [-50, 50]); 


  return (
    <div ref={sectionRef} className="px-6 py-16 max-w-7xl mx-auto">
      {/* E-Summit 2025 Title - Smooth fade-in */}
      <AnimatedContainer className="mb-8" delay={0.2}>
        <h2 className="italic text-xl text-white mb-2">E-Summit 2025</h2>
        <div className="w-[242px] h-[1px] bg-white" />
      </AnimatedContainer>

      {/* Events Grid - Smooth fade-in */}
      <AnimatedContainer className="grid grid-cols-1 md:grid-cols-12 gap-6" delay={0.2}>
        
        {/* Large featured image with PARALLAX */}
        <motion.div
          className="md:col-span-7 md:row-span-2 rounded-[20px] overflow-hidden relative group cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Apply the transformed Y value to the image for parallax */}
          <motion.img
            src={images.large}
            alt="E-Summit 2025"
            className="w-full h-[500px] object-cover"
            style={{ y: largeImageY }} // PARALLAX EFFECT APPLIED HERE
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <div className="absolute bottom-0 left-0 right-0 p-6">
               <h3 className="text-white mb-2">{events[0].title}</h3>
               <p className="text-white/80">{events[0].description}</p>
             </div>
          </div>
        </motion.div>

        {/* Top right image (Keeping original motion behavior) */}
        <motion.div
          className="md:col-span-5 rounded-[20px] overflow-hidden relative group cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={images.topRight}
            alt="Speaker Sessions"
            className="w-full h-[222px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <div className="absolute bottom-0 left-0 right-0 p-4">
               <h4 className="text-white">{events[1].title}</h4>
               <p className="text-white/80">{events[1].description}</p>
             </div>
          </div>
        </motion.div>

        {/* The remaining grid items are kept simple for brevity but should ideally use whileInView for staggering */}
        
        <motion.div
          className="md:col-span-2 rounded-[20px] overflow-hidden relative group cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img src={images.bottomLeft} alt="Networking Events" className="w-full h-[222px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <div className="absolute bottom-0 left-0 right-0 p-4">
               <p className="text-white">{events[2].title}</p>
             </div>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-2 rounded-[20px] overflow-hidden relative group cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img src={images.bottomMiddle} alt="Workshops" className="w-full h-[222px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <div className="absolute bottom-0 left-0 right-0 p-4">
               <p className="text-white">{events[3].title}</p>
             </div>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-1 rounded-[20px] overflow-hidden relative group cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img src={images.bottomRight} alt="Additional Event" className="w-full h-[222px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </AnimatedContainer>

      {/* Additional Event Sections */}
      <div className="mt-16 space-y-12">
        <EventCategory title="Speaker Sessions" images={[images.large, images.topRight, images.bottomLeft]} />
        <EventCategory title="Workshops & Bootcamps" images={[images.bottomMiddle, images.bottomRight, images.large]} />
      </div>
    </div>
  );
}

// EventCategory component with fixed transition and staggered scroll-in animation
function EventCategory({ title, images }) {
  return (
    // Wrap the container for a smooth overall fade-in
    <AnimatedContainer className="space-y-6" delay={0.3}> 
      <div>
        <h2 className="italic text-white text-xl mb-2">{title}</h2>
        <div className="w-[242px] h-[1px] bg-white" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="rounded-[20px] overflow-hidden relative group cursor-pointer"
            
            // **FIX APPLIED HERE:** Nest whileHover transition inside the whileHover prop
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 } // Fast transition for hover
            }} 
            
            // Scroll-triggered entry animation (initial state)
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            
            // Transition applied to the whileInView animation
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1 // Stagger delay based on index (0s, 0.1s, 0.2s...)
            }} 
          >
            <img
              src={image}
              alt={`${title} ${index + 1}`}
              className="w-full h-[250px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white">Event {index + 1}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedContainer>
  );
}