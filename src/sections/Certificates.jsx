import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { certificates } from "../constants/certificates";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Certificates = () => {
  useGSAP(() => {
    gsap.utils.toArray(".certificate-card").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        scale: 0.8,
        rotationY: -45,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <section id="certificates" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Certifications & Credentials"
          sub="🏅 Continuous Learning and Professional Development"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16 gap-5">
          {certificates.map((cert, index) => (
            <a href={cert.url} target="_blank" rel="noopener noreferrer" key={index} className="block mb-5 certificate-card break-inside-avoid">
              <GlowCard card={{}} index={index}>
                <div className="flex flex-col p-6 h-full">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 text-white hover:text-blue-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-white-50 text-sm mb-3 font-medium">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {cert.date}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Click to verify</span>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates; 