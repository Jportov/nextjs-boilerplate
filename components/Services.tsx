'use client';

import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay"; // Importa o CSS do autoplay
import { Autoplay } from "swiper/modules"; // Importa o módulo de autoplay
import { Swiper, SwiperSlide } from "swiper/react";

const Services = () => {
  const projects = [
    { id: 1, title: "Projeto 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", image: "/assets/images/Hero.jpg" },
    { id: 2, title: "Projeto 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", image: "/assets/images/aigene.jpg" },
    { id: 3, title: "Projeto 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", image: "/assets/images/oil-platform-6158557.jpg" },
  ];

  return (
    <section id="services" className="bg-white py-30 px-6">
      <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Take a look at some of our projects</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4000, // Tempo em milissegundos (3 segundos)
            disableOnInteraction: true, // Continua o autoplay mesmo após interação do usuário
          }}
          modules={[Autoplay]} // Registra o módulo de autoplay
          className="mt-6"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="rounded-lg mb-4 object-cover w-full h-100"
                />
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;