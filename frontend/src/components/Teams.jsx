import React, { useState } from 'react';
import { Mail, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

// --- DUMMY DATA (Expanded for Visualization) ---
const teamData = {
    faculties: [
        { name: "Dr. A. B. C. Rao", title: "Faculty Head", img: "https://i.pravatar.cc/150?img=68", socials: { linkedin: "#", mail: "#" } },
        { name: "Dr. D. E. F. Singh", title: "Faculty Coordinator", img: "https://i.pravatar.cc/150?img=69", socials: { linkedin: "#", mail: "#" } },
    ],
    overallCoordinators: [
        { name: "Rishabh Sahu", title: "Overall Coordinator", img: "https://i.pravatar.cc/150?img=1", socials: { linkedin: "#", instagram: "#" } },
        { name: "Priya Sharma", title: "Overall Coordinator", img: "https://i.pravatar.cc/150?img=2", socials: { linkedin: "#", instagram: "#" } },
    ],
    headCoordinators: [
        { name: "Amit Kumar", domain: "Tech Head", img: "https://i.pravatar.cc/150?img=3", socials: { linkedin: "#", instagram: "#" } },
        { name: "Vikas Gupta", domain: "Spons Head", img: "https://i.pravatar.cc/150?img=4", socials: { linkedin: "#", instagram: "#" } },
        { name: "Sneha Reddy", domain: "Design Head", img: "https://i.pravatar.cc/150?img=5", socials: { linkedin: "#", instagram: "#" } },
    ],
    managers: [
        // Tech (6)
        { name: "Vivek M.", domain: "Tech" }, { name: "Riya M.", domain: "Tech" }, { name: "Kiran M.", domain: "Tech" }, { name: "Siddharth M.", domain: "Tech" }, { name: "Aarav M.", domain: "Tech" }, { name: "Zoya M.", domain: "Tech" },
        // Spons (6)
        { name: "Anjali M.", domain: "Spons" }, { name: "Ishaan M.", domain: "Spons" }, { name: "Pooja M.", domain: "Spons" }, { name: "Rohit M.", domain: "Spons" }, { name: "Chirag M.", domain: "Spons" }, { name: "Divya M.", domain: "Spons" },
        // PR (5)
        { name: "Chitra M.", domain: "PR" }, { name: "Harshita M.", domain: "PR" }, { name: "Gaurav M.", domain: "PR" }, { name: "Nisha M.", domain: "PR" }, { name: "Om M.", domain: "PR" },
        // Video Editing (5)
        { name: "Deepak M.", domain: "Video Editing" }, { name: "Lata M.", domain: "Video Editing" }, { name: "Mohan M.", domain: "Video Editing" }, { name: "Parul M.", domain: "Video Editing" }, { name: "Quentin M.", domain: "Video Editing" },
        // Design (5)
        { name: "Ekta M.", domain: "Design" }, { name: "Bhuvan M.", domain: "Design" }, { name: "Tina M.", domain: "Design" }, { name: "Rohan M.", domain: "Design" }, { name: "Simran M.", domain: "Design" },
        // EM (4)
        { name: "Farhan M.", domain: "EM" }, { name: "Kavya M.", domain: "EM" }, { name: "Rajesh M.", domain: "EM" }, { name: "Sunita M.", domain: "EM" },
        // Startup Founder (3 - less common role)
        { name: "Jay M.", domain: "Startup Founder" }, { name: "Meena M.", domain: "Startup Founder" }, { name: "Neil M.", domain: "Startup Founder" },
    ],
    executives: [
        // Tech (6)
        { name: "Jahnvi E.", domain: "Tech" }, { name: "Rakesh E.", domain: "Tech" }, { name: "Sonia E.", domain: "Tech" }, { name: "Tarun E.", domain: "Tech" }, { name: "Urmila E.", domain: "Tech" }, { name: "Vikrant E.", domain: "Tech" },
        // Design (6)
        { name: "Kunal E.", domain: "Design" }, { name: "Parul E.", domain: "Design" }, { name: "Waseem E.", domain: "Design" }, { name: "Xena E.", domain: "Design" }, { name: "Yash E.", domain: "Design" }, { name: "Zubair E.", domain: "Design" },
        // PR (5)
        { name: "Lata E.", domain: "PR" }, { name: "Alok E.", domain: "PR" }, { name: "Bhavana E.", domain: "PR" }, { name: "Chetan E.", domain: "PR" }, { name: "Deepa E.", domain: "PR" },
        // Video Editing (5)
        { name: "Mohan E.", domain: "Video Editing" }, { name: "Eesha E.", domain: "Video Editing" }, { name: "Faisal E.", domain: "Video Editing" }, { name: "Geeta E.", domain: "Video Editing" }, { name: "Himesh E.", domain: "Video Editing" },
        // Spons (5)
        { name: "Nisha E.", domain: "Spons" }, { name: "Imran E.", domain: "Spons" }, { name: "Jigisha E.", domain: "Spons" }, { name: "Kartik E.", domain: "Spons" }, { name: "Laxmi E.", domain: "Spons" },
        // EM (4)
        { name: "Om E.", domain: "EM" }, { name: "Manish E.", domain: "EM" }, { name: "Neelam E.", domain: "EM" }, { name: "Piyush E.", domain: "EM" },
        // Startup Founder (3)
        { name: "Rahul E.", domain: "Startup Founder" }, { name: "Shweta E.", domain: "Startup Founder" }, { name: "Uday E.", domain: "Startup Founder" },
    ],
};

// --- DOMAIN LIST & FRAMER MOTION VARIANTS ---
const DOMAINS = ['Tech', 'Spons', 'PR', 'Video Editing', 'Design', 'Startup Founder', 'EM'];

const socialContainerVariants = {
    hidden: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const socialItemVariants = {
    hidden: { y: 10, opacity: 0, scale: 0.8 },
    visible: { y: 0, opacity: 1, scale: 1 },
};

// --- REUSABLE TEAM CARD COMPONENT (Higher Tier: Glass + Tilt + Glow + Scroll Reveal) ---
const TeamCard = ({ member, tier }) => {
    const isHighTier = ['faculty', 'oc', 'head'].includes(tier);
    const primaryColorClass = tier === 'faculty' ? 'ecell-accent' : 
                             tier === 'oc' ? 'ecell-vibrant-magenta' : 
                             'ecell-primary';

    const cardRef = React.useRef(null);
    const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const tiltX = (centerY - e.clientY) / 10; 
        const tiltY = (e.clientX - centerX) / 10;

        setTilt({ x: tiltX, y: tiltY });
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
        setIsHovered(false);
    }

    const dynamicStyle = isHighTier ? {
        rotateX: tilt.x,
        rotateY: tilt.y,
        y: tilt.x !== 0 || tilt.y !== 0 ? -10 : 0, 
        scale: tilt.x !== 0 || tilt.y !== 0 ? 1.03 : 1, 
        transition: { type: "spring", stiffness: 150, damping: 12, mass: 0.7 },
    } : {};

    const CardWrapper = isHighTier ? motion.div : 'div';

    return (
        <CardWrapper
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={isHighTier ? { perspective: 1000 } : {}}
            animate={isHighTier ? dynamicStyle : {}}
            
            // 🛠️ FIX: CONSOLIDATED INITIAL STATE (Removes duplicate 'initial' warning)
            initial={{ opacity: 0, y: 50, scale: 1, rotateX: 0, rotateY: 0 }} 
            
            // 💡 SCROLL REVEAL PROPS: Now correctly applying the "visible" state
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            
            className={`
                p-6 rounded-xl text-center shadow-lg transition-all duration-300 relative 
                ${isHighTier 
                    ? `group bg-gray-900/50 backdrop-blur-lg border border-white/10 overflow-hidden`
                    : `bg-gray-800/80 border border-white/10`
                }
            `}
        >
            {/* Animated Border Glow */}
            {isHighTier && (
                <div 
                    className={`
                        absolute inset-0 -z-10 rounded-xl transition-all duration-500
                        ${isHovered ? `scale-[1.05] opacity-50 shadow-[0_0_40px_-5px_var(--color-${primaryColorClass})]` : 'opacity-0'}
                    `}
                    style={{ 
                        background: `radial-gradient(circle at center, var(--color-${primaryColorClass}) 0%, transparent 60%)`,
                    }}
                ></div>
            )}

            {/* Image */}
            {member.img && (
                <motion.img 
                    src={member.img} 
                    alt={member.name} 
                    whileHover={{ rotate: [0, 5, -5, 0], scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className={`
                        w-24 h-24 mx-auto mb-4 object-cover rounded-full relative z-20
                        border-4 border-${primaryColorClass} shadow-md
                    `}
                />
            )}
            
            {/* Name and Title/Domain */}
            <h3 className="text-xl font-extrabold text-white relative z-20">{member.name}</h3>
            <p className={`text-sm font-medium mb-3 text-${primaryColorClass} relative z-20`}>
                {member.title || member.domain}
            </p>

            {/* Social Media Links */}
            {member.socials && (
                <motion.div
                    className="flex justify-center gap-4 text-gray-400 mt-4 relative z-20"
                    variants={socialContainerVariants}
                    initial="hidden"
                    animate={isHovered && isHighTier ? "visible" : "hidden"}
                >
                    {member.socials.linkedin && (
                        <motion.a 
                            href={member.socials.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="LinkedIn"
                            variants={socialItemVariants}
                        >
                            <Linkedin className="w-6 h-6 hover:text-ecell-vibrant-magenta transition cursor-pointer" />
                        </motion.a>
                    )}
                    {member.socials.instagram && (
                        <motion.a 
                            href={member.socials.instagram} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Instagram"
                            variants={socialItemVariants}
                        >
                            <Instagram className="w-6 h-6 hover:text-ecell-vibrant-magenta transition cursor-pointer" />
                        </motion.a>
                    )}
                    {member.socials.mail && (
                        <motion.a 
                            href={`mailto:${member.socials.mail}`} 
                            aria-label="Email"
                            variants={socialItemVariants}
                        >
                            <Mail className="w-6 h-6 hover:text-ecell-vibrant-magenta transition cursor-pointer" />
                        </motion.a>
                    )}
                </motion.div>
            )}

            {/* Placeholder for low-tier cards if no socials are present */}
            {member.socials && !isHighTier && (
                <div className="flex justify-center gap-3 text-gray-400 mt-3">
                    {member.socials.linkedin && (<a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5 hover:text-ecell-vibrant-magenta transition" /></a>)}
                    {member.socials.instagram && (<a href={member.socials.instagram} target="_blank" rel="noopener noreferrer"><Instagram className="w-5 h-5 hover:text-ecell-vibrant-magenta transition" /></a>)}
                    {member.socials.mail && (<a href={`mailto:${member.socials.mail}`}><Mail className="w-5 h-5 hover:text-ecell-vibrant-magenta transition" /></a>)}
                </div>
            )}
        </CardWrapper>
    );
};

// --- SECTION HEADER (Scroll Reveal Added) ---
const SectionHeader = ({ title }) => (
    <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true, amount: 0.5 }}
    >
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mt-16 mb-8 tracking-tight">
            {title}
        </h2>
        <div className="w-24 h-1 bg-ecell-primary mx-auto mb-12 rounded-full"></div>
    </motion.div>
);

// --- REUSABLE DOMAIN TAB COMPONENT (No changes) ---
const DomainTab = ({ domain, currentDomain, setDomain }) => (
    <button
        onClick={() => setDomain(domain)}
        className={`
            px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 whitespace-nowrap
            ${currentDomain === domain
                ? 'bg-ecell-vibrant-magenta text-white shadow-lg shadow-ecell-vibrant-magenta/30'
                : 'bg-gray-800/70 text-gray-400 hover:bg-gray-700/70 hover:text-ecell-vibrant-magenta'
            }
        `}
    >
        {domain}
    </button>
);


// --- MAIN TEAMS COMPONENT ---
const Teams = () => {
    const [selectedManagerDomain, setSelectedManagerDomain] = useState('Tech');
    const [selectedExecutiveDomain, setSelectedExecutiveDomain] = useState('Tech');

    const filteredManagers = teamData.managers.filter(
        (member) => member.domain === selectedManagerDomain
    );
    const filteredExecutives = teamData.executives.filter(
        (member) => member.domain === selectedExecutiveDomain
    );
    
    // Staggered container variant for Manager Cards/Executive List
    const listContainerVariants = {
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <div className="min-h-screen bg-ecell-bg relative overflow-hidden">
            
            {/* Glowing Background Blobs */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-40 left-10 h-80 w-80 bg-ecell-primary/40 rounded-full blur-3xl" />
                <div className="absolute top-40 right-0 h-96 w-96 bg-ecell-secondary/30 rounded-full blur-[110px]" />
                <div className="absolute bottom-16 left-1/2 h-72 w-72 -translate-x-1/2 bg-ecell-accent/20 rounded-full blur-3xl" />
            </div>

            <div className="page-content pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Main Heading Reveal */}
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-5xl font-extrabold text-white text-center mb-16"
                >
                    OUR TEAM
                </motion.h1>

                {/* A. FACULTY */}
                <SectionHeader title="Faculty Advisors" />
                <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
                    {teamData.faculties.map((member, index) => (
                        <TeamCard key={index} member={member} tier="faculty" />
                    ))}
                </div>
                
                {/* B. OVERALL COORDINATORS */}
                <SectionHeader title="Overall Coordinators" />
                <div className="flex flex-wrap justify-center gap-10 max-w-2xl mx-auto">
                    {teamData.overallCoordinators.map((member, index) => (
                        <TeamCard key={index} member={member} tier="oc" />
                    ))}
                </div>

                {/* C. HEAD COORDINATORS */}
                <SectionHeader title="Head Coordinators" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {teamData.headCoordinators.map((member, index) => (
                        <TeamCard key={index} member={member} tier="head" />
                    ))}
                </div>

                {/* D. MANAGERS (Domain Tabs & Cards) */}
                <SectionHeader title="Managers" />
                
                {/* Domain Tabs Reveal */}
                <motion.div 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 30 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex justify-center flex-wrap gap-3 mb-10 max-w-4xl mx-auto"
                >
                    {DOMAINS.map((domain) => (
                        <DomainTab 
                            key={domain} 
                            domain={domain} 
                            currentDomain={selectedManagerDomain} 
                            setDomain={setSelectedManagerDomain} 
                        />
                    ))}
                </motion.div>

                {/* Filtered Manager Cards - Wrap the grid for animation */}
                <motion.div 
                    key={selectedManagerDomain} 
                    variants={listContainerVariants}
                    initial="hidden"
                    animate="visible"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto min-h-[250px] transition-all duration-300"
                >
                    {filteredManagers.length > 0 ? (
                        filteredManagers.map((member, index) => (
                            <motion.div 
                                key={member.name}
                                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="p-4 bg-gray-800/70 border border-gray-700/50 rounded-lg text-center shadow-md transition hover:border-ecell-vibrant-orange hover:shadow-xl cursor-default">
                                <p className="font-semibold text-white">{member.name}</p>
                                <p className="text-xs text-gray-400 mt-0.5">{member.domain}</p>
                            </motion.div>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500 py-10">No managers found for the {selectedManagerDomain} domain yet.</p>
                    )}
                </motion.div>
                
                {/* E. EXECUTIVES (Domain Tabs & List) */}
                <SectionHeader title="Executives" />
                
                {/* Domain Tabs Reveal */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 30 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex justify-center flex-wrap gap-3 mb-10 max-w-4xl mx-auto"
                >
                    {DOMAINS.map((domain) => (
                        <DomainTab 
                            key={domain} 
                            domain={domain} 
                            currentDomain={selectedExecutiveDomain} 
                            setDomain={setSelectedExecutiveDomain} 
                        />
                    ))}
                </motion.div>

                {/* Filtered Executive List - Wrap the list for animation */}
                <div className="max-w-4xl mx-auto pb-20 min-h-[150px] transition-all duration-300">
                    <motion.ul 
                        key={selectedExecutiveDomain} 
                        variants={listContainerVariants}
                        initial="hidden"
                        animate="visible"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-3 text-lg"
                    >
                        {filteredExecutives.length > 0 ? (
                            filteredExecutives.map((member, index) => (
                                <motion.li 
                                    key={member.name}
                                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                                    transition={{ duration: 0.2 }}
                                    whileHover={{ color: 'white', x: 5 }}
                                    className="flex items-center text-gray-300 before:content-['•'] before:text-ecell-accent before:text-2xl before:mr-2 cursor-default">
                                    {member.name} 
                                    <span className="text-sm text-gray-500 ml-2">({member.domain})</span>
                                </motion.li>
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-500 py-4">No executives found for the {selectedExecutiveDomain} domain yet.</p>
                        )}
                    </motion.ul>
                </div>
            </div>
        </div>
    );
}

export default Teams;