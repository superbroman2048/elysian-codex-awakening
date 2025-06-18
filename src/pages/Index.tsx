
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';
import { ArrowUp, ArrowDown, Search, Menu, X, Phone, Mail, MapPin, Building, FlaskConical, BookOpen, Dumbbell, Bus, Utensils, Music, Drama, Brush, Mic, Target } from 'lucide-react';

// --- DATA: All content for the school website ---
// You can easily replace this with real content, images, and links.

const FWS_COLORS = {
  red: '#FF0000',
  crimson: '#990000',
  beige: '#F5F5DC',
  offWhite: '#F8F8F8',
  charcoal: '#333333',
};

const navLinks = ["About", "Academics", "Admissions", "Facilities", "Gallery", "Contact"];

const aboutData = {
  story: "Founded in 2012, Fortune World School has been a beacon of modern education in Noida. We are committed to fostering an environment where academic excellence, global vision, and moral integrity are not just ideals, but a way of life.",
  mission: "To nurture inquisitive, resilient, and empathetic young minds who are prepared to navigate the challenges of an ever-changing world with confidence and compassion.",
  vision: "To be a leading educational institution recognized for its innovative teaching methodologies, holistic development, and for creating responsible global citizens.",
  principal: {
    name: "Dr. Anjali Singh",
    title: "Principal, Fortune World School",
    message: "It is with immense pride that I welcome you to our digital home. At FWS, we believe every child is a fountain of potential. Our mission is to provide the spark that ignites their curiosity and fuels their journey of lifelong learning.",
    image: "https://placehold.co/400x400/990000/FFFFFF?text=Principal"
  },
  stats: [
    { value: 100, label: "% Board Results" },
    { value: 4, label: "Acre Green Campus" },
    { value: 25, label: "+ Activities" }
  ]
};

const academicsData = {
    streams: [
        { name: "Science", description: "Exploring the frontiers of physics, chemistry, biology, and computer science with state-of-the-art labs." },
        { name: "Commerce", description: "Building a strong foundation in economics, accountancy, and business studies for future entrepreneurs." },
        { name: "Humanities", description: "Delving into history, political science, and the arts to foster critical thinking and cultural understanding." }
    ],
    achievements: ["Students Scored 100 in Math & CS", "National Robotics Olympiad Winners", "Top Ranks in NTSE"],
    downloads: ["Syllabus", "Exam Pattern", "CBSE Guidelines"]
};

const admissionsData = {
    steps: [
        { title: "Enquiry", description: "Submit the online form or visit our campus." },
        { title: "Campus Tour", description: "Experience the FWS environment firsthand." },
        { title: "Registration", description: "Complete the registration process with necessary documents." },
        { title: "Interaction & Test", description: "A friendly interaction for students and parents." },
        { title: "Admission Confirmation", description: "Receive the admission offer and complete the formalities." }
    ],
    feeStructure: [
        { grade: "Pre-Nursery", fee: "₹1,20,000" },
        { grade: "Nursery - UKG", fee: "₹1,40,000" },
        { grade: "Class I - V", fee: "₹1,60,000" },
        { grade: "Class VI - VIII", fee: "₹1,80,000" },
        { grade: "Class IX - X", fee: "₹2,00,000" },
        { grade: "Class XI - XII", fee: "₹2,20,000" },
    ],
    keyDates: {
        open: "Admissions Open: November 1st, 2024",
        close: "Admissions Close: March 31st, 2025"
    }
};

const facilitiesData = [
  { name: "Smart Classrooms", icon: <Building size={48} />, image: "https://placehold.co/800x600/333333/F5F5DC?text=Smart+Classroom" },
  { name: "Science Labs", icon: <FlaskConical size={48} />, image: "https://placehold.co/800x600/333333/F5F5DC?text=Science+Lab" },
  { name: "Library", icon: <BookOpen size={48} />, image: "https://placehold.co/800x600/333333/F5F5DC?text=Library" },
  { name: "Sports Complex", icon: <Dumbbell size={48} />, image: "https://placehold.co/800x600/333333/F5F5DC?text=Sports+Complex" },
  { name: "School Buses", icon: <Bus size={48} />, image: "https://placehold.co/800x600/333333/F5F5DC?text=School+Bus" },
  { name: "Cafeteria", icon: <Utensils size={48} />, image: "https://placehold.co/800x600/333333/F5F5DC?text=Cafeteria" },
];

