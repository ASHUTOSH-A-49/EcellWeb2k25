import React, { useState } from 'react';
import { Mail, Linkedin, Instagram , Award, Crown, Users} from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';

// --- DUMMY DATA (Expanded for Visualization) ---
const teamData = {
    faculties: [
        { name: "Dr. A. B. C. Rao", title: "Faculty Head", img: "https://i.pravatar.cc/150?img=68", socials: { linkedin: "#", mail: "#" } },
        { name: "Dr. D. E. F. Singh", title: "Faculty Coordinator", img: "https://i.pravatar.cc/150?img=69", socials: { linkedin: "#", mail: "#" } },
    ],
    overallCoordinators: [
        { name: "Abhishek Kumar Jha", title: "Overall Coordinator", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850563/Abhishek_Jha_oc_sppo3y.png", socials: { linkedin: "#", instagram: "#" } },
        { name: "Abhishek Yadav", title: "Overall Coordinator", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850012/Abhishek_Yadav_PR_Domain_dypfsh.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Anshika Bhardwaj", title: "Overall Coordinator", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850016/Anshika_Bhardwaj_OC_kikhzl.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Ayush Bhardwaj", title: "Overall Coordinator", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850022/Ayush_Bhardwaj__OC_etgluy.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Ritik Pathak", title: "Overall Coordinator", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850045/Ritik_Pathak_OC_gkzjms.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Shashank Sharma", title: "Overall Coordinator", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850061/Shashank_Sharma__OC_nob4lj.jpg", socials: { linkedin: "#", instagram: "#" } },
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
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / 30;
    const y = (e.clientX - rect.left - rect.width / 2) / 30;
    setTilt({ x, y });
  };

  const onLeave = () => setTilt({ x: 0, y: 0 });

  const badge =
    tier === "faculty"
      ? { icon: Award, text: "Faculty" }
      : tier === "oc"
      ? { icon: Crown, text: "OC" }
      : { icon: Users, text: "Head" };

  const BadgeIcon = badge.icon;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      animate={{
        rotateX: -tilt.x,
        rotateY: tilt.y,
        scale: tilt.x || tilt.y ? 1.04 : 1,
      }}
      style={{ perspective: 1000 }}
      className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl"
    >
      {/* Animated Gradient Overlay (idle animation) */}
      <motion.div
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 0.75, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-tr from-ecell-mine/20 via-transparent to-purple-500/10"
      />

      {/* Badge */}
      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-ecell-mine text-black text-xs font-semibold flex items-center gap-1">
        <BadgeIcon className="w-3 h-3" />
        {badge.text}
      </div>

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-6 text-center z-10">
        <h3 className="text-xl font-bold text-white">{member.name}</h3>
        <p className="text-ecell-mine text-sm font-medium">
          {member.title || member.domain}
        </p>

        {/* Socials */}
        {member.socials && (
          <div className="flex justify-center gap-4 mt-4">
            {member.socials.linkedin && (
              <Linkedin className="w-5 h-5 hover:text-ecell-mine cursor-pointer transition" />
            )}
            {member.socials.instagram && (
              <Instagram className="w-5 h-5 hover:text-ecell-mine cursor-pointer transition" />
            )}
            {member.socials.mail && (
              <Mail className="w-5 h-5 hover:text-ecell-mine cursor-pointer transition" />
            )}
          </div>
        )}
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-ecell-mine to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
    </motion.div>
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

