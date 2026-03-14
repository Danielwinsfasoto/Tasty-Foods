import Header from "../components/Header";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Fixed navigation with scroll effect */}
      <Header />

      <main>
        {/* Hero Section - Appetizing introduction */}
        <Hero />

        {/* Menu Section - Food items in card format: Rice, Jollof, Sausages, Shawarma, Burgers */}
        <Menu />

        <About/>

        {/* Contact Section - Form and location details */}
        <Contact />
      </main>

      {/* Footer - Social links and newsletter */}
      <Footer />

      {/* Global Animations Style */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translate(-50%, 0); }
          40% { transform: translate(-50%, -10px); }
          60% { transform: translate(-50%, -5px); }
        }
        
        section {
          animation: fadeIn 0.8s ease-out forwards;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}
