import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { researchPapers } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Research = () => {
  useGSAP(() => {
    // Initial "float-in" animation
    gsap.utils.toArray(".research-card").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        scale: 0.9,
        rotationX: -10,
        rotationY: 10,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    // Continuous floating animation
    gsap.utils.toArray(".research-card").forEach((card, index) => {
      gsap.to(card, {
        y: "-=10",
        rotation: index % 2 === 0 ? -1 : 1,
        duration: 2 + index * 0.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });
  }, []);

  return (
    <section id="research" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Published Research"
          sub="🔬 Contributing to the Body of Knowledge"
        />

        <div className="lg:columns-2 md:columns-2 columns-1 mt-16 gap-5">
          {researchPapers.map((paper, index) => (
            <div key={index} className="block mb-5 research-card break-inside-avoid">
              <GlowCard card={{}} index={index}>
                <div className="flex flex-col p-6">
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={paper.imgPath}
                      alt={`${paper.title} cover`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{paper.title}</h3>
                  <p className="text-white-50 text-sm font-medium mb-1">
                    <span className="font-semibold">Authors:</span> {paper.authors}
                  </p>
                  <p className="text-white-50 text-sm font-medium mb-1">
                    {paper.conference}
                  </p>
                  <p className="text-white-50 text-xs mb-1">{paper.date}</p>
                  
                  <p className="text-white-50 text-xs mb-1">{paper.publisher}</p>
                  {paper.location && <p className="text-white-50 text-xs mb-1">{paper.location}</p>}
                  {paper.doi && <p className="text-white-50 text-xs mb-4">{paper.doi}</p>}
                  
                  <p className="text-white-50 text-sm mt-3 text-justify leading-relaxed">{paper.abstract}</p>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research; 