const coCurricularData = [
    { name: 'Music', icon: <Music />, image: 'https://placehold.co/400x300/990000/FFFFFF?text=Music+Event' },
    { name: 'Theatre', icon: <Drama />, image: 'https://placehold.co/400x300/990000/FFFFFF?text=School+Play' },
    { name: 'Art', icon: <Brush />, image: 'https://placehold.co/400x300/990000/FFFFFF?text=Art+Exhibition' },
    { name: 'Debate', icon: <Mic />, image: 'https://placehold.co/400x300/990000/FFFFFF?text=Debate+Club' },
    { name: 'Shooting', icon: <Target />, image: 'https://placehold.co/400x300/990000/FFFFFF?text=Shooting+Range' },
];

const galleryData = {
    "Campus Life": Array(6).fill(0).map((_, i) => `https://placehold.co/600x400/E8E8E8/333?text=Campus+${i+1}`),
    "Annual Day": Array(6).fill(0).map((_, i) => `https://placehold.co/600x400/D8C8B8/333?text=Annual+Day+${i+1}`),
    "Field Trips": Array(6).fill(0).map((_, i) => `https://placehold.co/600x400/C8D8E8/333?text=Field+Trip+${i+1}`),
    "Sports Day": Array(6).fill(0).map((_, i) => `https://placehold.co/600x400/D8E8C8/333?text=Sports+Day+${i+1}`),
};

const testimonialsData = [
    { quote: "Fortune World School has been instrumental in the holistic development of my child. The teachers are incredibly supportive.", name: "Priya Sharma", role: "Parent, Class 8", image: "https://placehold.co/100x100/CCCCCC/333?text=P" },
    { quote: "The four years I spent at FWS were the best of my life. It gave me the confidence to pursue my dreams.", name: "Rohan Verma", role: "Alumnus, Batch of 2020", image: "https://placehold.co/100x100/CCCCCC/333?text=R" },
    { quote: "I love my school! We learn so much, and we get to play and do so many fun activities.", name: "Aisha Khan", role: "Student, Class 5", image: "https://placehold.co/100x100/CCCCCC/333?text=A" },
];

// --- Animation Variants for Framer Motion ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1], // Fixed: use array instead of string
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};


// --- Reusable Components ---
const Section = ({ id, children, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.section
            id={id}
            ref={ref}
            className={`py-20 md:py-32 ${className}`}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={sectionVariants}
        >
            <div className="container mx-auto px-6 lg:px-8">
                {children}
            </div>
        </motion.section>
    );
};

const SectionTitle = ({ children }) => (
    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold font-poppins text-center text-charcoal mb-4">
        {children}
    </motion.h2>
);

const SectionSubtitle = ({ children }) => (
    <motion.p variants={itemVariants} className="text-lg text-gray-600 text-center font-nunito max-w-3xl mx-auto mb-16">
        {children}
    </motion.p>
);

// --- Main App Sections ---

const StickyTopBanner = () => (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white text-center py-2 text-sm font-nunito shadow-lg">
        This website was created by Atharv Mishra from Class 12 at an AI Summer Camp by Times of India. This website is not the official website of the school.
    </div>
);

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className="fixed top-10 left-0 right-0 z-40 transition-all duration-300"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }} // Fixed: use array
        >
            <div className={`container mx-auto px-4 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
                <div className={`flex justify-between items-center bg-white/80 backdrop-blur-lg rounded-xl shadow-md transition-all duration-300 ${scrolled ? 'p-3' : 'p-5'}`}>
                    <div className="font-poppins text-2xl font-bold text-red-600">
                      {/* USER: Replace with your logo SVG or Image */}
                      Fortune World School
                    </div>
                    <nav className="hidden md:flex items-center gap-6 font-semibold font-nunito">
                        {navLinks.map(link => (
                            <a key={link} href={`#${link.toLowerCase()}`} className="text-charcoal hover:text-red-600 transition-colors">{link}</a>
                        ))}
                    </nav>
                    <button className="md:hidden p-2 rounded-md hover:bg-gray-200">
                        <Menu className="text-charcoal" />
                    </button>
                </div>
            </div>
        </motion.header>
    );
};


