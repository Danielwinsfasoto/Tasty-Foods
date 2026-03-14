import { ShoppingCart, Star, X, Plus, Minus, CreditCard, Building2, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [showFullMenu, setShowFullMenu] = useState(false);


  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [cardName, setCardName] = useState("");
  const [errors, setErrors] = useState({});

  // Trigger animation when modal opens
  useEffect(() => {
    if (selectedItem) {
      requestAnimationFrame(() => setModalVisible(true));
    } else {
      setModalVisible(false);
    }
  }, [selectedItem]);

  const menuItems = [
    {
      id: 1,
      name: "Steamed Rice",
      description: "Fluffy basmati rice served with your choice of stew or sauce.",
      price: "$12.99",
      image: "https://thumbs.dreamstime.com/b/close-up-african-beef-stew-plate-tomato-sauce-spices-herbs-served-rice-old-wooden-table-west-cuisine-156889376.jpg?w=768",
      tag: "Classic",
    },
    {
      id: 2,
      name: "Jollof Rice",
      description: "Authentic smoky West African Jollof rice with fried plantain.",
      price: "$15.99",
      image: "https://zenaskitchen.com/wp-content/uploads/2022/12/jollof-rice-540x540.jpg",
      tag: "Popular",
    },
    {
      id: 3,
      name: "Grilled Sausages",
      description: "Perfectly seasoned spicy sausages served with mustard dip.",
      price: "$8.99",
      image: "https://images.unsplash.com/photo-1532246420286-127bcd803104?q=80&w=800&auto=format&fit=crop",
      tag: "Snack",
    },
    {
      id: 4,
      name: "Chicken Shawarma",
      description: "Marinated chicken, garlic sauce, and pickles wrapped in soft pita.",
      price: "$10.99",
      image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=800&auto=format&fit=crop",
      tag: "Bestseller",
    },
    {
      id: 5,
      name: "Signature Burger",
      description: "Beef patty, melted cheddar, caramelised onions, and secret sauce.",
      price: "$14.49",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
      tag: "Wrap",
    },
  ];

  const extraMenuItems = [
    {
      id: 6,
      name: "Strawberry Parfait",
      description: "Layers of creamy yogurt, granola, and fresh strawberries in a tall glass.",
      price: "$7.49",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
      tag: "Dessert",
      category: "Parfaits",
    },
    {
      id: 7,
      name: "Mango Parfait",
      description: "Tropical mango chunks layered with vanilla yogurt and crunchy granola.",
      price: "$7.99",
      image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=800&auto=format&fit=crop",
      tag: "Tropical",
      category: "Parfaits",
    },
    {
      id: 8,
      name: "Greek Yogurt Bowl",
      description: "Thick creamy Greek yogurt topped with honey, walnuts and mixed berries.",
      price: "$6.49",
      image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=800&auto=format&fit=crop",
      tag: "Healthy",
      category: "Yogurts",
    },
    {
      id: 9,
      name: "Vanilla Frozen Yogurt",
      description: "Light and tangy frozen yogurt swirled with vanilla bean and fresh fruit.",
      price: "$5.99",
      image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=800&auto=format&fit=crop",
      tag: "Frozen",
      category: "Yogurts",
    },
    {
      id: 10,
      name: "Classic Vanilla Ice Cream",
      description: "Rich and velvety vanilla ice cream made with fresh cream and real vanilla pods.",
      price: "$4.99",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=800&auto=format&fit=crop",
      tag: "Classic",
      category: "Ice Cream",
    },
    {
      id: 11,
      name: "Chocolate Fudge Ice Cream",
      description: "Double chocolate ice cream loaded with rich fudge swirls and cocoa chunks.",
      price: "$5.49",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop",
      tag: "Indulgent",
      category: "Ice Cream",
    },
    {
      id: 12,
      name: "Strawberry Ice Cream",
      description: "Fresh strawberry ice cream bursting with real fruit pieces and natural sweetness.",
      price: "$5.49",
      image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=800&auto=format&fit=crop",
      tag: "Fruity",
      category: "Ice Cream",
    },
    {
      id: 13,
      name: "Grilled Chicken Wrap",
      description: "Tender grilled chicken, fresh lettuce, tomatoes and creamy sauce in a flour tortilla.",
      price: "$11.49",
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop",
      tag: "Healthy",
      category: "Wraps",
    },
    {
      id: 14,
      name: "Peppered Chicken",
      description: "Juicy oven-roasted chicken marinated in bold West African pepper sauce.",
      price: "$13.99",
      image: "https://media-cdn2.greatbritishchefs.com/media/4iqfao12/img16366.whqc_1800x1200q90fpt515fpl528.webp",
      tag: "Spicy",
      category: "Mains",
    },
    {
      id: 15,
      name: "Crispy Fried Fish",
      description: "Golden crispy fried tilapia served with spicy pepper sauce and plantain.",
      price: "$13.49",
      image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=800&auto=format&fit=crop",
      tag: "Seafood",
      category: "Mains",
    },
  ];

  const categories = [...new Set(extraMenuItems.map((i) => i.category))];

  const openOrder = (e, item) => {
    e.preventDefault();
    setSelectedItem(item);
    setQuantity(1);
    setPaymentMethod("card");
    setOrderSuccess(false);
    setCardNumber("");
    setCardExpiry("");
    setCardCVV("");
    setCardName("");
    setErrors({});
  };

  const closeModal = (e) => {
    if (e) e.preventDefault();
    setModalVisible(false);
    setTimeout(() => {
      setSelectedItem(null);
      setOrderSuccess(false);
    }, 300);
  };

  const handleCardNumber = (e) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 16);
    const formatted = raw.match(/.{1,4}/g)?.join(" ") || raw;
    setCardNumber(formatted);
  };

  const handleExpiry = (e) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 4);
    if (raw.length >= 3) {
      setCardExpiry(raw.slice(0, 2) + " / " + raw.slice(2));
    } else {
      setCardExpiry(raw);
    }
  };

  const handleCVV = (e) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 3);
    setCardCVV(raw);
  };

  const handleCardName = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setCardName(value);
  };

  const validateCard = () => {
    const newErrors = {};
    const nameTrimmed = cardName.trim();
    if (!nameTrimmed) {
      newErrors.cardName = "Cardholder name is required.";
    } else if (/[^a-zA-Z\s]/.test(nameTrimmed)) {
      newErrors.cardName = "Name must contain letters only — no numbers or symbols.";
    } else if (nameTrimmed.split(/\s+/).filter(Boolean).length < 2) {
      newErrors.cardName = "Please enter your full name (first and last).";
    } else if (nameTrimmed.length < 3) {
      newErrors.cardName = "Name is too short.";
    }

    const rawCard = cardNumber.replace(/\s/g, "");
    if (!rawCard) {
      newErrors.cardNumber = "Card number is required.";
    } else if (rawCard.length !== 16) {
      newErrors.cardNumber = "Card number must be 16 digits.";
    } else if (!/^\d+$/.test(rawCard)) {
      newErrors.cardNumber = "Card number must contain only digits.";
    }

    const expiryRaw = cardExpiry.replace(/\s/g, "").replace("/", "");
    if (!expiryRaw) {
      newErrors.cardExpiry = "Expiry date is required.";
    } else if (expiryRaw.length !== 4) {
      newErrors.cardExpiry = "Enter a valid expiry (MM / YY).";
    } else {
      const month = parseInt(expiryRaw.slice(0, 2));
      const year = parseInt("20" + expiryRaw.slice(2));
      const now = new Date();
      const expDate = new Date(year, month - 1);
      if (month < 1 || month > 12) {
        newErrors.cardExpiry = "Invalid month.";
      } else if (expDate < new Date(now.getFullYear(), now.getMonth())) {
        newErrors.cardExpiry = "This card has expired.";
      }
    }

    if (!cardCVV) {
      newErrors.cardCVV = "CVV is required.";
    } else if (cardCVV.length !== 3) {
      newErrors.cardCVV = "CVV must be exactly 3 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOrder = (e) => {
    e.preventDefault();
    if (paymentMethod === "card" && !validateCard()) return;
    setOrderSuccess(true);
    setTimeout(() => closeModal(), 2500);
  };

  const rawPrice = selectedItem ? parseFloat(selectedItem.price.replace("$", "")) : 0;
  const total = (rawPrice * quantity).toFixed(2);

  const MenuCard = ({ item }) => (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {item.tag}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
          <div className="flex items-center text-yellow-500">
            <Star size={14} fill="currentColor" />
            <span className="ml-1 text-xs font-semibold text-gray-700">4.9</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-black text-orange-500">{item.price}</span>
          <button
            onClick={(e) => openOrder(e, item)}
            className="bg-gray-900 hover:bg-orange-500 text-white p-3 rounded-2xl transition-colors group-hover:bg-orange-500"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="menu" className="py-24 bg-gray-50">
      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes overlayFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .modal-overlay {
          animation: overlayFadeIn 0.3s ease forwards;
        }
        .modal-box {
          animation: modalFadeIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .modal-box::-webkit-scrollbar { display: none; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Delicious Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of mouth-watering dishes, prepared
            daily with the freshest ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={(e) => { e.preventDefault(); setShowFullMenu((prev) => !prev); }}
            className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-full font-bold transition-all"
          >
            {showFullMenu ? "Hide Full Menu" : "View Full Menu"}
            {showFullMenu ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>

        {showFullMenu && (
          <div className="mt-12">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">More From Our Kitchen</h3>
              <p className="text-gray-500">Desserts, frozen treats, wraps and more</p>
            </div>
            {categories.map((category) => (
              <div key={category} className="mb-14">
                <div className="flex items-center gap-4 mb-6">
                  <h4 className="text-2xl font-bold text-gray-800">{category}</h4>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {extraMenuItems
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <MenuCard key={item.id} item={item} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal rendered via Portal directly into document.body */}
      {selectedItem && createPortal(
        <div
          className="modal-overlay fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(e); }}
        >
          <div
            className="modal-box bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-md max-h-[88vh] overflow-y-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {orderSuccess ? (
              <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
                <CheckCircle size={72} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Order Placed!</h3>
                <p className="text-gray-500">Your {selectedItem.name} is being prepared. Thank you!</p>
              </div>
            ) : (
              <>
                <div className="relative h-52 flex-shrink-0">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/40 transition-colors"
                  >
                    <X size={20} />
                  </button>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {selectedItem.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-2xl font-bold text-gray-900">{selectedItem.name}</h3>
                    <div className="flex items-center text-yellow-500 ml-2">
                      <Star size={16} fill="currentColor" />
                      <span className="ml-1 text-sm font-semibold text-gray-700">4.9</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm mb-5">{selectedItem.description}</p>

                  <div className="flex items-center justify-between mb-5">
                    <span className="font-semibold text-gray-700">Quantity</span>
                    <div className="flex items-center gap-4 bg-gray-100 rounded-2xl px-4 py-2">
                      <button
                        onClick={(e) => { e.preventDefault(); setQuantity((q) => Math.max(1, q - 1)); }}
                        className="text-gray-600 hover:text-orange-500 transition-colors"
                      >
                        <Minus size={18} />
                      </button>
                      <span className="text-lg font-bold w-6 text-center">{quantity}</span>
                      <button
                        onClick={(e) => { e.preventDefault(); setQuantity((q) => q + 1); }}
                        className="text-gray-600 hover:text-orange-500 transition-colors"
                      >
                        <Plus size={18}/>
                      </button>
                    </div>
                  </div>

                  <div className="mb-5">
                    <span className="font-semibold text-gray-700 block mb-3">Payment Method</span>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={(e) => { e.preventDefault(); setPaymentMethod("card"); setErrors({}); }}
                        className={`flex items-center gap-2 px-4 py-3 rounded-2xl border-2 font-semibold transition-all ${
                          paymentMethod === "card"
                            ? "border-orange-500 bg-orange-50 text-orange-500"
                            : "border-gray-200 text-gray-600 hover:border-orange-300"
                        }`}
                      >
                        <CreditCard size={18} /> Visa Card
                      </button>
                      <button
                        onClick={(e) => { e.preventDefault(); setPaymentMethod("bank"); setErrors({}); }}
                        className={`flex items-center gap-2 px-4 py-3 rounded-2xl border-2 font-semibold transition-all ${
                          paymentMethod === "bank"
                            ? "border-orange-500 bg-orange-50 text-orange-500"
                            : "border-gray-200 text-gray-600 hover:border-orange-300"
                        }`}
                      >
                        <Building2 size={18} /> Bank Transfer
                      </button>
                    </div>
                  </div>

                  {paymentMethod === "card" && (
                    <div className="mb-5 space-y-3">
                      <div>
                        <input
                          type="text"
                          placeholder="Cardholder Full Name (e.g. John Doe)"
                          value={cardName}
                          onChange={handleCardName}
                          className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${
                            errors.cardName ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-orange-400"
                          }`}
                        />
                        {errors.cardName && <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>}
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Card Number (e.g. 4242 4242 4242 4242)"
                          value={cardNumber}
                          onChange={handleCardNumber}
                          className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${
                            errors.cardNumber ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-orange-400"
                          }`}
                        />
                        {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <input
                            type="text"
                            placeholder="MM / YY"
                            value={cardExpiry}
                            onChange={handleExpiry}
                            className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${
                              errors.cardExpiry ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-orange-400"
                            }`}
                          />
                          {errors.cardExpiry && <p className="text-red-500 text-xs mt-1">{errors.cardExpiry}</p>}
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="CVV"
                            value={cardCVV}
                            onChange={handleCVV}
                            className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${
                              errors.cardCVV ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-orange-400"
                            }`}
                          />
                          {errors.cardCVV && <p className="text-red-500 text-xs mt-1">{errors.cardCVV}</p>}
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "bank" && (
                    <div className="mb-5 bg-gray-50 rounded-2xl p-4 text-sm text-gray-600 space-y-1">
                      <p className="font-semibold text-gray-800 mb-2">Bank Transfer Details</p>
                      <p>Bank: <span className="font-medium text-gray-900">First National Bank</span></p>
                      <p>Account Name: <span className="font-medium text-gray-900">TastyBites Ltd</span></p>
                      <p>Account No: <span className="font-medium text-gray-900">0123456789</span></p>
                      <p>Reference: <span className="font-medium text-orange-500">ORDER-{selectedItem.id}{quantity}00</span></p>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <p className="text-xs text-gray-400">Total</p>
                      <p className="text-2xl font-black text-orange-500">${total}</p>
                    </div>
                    <button
                      onClick={handleOrder}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      , document.body)}
    </section>
  );
}