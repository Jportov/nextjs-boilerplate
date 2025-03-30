'use client';

import {
  ClipboardList,
  Hammer,
  LifeBuoy,
  MoveHorizontal,
  Users,
  Wrench,
} from 'lucide-react';

import { motion } from 'framer-motion';

const services = [
  {
    icon: <Hammer className="w-8 h-8 text-black" />,
    title: 'Technical Planning',
    description:
      'Critical and heavy lifting operations planning, ensuring every detail is addressed with precision.',
  },
  {
    icon: <MoveHorizontal className="w-8 h-8 text-black" />,
    title: 'Confined Space Coordination',
    description:
      'Expert coordination of rigging operations in confined, high-risk environments without crane access.',
  },
  {
    icon: <Wrench className="w-8 h-8 text-black" />,
    title: 'Tool & Equipment Specification',
    description:
      'Accurate selection of the tools, lifting gear, and resources needed for each unique project.',
  },
  {
    icon: <ClipboardList className="w-8 h-8 text-black" />,
    title: 'Scope Evaluation',
    description:
      'Thorough technical analysis of project scopes for commercial proposals and safe execution.',
  },
  {
    icon: <Users className="w-8 h-8 text-black" />,
    title: 'Consulting for Bids',
    description:
      'Support for your commercial team in preparing detailed, technically viable project bids.',
  },
  {
    icon: <LifeBuoy className="w-8 h-8 text-black" />,
    title: 'Onshore & Offshore Support',
    description:
      'Complete assistance with logistics, planning, and execution of lifting activities at any location.',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-left">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-2 rounded-full shadow">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
