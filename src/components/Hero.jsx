export default function Hero() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
          alt="Restaurant Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
          Experience the <span className="text-orange-500">Real Taste</span> of
          Home
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
          From spicy Jollof to juicy burgers, we serve the finest flavors
          crafted with passion and fresh ingredients.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            onClick={(e) => handleNavClick(e, "#menu")}
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-bold transition-all hover:scale-105"
          >
            Explore Menu
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-10 py-4 rounded-full text-lg font-bold transition-all"
          >
            Book a Table
          </a>
        </div>
      </div>

      {/* Floating Badge */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ animation: "bounce 2s infinite" }}
      >
        <a
          href="#menu"
          onClick={(e) => handleNavClick(e, "#menu")}
          className="text-white/70 hover:text-white flex flex-col items-center gap-2 transition-colors"
        >
          <span className="text-sm font-medium uppercase tracking-widest">
            Scroll Down
          </span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}