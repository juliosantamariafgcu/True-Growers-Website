'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../wrapper';
import Image from 'next/image';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    reason: '',
    message: '',
  });

  const contactReasons = [
    'Product Information',
    'Wholesale Inquiry',
    'Partnership Opportunity',
    'True-Growers lincesing',
    'General Question',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `True Growers Contact - ${formData.firstName} ${formData.lastName}`
    );

    const body = encodeURIComponent(
      `──────────────────────────────\n` +
      `True Growers Contact Submission\n` +
      `──────────────────────────────\n\n` +
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Country: ${formData.country || 'N/A'}\n` +
      `Reason: ${formData.reason || 'N/A'}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `──────────────────────────────\n` +
      `Sent from the True Growers Contact Form\n` +
      `──────────────────────────────`
    );

    window.location.href = `mailto:youremail@yourdomain.com?subject=${subject}&body=${body}`;
  };


  return (
    <PageWrapper>
      <div
        className="
          relative flex flex-col items-center
          justify-start md:justify-center
          min-h-dvh
          pt-24 md:pt-0
          pb-10 md:pb-0
          overflow-y-auto md:overflow-hidden
        "
      >

        <div
          className="hidden md:block absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/cannabis-sativa-L.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
        </div>

        <div className="md:hidden absolute inset-0 -z-10 bg-[#EBEBEB] dark:bg-[#141414]"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="
            relative z-10 w-full
            px-5 sm:px-6 md:px-10
            py-8 sm:py-10 md:py-8
            max-w-none md:max-w-lg
            bg-transparent md:bg-white/80 md:dark:bg-black/60
            md:backdrop-blur-xl md:shadow-lg
            md:rounded-3xl
            text-left
          "
        >
          <div className="flex flex-col items-center mb-8 md:mb-6">
            <Image
              src="/logo_both_transparent.png"
              alt="Logo"
              width={70}
              height={70}
              className="hidden md:block mb-4 drop-shadow-lg"
            />
            <h2 className="text-3xl font-semibold text-[#141414] dark:text-[#EBEBEB] text-center">
              Contact Us
            </h2>
            <p className="text-base md:text-sm text-gray-700 dark:text-gray-300 mt-3 text-center max-w-md">
              We'd love to hear from you — please tell us what you're reaching out about.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-4 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 md:gap-3">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="flex-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 md:p-3 rounded-lg text-base md:text-sm focus:ring-2 focus:ring-[#4A9833] outline-none"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="flex-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 md:p-3 rounded-lg text-base md:text-sm focus:ring-2 focus:ring-[#4A9833] outline-none"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="email@service.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 md:p-3 rounded-lg text-base md:text-sm focus:ring-2 focus:ring-[#4A9833] outline-none"
            />

            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 md:p-3 rounded-lg text-base md:text-sm focus:ring-2 focus:ring-[#4A9833] outline-none"
            />

            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 md:p-3 rounded-lg text-base md:text-sm focus:ring-2 focus:ring-[#4A9833] outline-none"
            >
              <option value="">Reason for Contact</option>
              {contactReasons.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full h-36 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 md:p-3 rounded-lg text-base md:text-sm resize-none focus:ring-2 focus:ring-[#4A9833] outline-none"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-[#4A9833] hover:bg-[#346B24] text-[#EBEBEB] font-semibold py-3 md:py-2.5 px-6 rounded-lg text-lg md:text-base transition-colors duration-300 self-center sm:self-start"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
