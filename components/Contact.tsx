'use client';
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa"; // Importa o ícone do WhatsApp

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("Mensagem enviada com sucesso!");
  };

  return (
    <section id="contact" className="bg-white py-30 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          Get in touch with Tomelis Rig Services to discuss your requirements. Our expert team is ready to help you achieve your goals with maximum safety and efficiency in all operations.
        </p>
        <div className="max-w-lg md:max-w-xl lg:max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="text-gray-700 font-semibold mb-2 flex">Name:</label>
              <input type="text" id="name" placeholder="Your Name" className="p-2 border rounded w-full text-black" required />
            </div>
            <div>
              <label htmlFor="phone" className="text-gray-700 font-semibold mb-2 flex">Phone:</label>
              <input type="text" id="phone" placeholder="+55 (00) 00000-0000" className="p-2 border rounded w-full text-black" required />
            </div>
            <div>
              <label htmlFor="company" className="text-gray-700 font-semibold mb-2 flex">Company:</label>
              <input type="text" id="company" placeholder="Company Name" className="p-2 border rounded w-full text-black" required />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-700 font-semibold mb-2 flex">Email:</label>
              <input type="email" id="email" placeholder="Your Email" className="p-2 border rounded w-full text-black" required />
            </div>
            <div>
              <label htmlFor="message" className="text-gray-700 font-semibold mb-2 flex">Message:</label>
              <textarea id="message" placeholder="Your Message" className="p-2 border rounded w-full resize-none h-32 text-black" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">
                Send
              </button>
              {formStatus && <p className="text-green-600 mt-4">{formStatus}</p>}
            </div>
          </form>
          <div className="text-center mt-6">
            <p className="text-gray-700">
            Or contact us directly via WhatsApp:
            </p>
            <a
              href="https://whatsapp.com"
              className="text-green-600 flex justify-center items-center space-x-2 mt-1 hover:text-green-500"
            >
              <FaWhatsapp className="text-2xl" /> {/* Ícone do WhatsApp */}
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;