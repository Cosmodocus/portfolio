import TestimonialCard from "../Components/TestimonialCard";
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center  mb-12 mt-24">
          What People Are Saying
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
