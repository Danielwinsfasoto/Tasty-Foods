import { Facebook, Instagram, Utensils, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError("");
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const trimmed = email.trim();

    if (!trimmed) {
      setEmailError("Email address is required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setSubscribed(true);
    setEmail("");
    setEmailError("");
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-orange-500 p-2 rounded-lg text-white">
                <Utensils size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Tasty<span className="text-orange-500">Bites</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8">
              Serving happiness on a plate since 2010. We pride ourselves on
              authentic flavors and exceptional service.
            </p>
            <div className="flex gap-4">
              {/* Facebook */}
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-orange-500 transition-colors">
                <Facebook size={20} />
              </a>

              {/* Instagram */}
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-orange-500 transition-colors">
                <Instagram size={20} />
              </a>

              {/* X (formerly Twitter) */}
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-orange-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* TikTok */}
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-orange-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe for special offers and recipes.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3">
                <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                <p className="text-green-400 text-sm font-medium">You're subscribed! Thank you.</p>
              </div>
            ) : (
              <div>
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email address"
                    className={`bg-white/10 border rounded-l-xl px-4 py-3 w-full focus:outline-none focus:ring-0 text-white placeholder-gray-500 transition-colors ${
                      emailError ? "border-red-400" : "border-transparent"
                    }`}
                  />
                  <button
                    onClick={handleSubscribe}
                    className="bg-orange-500 hover:bg-orange-600 px-4 py-3 rounded-r-xl font-bold transition-colors flex-shrink-0"
                  >
                    Join
                  </button>
                </div>
                {emailError && (
                  <p className="text-red-400 text-xs mt-2">{emailError}</p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© 2026 TastyBites Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}