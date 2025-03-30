'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ctaBg from "../public/assets/images/oil-platform-6158557.jpg"; // ajuste o caminho se necessário

const FinalCTA = () => {
  return (
    <section className="relative py-20 px-6 text-white overflow-hidden">
      {/* Imagem otimizada como fundo */}
      <Image
        src={ctaBg}
        alt="Offshore platform background"
        fill
        placeholder="blur"
        priority={false}
        className="object-cover object-center -z-10 opacity-30"
      />

      {/* Conteúdo com animação */}
      <motion.div
        className="relative z-20 max-w-5xl mx-auto text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
          Ready to work with a rigging team that delivers results?
        </h2>
        <p className="text-lg text-gray-200 mb-6 max-w-2xl drop-shadow-md">
          Our experts are ready to help you plan and execute safe, efficient lifting operations — even in the most confined or critical environments.
        </p>
        <Link
          href="#contact"
          className="inline-block border border-white text-white hover:bg-white hover:text-black transition-colors px-6 py-3 rounded"
        >
          Talk to an Expert
        </Link>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
