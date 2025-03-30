'use client';

import { motion } from 'framer-motion';
import { Globe, HardHat, Loader, ShieldCheck } from 'lucide-react';

const highlights = [
  {
    icon: <Loader className="w-8 h-8 text-black" />,
    title: '48-Ton Critical Lift',
    description: 'Heavy equipment rigged offshore with no crane access, executed in confined space with full safety protocol.',
  },
  {
    icon: <HardHat className="w-8 h-8 text-black" />,
    title: '20+ Complex Projects',
    description: 'Operations completed in confined, high-risk zones—onshore and offshore—under rigorous technical supervision.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-black" />,
    title: '30+ Years of Experience',
    description: 'Led by veteran Critical Rigging Superintendent Tom Gallie, with proven field expertise in international projects.',
  },
  {
    icon: <Globe className="w-8 h-8 text-black" />,
    title: 'International Reach',
    description: 'Successful rigging operations executed across 3 countries in the oil & gas sector.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-left">
          Field-Proven Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
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

export default Experience;
