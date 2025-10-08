'use client';
import { useState, useEffect } from 'react';
import productData from '../product_data.json'; // adjust path as needed
import PageWrapper from '../wrapper';

export default function ContactForm() {
  const countries = [
    'United States', 'Canada', 'Colombia', 'Germany', 'United Kingdom', 'Brazil',
    'Mexico', 'France', 'Australia', 'Japan', 'China', 'India', 'South Africa',
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    product: '',
    message: '',
  });

  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    // Load product names from JSON
    if (productData?.products) {
      setProducts(productData.products.map((p) => p.title));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Contact Form Submission - ${formData.firstName} ${formData.lastName}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Country: ${formData.country}\n` +
      `Product(s) of Interest: ${formData.product}\n\n` +
      `Message:\n${formData.message}`
    );

    const mailto = `mailto:youremail@yourdomain.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  };

  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <div className="max-w-md w-full p-6 rounded-lg">
          <div className="flex flex-col items-center mb-6">
            <img src="/logo_both_transparent.png" alt="Logo" className="w-16 h-16 mb-3" />
            <h2 className="text-xl font-semibold">Contact Us</h2>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex gap-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-1/2 bg-gray-800 text-white p-2 rounded focus:outline-none"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-1/2 bg-gray-800 text-white p-2 rounded focus:outline-none"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="email@service.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 text-white p-2 rounded focus:outline-none"
            />

            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 text-white p-2 rounded focus:outline-none"
            >
              <option value="">Country of Origin</option>
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 text-white p-2 rounded focus:outline-none"
            >
              <option value="">Product(s) of Interest</option>
              {products.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full h-28 bg-gray-800 text-white p-2 rounded resize-none focus:outline-none"
            />

            <button
              type="submit"
              className="bg-gray-300 text-black py-2 px-4 rounded font-semibold hover:bg-gray-400 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}
