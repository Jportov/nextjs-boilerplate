'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  company: yup.string().required('Company is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup
    .string()
    .matches(
      /^\+?\d[\d\s()-]{7,}$/,
      'Phone must be a valid international number (e.g. +55 (11) 91234-5678)'
    )
    .required('Phone is required'),
  message: yup.string().required('Message is required'),
});

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus('Email sent successfully!');
        reset();
      } else {
        setFormStatus('There was an error sending the email.');
      }
    } catch (error) {
      setFormStatus('There was an error sending the email.');
    }
  };

  // 📞 Máscara leve para telefone internacional
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^\d+]/g, '');

    // Aplica formatação básica opcional
    value = value
      .replace(/^(\+\d{1,3})(\d{2})(\d{4,5})(\d{0,4})$/, '$1 ($2) $3-$4')
      .replace(/^(\+\d{1,3})(\d{2})(\d{0,5})$/, '$1 ($2) $3');

    setValue('phone', value);
  };

  return (
    <section id="contact" className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Request a Technical Evaluation
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Interested in learning how Tomelis can support your next project? Contact us for a free, personalized evaluation.
        </p>

        <div className="max-w-3xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="text-gray-700 font-semibold mb-2 block">Name</label>
              <input
                id="name"
                placeholder="Your Name"
                {...register('name')}
                className="p-2 border rounded w-full text-black"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="text-gray-700 font-semibold mb-2 block">Company</label>
              <input
                id="company"
                placeholder="Company Name"
                {...register('company')}
                className="p-2 border rounded w-full text-black"
              />
              {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="text-gray-700 font-semibold mb-2 block">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                {...register('email')}
                className="p-2 border rounded w-full text-black"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            
            {/* Message */}
            <div>
              <label htmlFor="message" className="text-gray-700 font-semibold mb-2 block">Message / Project Description</label>
              <textarea
                id="message"
                {...register('message')}
                placeholder="Your Message"
                className="p-2 border rounded w-full resize-none h-32 text-black"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>

            {/* Submit Button + Status */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
              >
                Send
              </button>

              <AnimatePresence>
                {formStatus && (
                  <motion.div
                    className="flex justify-center items-center gap-2 text-green-600 mt-4 text-sm font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-5 h-5" />
                    {formStatus}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>

          {/* WhatsApp Link */}
          <motion.p
            className="text-gray-600 mt-6 text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Prefer to talk directly?{' '}
            <a
              href="https://wa.me/5511999999999"
              className="text-green-600 hover:text-green-700 font-semibold underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message us on WhatsApp
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
