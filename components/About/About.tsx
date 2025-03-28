const About = () => {
  return (
    <section id="about" className="bg-white mx-auto py-30 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          <strong>Tomelis Rig Services</strong> is a company dedicated to providing expert services in maintenance and critical operations for the oil and gas industry. 
          Our highly skilled team specializes in executing complex projects, ensuring safety, efficiency, and compliance 
          with the highest industry standards.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-start">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Specialized Solutions</h3>
            <p className="text-gray-700 flex-1">
              Planning and execution of critical lifting operations in restricted and challenging environments.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-start">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Experienced Team</h3>
            <p className="text-gray-700 flex-1">
              Professionals with years of expertise in the field, ensuring safety and efficiency in every project.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-start">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Commitment to Safety</h3>
            <p className="text-gray-700 flex-1">
              We prioritize rigorous safety practices to protect our workforce and the environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
