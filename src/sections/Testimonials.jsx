import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Explore My Projects"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => {
            const isMinimal = !testimonial.imgPath && !testimonial.description && !testimonial.impact && !testimonial.methods;
            return (
            <GlowCard card={testimonial} key={index} index={index}>
                <div className={`flex flex-col gap-3 p-4 ${isMinimal ? 'items-center justify-center min-h-0 h-32' : ''}`}>
                  <div className="flex items-center gap-3 w-full">
                    {testimonial.imgPath && (
                      <div className="w-24 h-24 flex-shrink-0">
                        <img src={testimonial.imgPath} alt="" className="w-full h-full object-cover rounded-lg" />
                      </div>
                    )}
                    <div className={`flex-grow ${isMinimal ? 'text-center' : ''}`}>
                      <p className="font-bold text-lg">{testimonial.name}</p>
                      {testimonial.mentions && <p className="text-white-50 text-sm">{testimonial.mentions}</p>}
                    </div>
                  </div>
                  {testimonial.description && (
                    <div className="mt-2">
                      <p className="text-white-50 text-sm leading-relaxed text-justify">{testimonial.description}</p>
                    </div>
                  )}
                  {testimonial.impact && (
                    <div className="mt-2">
                      <p className="text-white-50 text-sm leading-relaxed text-justify">
                        <span className="font-semibold text-white">Impact: </span>
                        {testimonial.impact}
                      </p>
                    </div>
                  )}
                  {testimonial.methods && (
                    <div className="mt-2">
                      <p className="text-white-50 text-sm leading-relaxed text-justify">
                        <span className="font-semibold text-white">Methods: </span>
                        {testimonial.methods}
                      </p>
                </div>
                  )}
              </div>
            </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
