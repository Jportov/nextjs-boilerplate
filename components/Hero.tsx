'use client';

import Image from 'next/image';
import Link from 'next/link';
import heroImg from '../public/assets/images/aigene.jpg';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center text-left text-white" id="hero">
      {/* Imagem otimizada de fundo */}
      <Image
        src={heroImg}
        alt="Heavy lifting offshore"
        fill
        placeholder="blur"
        priority
        className="object-cover object-center -z-10 opacity-30"
      />

      {/* Conteúdo principal */}
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Critical Rigging Solutions & Complex Lifting Operations
          </h1>
          <p className="text-lg text-gray-300 mb-6 drop-shadow-md">
            Safe execution of heavy lifting in confined spaces, offshore platforms.
          </p>

          <Link
            href="#about"
            className="inline-block border border-white text-white hover:bg-white hover:text-black transition-colors px-6 py-2 rounded"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
