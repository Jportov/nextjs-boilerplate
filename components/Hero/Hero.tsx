import heroImg from "../../public/assets/images/aigene.jpg";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center text-left text-white">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 -z-10 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg.src})` }}
      ></div>

      {/* Conteúdo centralizado verticalmente e alinhado à esquerda */}
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Tomelis Rig Services</h1>
          <p className="text-lg text-gray-300 mb-4">
            Experts in Rig Maintenance and Critical Operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
