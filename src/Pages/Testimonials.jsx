import TestimonialCard from "../Components/TestimonialCard";
import { testimonials } from "../data/testimonials";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-teal-500 to-teal-200">
      <div className="container mx-auto">
        <h2 className="md:text-6xl text-4xl font-bold text-center mb-12 mt-24 text-white">What People Are Saying</h2>
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
