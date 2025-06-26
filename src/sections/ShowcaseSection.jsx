import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    image: "/images/project1.png",
    position: "Surplus Material Handler",
    company: "UCF(University of Central Florida)",
    duration: "Jun 2025 - Present",
    skills: ["Supply Chain Management", "Problem Solving", "Data Entry", "Logistics Management"],
    description:
      "As a Surplus Property Processor at UCF, I manage and record surplus university assets, ensuring accurate inventory through detailed data entry and organization. I coordinate logistics for asset movement and storage, identify process improvement opportunities, and resolve logistical issues while adhering to university policies. This role has sharpened my attention to detail, problem-solving skills, and understanding of institutional asset management, aligning well with my Computer Science studies.",
    bg: "bg-[#000000]",
    text: "text-white",
    subtext: "text-gray-400",
    desc: "text-blue-200",
    badge: "bg-gray-900 text-gray-100",
  },
  {
    image: "/images/project2.png",
    position: "HR(Human Resources)",
    company: "SRM CSED",
    duration: "Sep 2021 - Sep 2022",
    skills: ["Organizational Communication", "Hosting events"],
    description:
      "At CSED, I led recruitment, onboarding, and employee relations during a major expansion, adding 25+ members and growing the team by 40%. I organized eight programs that boosted team efficiency by 30% and conducted training sessions that enhanced collaboration and reduced weekly delays by seven hours. This role strengthened my leadership, time management, and administrative skills while driving continuous improvement and team development.",
    bg: "bg-[#000000]",
    text: "text-white",
    subtext: "text-gray-400",
    desc: "text-blue-200",
    badge: "bg-gray-900 text-gray-100",
  },
  {
    image: "/images/project3.png",
    position: "Robotic Engineer",
    company: "Beeclust Robotics Club",
    duration: "Nov 2020 - Nov 2021",
    skills: ["Ubuntu", "Robot Operating System (ROS)", "Linux"],
    description:
      "I developed and tested automated multi-robot workflows in simulated environments, improving task efficiency by 25%. I designed communication and navigation algorithms to enhance coordination and increase system reliability by 20%. By integrating AI, sensor data, and machine learning models, I boosted automation precision by 15%, demonstrating strong problem-solving and leadership in robotic process automation.",
    bg: "bg-[#000000]",
    text: "text-white",
    subtext: "text-gray-400",
    desc: "text-blue-200",
    badge: "bg-gray-900 text-gray-100",
  },
];

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const expRefs = [useRef(null), useRef(null), useRef(null)];

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
    expRefs.forEach((ref, idx) => {
      gsap.fromTo(
        ref.current,
        { y: 40, opacity: 0, scale: 0.95, boxShadow: '0 0 0 0 rgba(0,0,0,0)' },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)',
          duration: 1.1,
          ease: 'power2.out',
          delay: 0.35 * (idx + 1),
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="experience" ref={sectionRef} className="app-showcase">
      <div className="w-full">  
        <div className="showcaselayout">
          {/* Main Experience (left) */}
          <div ref={expRefs[0]} className={`first-project-wrapper ${experiences[0].bg} rounded-xl shadow-lg formal-card`}>
            <div className="image-wrapper">
              <img src={experiences[0].image} alt={experiences[0].company} />
            </div>
            <div className={`text-content text-left ${experiences[0].text}`}> 
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {experiences[0].position}
              </h2>
              <p className={`text-lg mb-1 font-semibold ${experiences[0].subtext}`}>{experiences[0].company}</p>
              <p className="text-xs text-gray-500 mb-3">{experiences[0].duration}</p>
              <p className={`mb-3 ${experiences[0].desc}`}>{experiences[0].description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {experiences[0].skills.map((skill, i) => (
                  <span key={i} className={`px-2 py-1 rounded text-xs ${experiences[0].badge}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Two stacked experiences (right) */}
          <div className="project-list-wrapper overflow-hidden">
            {[1, 2].map((idx) => (
              <div
                className={`project ${experiences[idx].bg} rounded-xl mb-8 shadow-lg formal-card`}
                ref={expRefs[idx]}
                key={idx}
              >
                <div className="image-wrapper">
                  <img src={experiences[idx].image} alt={experiences[idx].company} />
                </div>
                <div className={`p-4 text-left ${experiences[idx].text}`}>
                  <h2 className="text-xl font-bold mb-1">{experiences[idx].position}</h2>
                  <p className={`text-md font-semibold mb-1 ${experiences[idx].subtext}`}>{experiences[idx].company}</p>
                  <p className="text-xs text-gray-400 mb-2">{experiences[idx].duration}</p>
                  <p className={`mb-2 ${experiences[idx].desc}`}>{experiences[idx].description}</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {experiences[idx].skills.map((skill, i) => (
                      <span key={i} className={`px-2 py-1 rounded text-xs ${experiences[idx].badge}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
