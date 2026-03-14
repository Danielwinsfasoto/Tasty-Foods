import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Name: letters and spaces only
    if (name === "name") {
      const cleaned = value.replace(/[^a-zA-Z\s]/g, "");
      setForm((prev) => ({ ...prev, [name]: cleaned }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    // Name
    const nameTrimmed = form.name.trim();
    if (!nameTrimmed) {
      newErrors.name = "Name is required.";
    } else if (nameTrimmed.length < 2) {
      newErrors.name = "Name is too short.";
    } else if (nameTrimmed.split(/\s+/).filter(Boolean).length < 2) {
      newErrors.name = "Please enter your full name (first and last).";
    } else if (/[^a-zA-Z\s]/.test(nameTrimmed)) {
      newErrors.name = "Name must contain letters only.";
    }

    // Email
    const emailTrimmed = form.email.trim();
    if (!emailTrimmed) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Subject
    if (!form.subject) {
      newErrors.subject = "Please select a subject.";
    }

    // Message
    const messageTrimmed = form.message.trim();
    if (!messageTrimmed) {
      newErrors.message = "Message is required.";
    } else if (messageTrimmed.length < 10) {
      newErrors.message = "Message is too short — please provide more detail.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "General Inquiry", message: "" });
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Info Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-md">
              Have a question about our menu, or want to book a private event?
              We'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-2xl text-orange-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Location</h4>
                  <p className="text-gray-600 italic">
                    123 Flavor Street, Gourmet City, GC 56789
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-2xl text-orange-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-2xl text-orange-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Email</h4>
                  <p className="text-gray-600">hello@tastybites.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-2xl text-orange-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Hours</h4>
                  <p className="text-gray-600">Mon - Sat: 9:00 AM - 10:00 PM</p>
                  <p className="text-gray-600">Sun: 11:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-sm">

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={72} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500 mb-8">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-all active:scale-95"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full bg-white border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                        errors.name ? "border-red-400 bg-red-50" : "border-gray-200"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full bg-white border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                        errors.email ? "border-red-400 bg-red-50" : "border-gray-200"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`w-full bg-white border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all appearance-none ${
                      errors.subject ? "border-red-400 bg-red-50" : "border-gray-200"
                    }`}
                  >
                    <option value="">-- Select a subject --</option>
                    <option>General Inquiry</option>
                    <option>Table Reservation</option>
                    <option>Catering Request</option>
                    <option>Feedback</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="How can we help you?"
                    className={`w-full bg-white border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none ${
                      errors.message ? "border-red-400 bg-red-50" : "border-gray-200"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20 transition-all active:scale-95"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}