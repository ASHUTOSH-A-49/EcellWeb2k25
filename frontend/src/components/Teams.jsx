import React, { useState, useRef, useEffect } from 'react';
import { Mail, Linkedin, Instagram, Award, Crown, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import teamData from '../assets/Data/teamsdata.json';

// These must match the 'domain' keys in your JSON exactly
const DOMAINS = ['Tech', 'Spons', 'PR', 'Video Editing', 'Design', 'Startup Founder', 'EM', 'Documentation', 'Content Creation'];

// --- TEAM CARD COMPONENT ---
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
            className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl w-full max-w-[320px] mx-auto"
        >
            <motion.div
                initial={{ opacity: 0.6 }}
                animate={{ opacity: [0.6, 0.75, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-tr from-ecell-mine/20 via-transparent to-purple-500/10"
            />

            <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-ecell-mine text-black text-xs font-semibold flex items-center gap-1 shadow-lg">
                <BadgeIcon className="w-3 h-3" />
                {badge.text}
            </div>

            <div className="relative h-95 overflow-hidden bg-gray-800">
                <motion.img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            <div className="relative p-6 text-center z-10">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-ecell-mine text-sm font-medium tracking-wide">
                    {member.title || member.domain}
                </p>

                {member.socials && (
                    <div className="flex justify-center gap-5 mt-4 text-gray-400">
                        {member.socials.linkedin && member.socials.linkedin !== "#" && (
                            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-5 h-5 hover:text-ecell-mine cursor-pointer transition" />
                            </a>
                        )}
                        {member.socials.instagram && member.socials.instagram !== "#" && (
                            <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-5 h-5 hover:text-ecell-mine cursor-pointer transition" />
                            </a>
                        )}
                        {member.socials.mail && member.socials.mail !== "#" && (
                            <a href={`mailto:${member.socials.mail}`}>
                                <Mail className="w-5 h-5 hover:text-ecell-mine cursor-pointer transition" />
                            </a>
                        )}
                    </div>
                )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-ecell-mine to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
        </motion.div>
    );
};

const SectionHeader = ({ title }) => (
    <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true, amount: 0.5 }}
    >
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mt-20 mb-6 tracking-tight">
            {title}
        </h2>
        <div className="w-24 h-1 bg-ecell-primary mx-auto mb-12 rounded-full"></div>
    </motion.div>
);

const DomainTab = ({ domain, currentDomain, setDomain }) => (
    <button
        onClick={() => setDomain(domain)}
        className={`px-5 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 whitespace-nowrap border ${
            currentDomain === domain
                ? 'bg-ecell-vibrant-magenta text-white border-ecell-vibrant-magenta shadow-lg shadow-ecell-vibrant-magenta/30'
                : 'bg-gray-800/70 text-gray-400 border-transparent hover:bg-gray-700/70 hover:text-white'
        }`}
    >
        {domain}
    </button>
);

const Teams = () => {
    const [selectedManagerDomain, setSelectedManagerDomain] = useState('Tech');
    const [selectedExecutiveDomain, setSelectedExecutiveDomain] = useState('Tech');

    // FIXED: Strict equality check to match JSON exactly
    const filteredManagers = (teamData.managers || []).filter(m => 
        m.domain === selectedManagerDomain
    );

    const filteredExecutives = (teamData.executives || []).filter(e => 
        e.domain === selectedExecutiveDomain
    );

    const listContainerVariants = {
        visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
        hidden: { opacity: 0 }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-ecell-bg relative overflow-hidden pb-20">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-40 left-10 h-80 w-80 bg-ecell-primary/30 rounded-full blur-3xl opacity-50" />
                <div className="absolute top-40 right-0 h-96 w-96 bg-ecell-secondary/20 rounded-full blur-[110px]" />
                <div className="absolute bottom-20 left-1/2 h-72 w-72 -translate-x-1/2 bg-ecell-accent/15 rounded-full blur-3xl" />
            </div>

            <div className="pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    viewport={{ once: true }}
                    className="text-6xl font-black text-white text-center mb-20 tracking-tighter"
                >
                    MEET THE TEAM
                </motion.h1>

                <SectionHeader title="Faculty Advisors" />
                <div className="flex flex-wrap justify-center gap-10">
                    {teamData.faculties?.map((member, i) => (
                        <TeamCard key={`fac-${i}`} member={member} tier="faculty" />
                    ))}
                </div>

                <SectionHeader title="Overall Coordinators" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {teamData.overallCoordinators?.map((member, i) => (
                        <TeamCard key={`oc-${i}`} member={member} tier="oc" />
                    ))}
                </div>

                <SectionHeader title="Head Coordinators" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {teamData.headCoordinators?.map((member, i) => (
                        <TeamCard key={`hc-${i}`} member={member} tier="head" />
                    ))}
                </div>

                {/* MANAGERS SECTION */}
                <SectionHeader title="Managers" />
                <div className="flex justify-center flex-wrap gap-3 mb-12">
                    {DOMAINS.map(d => (
                        <DomainTab key={`tab-m-${d}`} domain={d} currentDomain={selectedManagerDomain} setDomain={setSelectedManagerDomain} />
                    ))}
                </div>
                
                <motion.div 
                    key={`mgr-grid-${selectedManagerDomain}`}
                    variants={listContainerVariants}
                    initial="hidden" 
                    animate="visible"
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
                >
                    {filteredManagers.length > 0 ? (
                        filteredManagers.map((m, idx) => (
                            <motion.div 
                                key={`mgr-${idx}`}
                                variants={itemVariants}
                                className="p-5 bg-gray-900/60 border border-white/5 rounded-xl text-center hover:border-ecell-mine/50 transition duration-300"
                            >
                                <p className="font-bold text-white">{m.name}</p>
                                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{m.domain}</p>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-gray-500 col-span-full text-center">No managers found for this domain.</p>
                    )}
                </motion.div>

                {/* EXECUTIVES SECTION */}
                <SectionHeader title="Executives" />
                <div className="flex justify-center flex-wrap gap-3 mb-12">
                    {DOMAINS.map(d => (
                        <DomainTab key={`tab-e-${d}`} domain={d} currentDomain={selectedExecutiveDomain} setDomain={setSelectedExecutiveDomain} />
                    ))}
                </div>
                
                <motion.div 
                    key={`exec-grid-${selectedExecutiveDomain}`}
                    variants={listContainerVariants}
                    initial="hidden" 
                    animate="visible"
                    className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
                >
                    {filteredExecutives.length > 0 ? (
                        filteredExecutives.map((e, idx) => (
                            <motion.div 
                                key={`exec-${idx}`}
                                variants={itemVariants}
                                className="flex items-center text-gray-300 hover:text-white transition-colors"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-ecell-accent mr-3 shadow-[0_0_8px_var(--color-ecell-accent)]" />
                                <span className="font-medium">{e.name}</span>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-gray-500 col-span-full text-center">No executives found for this domain.</p>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

export default Teams;