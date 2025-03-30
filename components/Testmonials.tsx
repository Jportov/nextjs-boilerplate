'use client';

import { motion } from 'framer-motion';
import { ClipboardList, HardHat, ShieldCheck } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Tom and the team made the impossible lift look simple. Zero incidents, total professionalism.",
    author: "Project Manager, Offshore Ops",
    icon: <ClipboardList className="w-10 h-10 text-gray-700" />,
  },
  {
    quote:
      "Their ability to execute in confined spaces without cranes is unmatched. It saved us time and risk.",
    author: "Operations Supervisor, Oil & Gas",
    icon: <HardHat className="w-10 h-10 text-gray-700" />,
  },
  {
    quote:
      "Every step was clearly planned. The crew followed the rigging plan to the letter. Top-tier expertise.",
    author: "HSE Coordinator, Maintenance Division",
    icon: <ShieldCheck className="w-10 h-10 text-gray-700" />,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-800 italic mb-4">“{item.quote}”</p>
              <div className="flex items-center gap-4 mt-4">
                <div className="bg-white p-2 rounded-full shadow border">{item.icon}</div>
                <p className="text-gray-600 font-semibold">{item.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
