import React, { useState } from 'react';
import { Mail, Phone, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <section className="w-full bg-[#f6f5f1] py-12 lg:py-20 px-4 sm:px-6 lg:px-12 text-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Contact Info Card */}
        <div className="lg:col-span-4 bg-[#eeece6] p-8 sm:p-10 rounded-2xl flex flex-col justify-between space-y-10 border border-black/5">
          <div className="space-y-6">
            
            {/* Tag line */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#2b66f6] inline-block"></span>
              <p className="text-[11px] font-semibold tracking-widest text-slate-500 uppercase">
                SAY HELLO
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight leading-snug">
              Let’s make your next move count.
            </h2>

            {/* Subtext */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Tell us a little about your business and where you want to go. We’ll get back to you within two working days.
            </p>

            {/* Info Items */}
            <div className="space-y-6 pt-4">
              
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-1.5 rounded-full text-[#2b66f6] mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">EMAIL US</p>
                  <a href="mailto:hello@forma.studio" className="text-slate-800 font-medium text-sm sm:text-base hover:underline">
                    hello@forma.studio
                  </a>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex items-start gap-4">
                <div className="p-1.5 rounded-full text-[#2b66f6] mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">CALL US</p>
                  <a href="tel:+4402079460812" className="text-slate-800 font-medium text-sm sm:text-base hover:underline">
                    +44 (0)20 7946 0812
                  </a>
                </div>
              </div>

              {/* Visit Us */}
              <div className="flex items-start gap-4">
                <div className="p-1.5 rounded-full text-[#2b66f6] mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">VISIT US</p>
                  <p className="text-slate-800 font-medium text-sm sm:text-base leading-snug">
                    24 Charlotte Street<br />London W1T 2ND, UK
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-6 border-t border-slate-300/60 space-y-1 text-xs text-slate-500">
            <p>Monday–Friday, 9:00–18:00 GMT</p>
            <p>Working with partners around the world.</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-8 space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight">
              Tell us about your project.
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-3">
              Fields marked * are required.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Name */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2b66f6]/50 focus:border-[#2b66f6] transition-all"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2b66f6]/50 focus:border-[#2b66f6] transition-all"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2b66f6]/50 focus:border-[#2b66f6] transition-all"
                />
              </div>

              {/* Subject Dropdown */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700">
                  Subject *
                </label>
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3.5 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#2b66f6]/50 focus:border-[#2b66f6] transition-all appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%232b66f6'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3e%3c/svg%3e")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.25rem'
                  }}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile Development</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="branding">Branding</option>
                </select>
              </div>

            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700">
                Message *
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="A little about your goals, timing and what you have in mind..."
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2b66f6]/50 focus:border-[#2b66f6] transition-all resize-none"
              ></textarea>
            </div>

            {/* Privacy note */}
            <p className="text-xs text-slate-500 pt-1">
              By submitting this form, you agree to our privacy policy. We’ll only use your details to respond to your enquiry.
            </p>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#2b66f6] hover:bg-blue-700 text-white font-medium px-6 py-3.5 rounded-lg text-sm transition-colors shadow-sm"
              >
                Submit enquiry
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Footer Trust Badge */}
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
              <ShieldCheck className="w-4 h-4 text-[#2b66f6]" />
              <span>Your details stay between us.</span>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;