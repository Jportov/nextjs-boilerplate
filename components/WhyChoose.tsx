'use client';

import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Users, Wrench } from 'lucide-react';

const reasons = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-black" />,
    title: 'Safety First',
    description:
      'We plan and execute every operation with safety as the top priority, no compromises.',
  },
  {
    icon: <Wrench className="w-8 h-8 text-black" />,
    title: 'Technical Expertise',
    description:
      'Led by decades of field experience, we deliver high-precision rigging operations in the most complex environments.',
  },
  {
    icon: <Users className="w-8 h-8 text-black" />,
    title: 'Client-Centered Approach',
    description:
      'Every project is tailored to the client’s needs, with technical evaluation and transparent communication.',
  },
  {
    icon: <Activity className="w-8 h-8 text-black" />,
    title: 'Proven Results',
    description:
      'Critical lifts up to 48 tons executed without cranes in confined offshore and onshore spaces.',
  },
];

const WhyChoose = () => {
  return (
    <section id="why-choose" className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-left">
          Why Choose Tomelis Rig Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-2 rounded-full shadow">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              </div>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
