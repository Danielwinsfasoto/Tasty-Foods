import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function About() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Amara Okafor",
      role: "Food Blogger",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      text: "TastyBites has completely ruined me for other restaurants. The Jollof Rice is the most authentic I've had outside of my grandmother's kitchen. Every bite is packed with love and flavor. I come here at least twice a week!",
    },
    {
      id: 2,
      name: "Daniel Mensah",
      role: "Regular Customer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      text: "The Signature Burger here is on another level. Juicy, perfectly seasoned, and that secret sauce — I've been trying to figure out the recipe for months! The service is always warm and fast. This place is a gem.",
    },
    {
      id: 3,
      name: "Fatima Al-Hassan",
      role: "Event Planner",
      image: "https://media.istockphoto.com/id/2244681042/photo/cheerful-young-hispanic-woman-in-elegant-eyeglasses-sitting-in-armchair.jpg?s=612x612&w=0&k=20&c=nHl3ryKkIimxSHKJyWT7xElnhF49vhtKXL2LNFXsM_E=",
      rating: 5,
      text: "I've used TastyBites for three corporate events now and every single time they deliver perfection. The catering team is professional, the food arrives fresh, and my guests are always asking who the caterer is. Highly recommended!",
    },
    {
      id: 4,
      name: "Chukwuemeka Eze",
      role: "Chef & Food Critic",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      text: "As a chef myself, I'm very critical about food. TastyBites impressed me from the first visit. The technique, the freshness of ingredients, and the balance of flavours show a kitchen that truly cares about quality. Outstanding.",
    },
    {
      id: 5,
      name: "Ngozi Williams",
      role: "Mother of Three",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      text: "My kids used to be picky eaters until I brought them to TastyBites. Now they beg me to come here every weekend! The Chicken Shawarma and Ice Cream are their favourites. A place the whole family loves.",
    },
    {
      id: 6,
      name: "Richard Davies",
      role: "University Student",
      image: "https://media.istockphoto.com/id/1205739566/photo/young-indian-man-wearing-orange-sweater-over-isolated-white-background-happy-face-smiling.jpg?s=612x612&w=0&k=20&c=5NRDR1jFRu_ptMJD83bAx-GmCSjq7UBAHEs0dh33tfQ=",
      rating: 5,
      text: "Affordable, delicious, and filling. The Grilled Sausages are my go-to meal between classes. The staff always remember my order and greet me by name. TastyBites doesn't just feed you — they make you feel at home.",
    },
  ];

  const stats = [
    { value: "15+", label: "Years of Experience" },
    { value: "50K+", label: "Happy Customers" },
    { value: "30+", label: "Menu Items" },
    { value: "4.9★", label: "Average Rating" },
  ];

  const team = [
    {
      name: "Chef Adebayo Osei",
      role: "Head Chef & Founder",
      image: "https://media.istockphoto.com/id/506292574/photo/chef-decorating-a-plate.jpg?s=612x612&w=0&k=20&c=ZrdBO-6MWakf425IeZwLI-AeBsxkGLQAg5D8JaoWaE4=",
      bio: "With 20 years of culinary experience across West Africa and Europe, Chef Adebayo brings bold authentic flavours to every dish.",
    },
    {
      name: "Chioma Nwosu",
      role: "Pastry & Desserts Chef",
      image: "https://thumbs.dreamstime.com/b/confident-black-chef-woman-uniform-hat-posing-over-yellow-background-young-isolated-beautiful-african-american-cook-female-294727725.jpg?w=768",
      bio: "Chioma crafts every parfait, ice cream, and dessert with precision and passion, turning simple ingredients into edible art.",
    },
    {
      name: "Kofi Asante",
      role: "Restaurant Manager",
      image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=400&auto=format&fit=crop",
      bio: "Kofi ensures every guest leaves with a smile. His warm leadership sets the tone for the TastyBites experience.",
    },
  ];

  // Auto-swipe every 4 seconds
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused, testimonials.length]);

  const prev = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="about" className="bg-white">

      {/* Hero Banner */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
          alt="About TastyBites"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Our <span className="text-orange-500">Story</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              From a small family kitchen to a beloved community restaurant — this is TastyBites.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Who We Are</span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Cooked with Passion, Served with Love
            </h3>
            <p className="text-gray-600 text-lg mb-5 leading-relaxed">
              TastyBites was born in 2010 from a simple dream — to bring the bold, rich flavours of West African cuisine to every table, alongside beloved international favourites. What started as a small family eatery has grown into a thriving restaurant loved by thousands.
            </p>
            <p className="text-gray-600 text-lg mb-5 leading-relaxed">
              Every dish on our menu tells a story. We source only the freshest local ingredients, honour traditional recipes, and add our own creative twist to keep things exciting. From smoky Jollof Rice to our legendary Signature Burger, each plate is crafted with intention.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We believe food is more than fuel — it's community, memory, and joy. That's the TastyBites promise: to make every meal unforgettable.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=800&auto=format&fit=crop"
              alt="Our kitchen"
              className="rounded-3xl w-full h-96 object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-2xl shadow-lg">
              <p className="text-4xl font-black">15+</p>
              <p className="text-sm font-semibold">Years Serving Joy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-900 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-5xl font-black text-orange-500 mb-2">{stat.value}</p>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">The People Behind the Plates</span>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Meet Our Team</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member) => (
            <div key={member.name} className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                <p className="text-orange-500 font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">What People Say</span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Customer Testimonials</h3>
          </div>

          {/* Testimonial Card */}
          <div
            className="relative bg-white rounded-3xl shadow-lg p-8 md:p-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-8 text-orange-100">
              <Quote size={64} fill="currentColor" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400" fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic min-h-[100px] transition-all duration-500">
                "{testimonials[activeTestimonial].text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-orange-500"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonials[activeTestimonial].name}</p>
                  <p className="text-orange-500 text-sm font-medium">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
            </div>

            {/* Prev / Next */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeTestimonial ? "bg-orange-500 w-8" : "bg-gray-200 w-2"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-600 p-3 rounded-full transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}