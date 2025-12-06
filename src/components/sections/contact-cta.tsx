'use client';

import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    existingSeller: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send email');
      }

      setSubmitMessage('Thank you! We\'ll be in touch soon.');
      setFormData({
        name: '',
        company: '',
        phone: '',
        existingSeller: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    } catch (error) {
      setSubmitMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="Contact" className="bg-background text-foreground py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-4 sm:mb-6 px-2">
            Let's Talk About Scaling Your{' '}
            <span className="text-accent">Amazon Business</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Ready to take your Amazon business to the next level? Fill out the form below and our team will get in touch.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto px-4">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 space-y-5 sm:space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-text-dark mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
                placeholder="Your full name"
              />
            </div>

            {/* Company Field */}
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-text-dark mb-2">
                Company *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
                placeholder="Your company name"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-text-dark mb-2">
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
                placeholder="Your phone number"
              />
            </div>

            {/* Existing Seller Field */}
            <div>
              <label htmlFor="existingSeller" className="block text-sm font-semibold text-text-dark mb-2">
                Are you an existing seller on Amazon? *
              </label>
              <div className="flex gap-4 sm:gap-6 mt-3">
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="radio"
                    name="existingSeller"
                    value="yes"
                    checked={formData.existingSeller === 'yes'}
                    onChange={handleChange}
                    required
                    className="w-5 h-5 text-primary border-border focus:ring-2 focus:ring-primary cursor-pointer"
                  />
                  <span className="ml-3 text-sm sm:text-base text-text-dark group-hover:text-primary transition-colors">Yes</span>
                </label>
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="radio"
                    name="existingSeller"
                    value="no"
                    checked={formData.existingSeller === 'no'}
                    onChange={handleChange}
                    required
                    className="w-5 h-5 text-primary border-border focus:ring-2 focus:ring-primary cursor-pointer"
                  />
                  <span className="ml-3 text-sm sm:text-base text-text-dark group-hover:text-primary transition-colors">No</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 disabled:bg-primary/60 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:cursor-not-allowed disabled:hover:scale-100 text-base"
              >
                <Mail className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Submit Contact Form'}</span>
              </button>
            </div>

            {/* Success Message */}
            {submitMessage && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center text-sm sm:text-base">
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;