const Hero = () => {
    const headline = "Empowering Young Minds Since 2012";

    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: { delay: 0.3, staggerChildren: 0.06 },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                type: 'spring', 
                damping: 12, 
                stiffness: 100 
            } 
        },
    };

    return (
        <section id="home" className="relative flex items-center justify-center min-h-screen bg-beige overflow-hidden pt-20">
             {/* USER: Replace this div with a background video/image slideshow component later */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://placehold.co/1920x1080/F5F5DC/333333?text=FWS+Campus+View')"}}>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>
            
            <div className="relative z-10 text-center text-white">
                <motion.h1
                    className="font-poppins text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                >
                    {headline.split(" ").map((word, index) => (
                        <motion.span key={index} className="inline-block" variants={letter}>
                            {word}&nbsp;
                        </motion.span>
                    ))}
                </motion.h1>
                <motion.p 
                    className="font-nunito text-xl md:text-2xl mt-6 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.8 }}
                >
                    Academic Excellence, Global Vision, Moral Integrity.
                </motion.p>
                <motion.a
                    href="#about"
                    className="mt-12 inline-block px-8 py-4 bg-red-600 text-white font-bold font-poppins rounded-lg text-lg shadow-lg shadow-red-600/30"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.5, type: 'spring', stiffness: 150 }}
                    whileHover={{ scale: 1.05, boxShadow: '0px 0px 30px rgba(255, 0, 0, 0.6)' }}
                    whileTap={{ scale: 0.95 }}
                >
                    Explore Our Journey
                </motion.a>
            </div>
            <motion.div 
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <ArrowDown className="text-white h-8 w-8 animate-bounce" />
            </motion.div>
        </section>
    );
};

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const Counter = ({ value, label }) => {
        const [displayValue, setDisplayValue] = useState(0);
        useEffect(() => {
            if (isInView) {
                // Fixed: use animate directly instead of motion.animate
                const controls = animate(0, value, {
                    duration: 2,
                    ease: [0.4, 0, 0.2, 1], // Fixed: use array
                    onUpdate: (latest) => setDisplayValue(Math.round(latest))
                });
                return () => controls.stop();
            }
        }, [isInView, value]);
        return (
            <div className="text-center">
                <p className="text-5xl font-bold font-poppins text-red-600">{displayValue}{label.startsWith('%') ? '%' : '+'}</p>
                <p className="text-lg font-nunito text-gray-600 mt-2">{label.replace('%', '')}</p>
            </div>
        );
    };

    return (
        <Section id="about" className="bg-white">
            <SectionTitle>The Fortune Legacy</SectionTitle>
            <SectionSubtitle>Crafting success stories since 2012.</SectionSubtitle>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div variants={itemVariants}>
                    <img src={aboutData.principal.image} alt="Principal" className="rounded-xl shadow-2xl w-full" />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <h3 className="font-poppins text-3xl font-bold text-charcoal mb-4">A Message from the Principal</h3>
                    <p className="font-nunito text-gray-700 mb-6 italic">"{aboutData.principal.message}"</p>
                    <p className="font-poppins font-semibold text-charcoal">{aboutData.principal.name}</p>
                    <p className="font-nunito text-gray-600">{aboutData.principal.title}</p>
                </motion.div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-24 text-center">
                <motion.div variants={itemVariants} className="bg-beige p-8 rounded-xl shadow-lg">
                    <h4 className="font-poppins text-2xl font-bold text-charcoal mb-3">Our Story</h4>
                    <p className="font-nunito text-gray-700">{aboutData.story}</p>
                </motion.div>
                <motion.div variants={itemVariants} className="bg-beige p-8 rounded-xl shadow-lg">
                    <h4 className="font-poppins text-2xl font-bold text-charcoal mb-3">Our Mission</h4>
                    <p className="font-nunito text-gray-700">{aboutData.mission}</p>
                </motion.div>
                <motion.div variants={itemVariants} className="bg-beige p-8 rounded-xl shadow-lg">
                    <h4 className="font-poppins text-2xl font-bold text-charcoal mb-3">Our Vision</h4>
                    <p className="font-nunito text-gray-700">{aboutData.vision}</p>
                </motion.div>
            </div>

            <div ref={ref} className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                {aboutData.stats.map(stat => (
                    <motion.div key={stat.label} variants={itemVariants}>
                        <Counter value={stat.value} label={stat.label} />
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

const Academics = () => (
    <Section id="academics" className="bg-beige">
        <SectionTitle>Academics</SectionTitle>
        <SectionSubtitle>A curriculum designed for inquiry, innovation, and intellectual growth.</SectionSubtitle>
        <div className="grid md:grid-cols-3 gap-8">
            {academicsData.streams.map(stream => (
                <motion.div key={stream.name} variants={itemVariants} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                    <h3 className="font-poppins text-2xl font-bold text-red-600 mb-4">{stream.name}</h3>
                    <p className="font-nunito text-gray-700">{stream.description}</p>
                </motion.div>
            ))}
        </div>
        <div className="text-center mt-16">
            <div className="relative inline-block w-full max-w-4xl overflow-hidden h-12 bg-white rounded-lg shadow-inner">
                <motion.div 
                    className="absolute whitespace-nowrap h-full flex items-center"
                    animate={{ x: ['0%', '-100%'] }}
                    transition={{ ease: 'linear', duration: 15, repeat: Infinity }}
                >
                    {academicsData.achievements.concat(academicsData.achievements).map((ach, i) => (
                        <span key={i} className="font-semibold font-poppins text-charcoal mx-8 text-lg">{ach}</span>
                    ))}
                </motion.div>
            </div>
        </div>
        <motion.div variants={itemVariants} className="flex justify-center gap-4 mt-12">
            {academicsData.downloads.map(link => (
                 <a key={link} href="#" className="px-6 py-3 bg-red-600 text-white font-bold font-poppins rounded-lg shadow-md hover:bg-red-700 transition-colors">
                    {link}
                </a>
            ))}
        </motion.div>
    </Section>
);

const Admissions = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <Section id="admissions" className="bg-white">
            <SectionTitle>Admissions</SectionTitle>
            <SectionSubtitle>Join the Fortune World School family. A simple and transparent process awaits.</SectionSubtitle>
            
            <div className="grid lg:grid-cols-2 gap-16">
                <div>
                    <h3 className="font-poppins text-3xl font-bold text-charcoal mb-8">Your Path to FWS</h3>
                    <div ref={ref} className="relative pl-8">
                        {/* The connecting line */}
                        <motion.div 
                          className="absolute top-0 bottom-0 left-[30px] w-0.5 bg-red-200"
                          initial={{ height: 0 }}
                          animate={{ height: isInView ? '100%' : 0 }}
                          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }} // Fixed: use array
                        />
                        {admissionsData.steps.map((step, index) => (
                            <motion.div key={index} className="relative flex items-start mb-8" custom={index} variants={itemVariants}>
                                <div className="absolute left-0 top-0 transform -translate-x-1/2 flex items-center justify-center bg-red-600 text-white w-16 h-16 rounded-full font-bold text-2xl font-poppins shadow-lg">
                                    {index + 1}
                                </div>
                                <div className="ml-16 pl-8">
                                    <h4 className="font-poppins font-bold text-xl text-charcoal">{step.title}</h4>
                                    <p className="font-nunito text-gray-600">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div>
                    <motion.div variants={itemVariants} className="bg-beige p-8 rounded-xl shadow-lg mb-8">
                        <h3 className="font-poppins text-2xl font-bold text-charcoal mb-4">Key Dates</h3>
                        <p className="font-nunito text-lg text-gray-800">{admissionsData.keyDates.open}</p>
                        <p className="font-nunito text-lg text-gray-800">{admissionsData.keyDates.close}</p>
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="bg-beige p-8 rounded-xl shadow-lg">
                        <h3 className="font-poppins text-2xl font-bold text-charcoal mb-4">Fee Structure</h3>
                        <table className="w-full text-left font-nunito">
                            <tbody>
                                {admissionsData.feeStructure.map(item => (
                                    <tr key={item.grade} className="border-b border-gray-300">
                                        <td className="py-2 font-semibold">{item.grade}</td>
                                        <td className="py-2 text-right">{item.fee}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                     <motion.div variants={itemVariants} className="text-center mt-8">
                        <a href="#" className="w-full block px-8 py-4 bg-red-600 text-white font-bold font-poppins rounded-lg text-lg shadow-lg hover:bg-red-700 transition-colors">
                            Apply Now
                        </a>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

const Facilities = () => {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });

    return(
        <Section id="facilities" className="bg-beige">
            <SectionTitle>World-Class Facilities</SectionTitle>
            <SectionSubtitle>An environment built to inspire curiosity, creativity, and collaboration.</SectionSubtitle>
            
            <div ref={ref} className="flex gap-8 overflow-x-auto pb-8" style={{ cursor: 'grab' }}>
                {facilitiesData.map((facility, index) => (
                    <motion.div 
                        key={facility.name} 
                        className="relative flex-shrink-0 w-80 h-96 rounded-2xl shadow-xl overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src={facility.image} alt={facility.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                            <div className="text-white text-3xl mb-2">{facility.icon}</div>
                            <h3 className="text-white text-2xl font-poppins font-bold">{facility.name}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};


const CoCurricular = () => (
    <Section id="cocurricular" className="bg-white">
        <SectionTitle>Co-Curricular & Sports</SectionTitle>
        <SectionSubtitle>Nurturing talents beyond academics. Hover or tap a card to see more.</SectionSubtitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {coCurricularData.map((activity, i) => (
                <motion.div 
                    key={activity.name}
                    className="card-container" 
                    variants={itemVariants}
                    custom={i}
                >
                    <div className="card-inner">
                        {/* Card Front */}
                        <div className="card-face card-front">
                            <div className="text-6xl text-red-600">{activity.icon}</div>
                            <h3 className="mt-4 font-poppins text-2xl font-bold text-charcoal">{activity.name}</h3>
                        </div>
                        {/* Card Back */}
                        <div className="card-face card-back">
                            <img src={activity.image} alt={activity.name} className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4">
                                <p className="text-white font-poppins text-2xl font-bold text-center">{activity.name}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </Section>
);

const Gallery = () => {
    const [activeTab, setActiveTab] = useState(Object.keys(galleryData)[0]);

    return (
        <Section id="gallery" className="bg-beige">
            <SectionTitle>Gallery</SectionTitle>
            <SectionSubtitle>A glimpse into the vibrant life at Fortune World School.</SectionSubtitle>
            
            <motion.div variants={itemVariants} className="flex justify-center flex-wrap gap-4 mb-12">
                {Object.keys(galleryData).map(tab => (
                    <button 
                        key={tab} 
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 font-poppins font-semibold rounded-full transition-all duration-300 ${activeTab === tab ? 'bg-red-600 text-white shadow-lg' : 'bg-white text-charcoal hover:bg-gray-200'}`}
                    >
                        {tab}
                    </button>
                ))}
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryData[activeTab].map((src, index) => (
                    <motion.div
                        key={src}
                        className="overflow-hidden rounded-xl shadow-lg"
                        layout // Animate layout changes when tab switches
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                        <img src={src} alt={`${activeTab} image ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};


const Testimonials = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(prev => (prev + 1) % testimonialsData.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(timer);
    }, []);

    return(
        <Section id="testimonials" className="bg-white">
            <SectionTitle>What Our Family Says</SectionTitle>
            <SectionSubtitle>Voices from our community that inspire us every day.</SectionSubtitle>

            <motion.div 
                className="relative max-w-4xl mx-auto h-80 rounded-xl bg-beige p-8 md:p-16 shadow-2xl overflow-hidden"
                variants={itemVariants}
            >
                {testimonialsData.map((testimonial, i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-0 p-8 md:p-16 flex flex-col justify-center items-center text-center"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: i === index ? 1 : 0, x: i === index ? 0 : (i < index ? -100 : 100) }}
                        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    >
                        <p className="font-nunito text-xl md:text-2xl italic text-gray-700">"{testimonial.quote}"</p>
                        <div className="flex items-center mt-6">
                            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-red-600"/>
                            <div>
                                <p className="font-poppins font-bold text-lg text-charcoal">{testimonial.name}</p>
                                <p className="font-nunito text-gray-600">{testimonial.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {testimonialsData.map((_, i) => (
                        <button key={i} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full transition-colors ${i === index ? 'bg-red-600' : 'bg-gray-300'}`}></button>
                    ))}
                </div>
            </motion.div>
        </Section>
    )
}

const Contact = () => (
    <Section id="contact" className="bg-beige">
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionSubtitle>We are here to answer your questions. Reach out to us and we'll respond as soon as we can.</SectionSubtitle>

        <div className="grid lg:grid-cols-2 gap-16">
            <motion.div variants={itemVariants}>
                <h3 className="font-poppins text-3xl font-bold text-charcoal mb-8">Contact Details</h3>
                <div className="space-y-6 font-nunito text-lg">
                    <p className="flex items-start gap-4"><MapPin className="text-red-600 mt-1 flex-shrink-0" /><span>A-2, Sector 110, Noida, Uttar Pradesh 201304</span></p>
                    <p className="flex items-center gap-4"><Phone className="text-red-600" /><span>+91 98765 43210</span></p>
                    <p className="flex items-center gap-4"><Mail className="text-red-600" /><span>info@fortuneworldschool.com</span></p>
                </div>
                <div className="mt-8">
                     {/* USER: Replace with a real, custom-styled Google Map embed */}
                    <img src="https://placehold.co/600x400/CCCCCC/FFFFFF?text=Google+Map+Placeholder" alt="Map" className="rounded-xl shadow-lg w-full"/>
                </div>
            </motion.div>

            <motion.form variants={itemVariants} className="space-y-6">
                <div>
                    <label htmlFor="name" className="font-poppins font-semibold text-charcoal">Your Name</label>
                    <input type="text" id="name" className="w-full mt-2 p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"/>
                </div>
                 <div>
                    <label htmlFor="class" className="font-poppins font-semibold text-charcoal">Class Applying For</label>
                    <input type="text" id="class" className="w-full mt-2 p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"/>
                </div>
                <div>
                    <label htmlFor="mobile" className="font-poppins font-semibold text-charcoal">Mobile Number</label>
                    <input type="tel" id="mobile" className="w-full mt-2 p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"/>
                </div>
                <div>
                    <label htmlFor="message" className="font-poppins font-semibold text-charcoal">Your Message</label>
                    <textarea id="message" rows={5} className="w-full mt-2 p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full px-8 py-4 bg-red-600 text-white font-bold font-poppins rounded-lg text-lg shadow-lg hover:bg-red-700 transition-colors">
                        Send Message
                    </button>
                </div>
            </motion.form>
        </div>
    </Section>
);

const Footer = () => (
    <footer className="bg-charcoal text-white pt-16 pb-8">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-poppins text-xl font-bold mb-4">Fortune World School</h3>
                    <p className="font-nunito text-gray-400">Committed to nurturing the leaders of tomorrow through holistic and innovative education.</p>
                </div>
                <div>
                     <h3 className="font-poppins text-xl font-bold mb-4">Quick Links</h3>
                     <ul className="space-y-2 font-nunito">
                        {["About", "Admissions", "Careers", "Contact"].map(link => (
                            <li key={link}><a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a></li>
                        ))}
                     </ul>
                </div>
                <div>
                    <h3 className="font-poppins text-xl font-bold mb-4">Connect With Us</h3>
                    {/* USER: Replace # with your actual social media links */}
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">F</a>
                        <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">I</a>
                        <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">Y</a>
                    </div>
                     <p className="font-nunito text-gray-400 mt-4 text-sm">AI Summer Camp Project<br/>This website was built as part of the TOI Summer Camp for Students</p>
                </div>
            </div>
            <div className="mt-16 border-t border-gray-700 pt-8 text-center text-gray-500 font-nunito">
                <p>&copy; 2024 Fortune World School. All Rights Reserved. Conceptual design by Atharv Mishra.</p>
            </div>
        </div>
    </footer>
);


// --- The Main App Component ---
export default function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showButton && window.pageYOffset > 400) {
        setShowButton(true);
      } else if (showButton && window.pageYOffset <= 400) {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showButton]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      <StickyTopBanner />
      <Header />
      <main>
        <Hero />
        <About />
        <Academics />
        <Admissions />
        <Facilities />
        <CoCurricular />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      {showButton && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-8 right-8 w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-all scale-100 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp size={28} />
        </button>
      )}
    </div>
  );
}
