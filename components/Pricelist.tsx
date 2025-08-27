import { Check, Star } from 'lucide-react';

export default function Pricelist() {
  const pricingPlans = [
    {
      name: "PlayStation 4",
      price: "15,000",
      duration: "per hour",
      popular: false,
      features: [
        "Latest PS4 Games",
        "Dual Shock 4 Controller",
        "HD Gaming Experience",
        "Comfortable Gaming Chair",
        "Free Wifi"
      ]
    },
    {
      name: "PlayStation 5",
      price: "25,000",
      duration: "per hour",
      popular: true,
      features: [
        "Next-Gen PS5 Games",
        "DualSense Controller",
        "4K Gaming Experience",
        "Ray Tracing Support",
        "Premium Gaming Chair",
        "Free Wifi & Snacks"
      ]
    },
    {
      name: "Nintendo Switch",
      price: "20,000",
      duration: "per hour",
      popular: false,
      features: [
        "Exclusive Nintendo Games",
        "Joy-Con Controllers",
        "Portable & Docked Mode",
        "Multiplayer Gaming",
        "Free Wifi"
      ]
    },
    {
      name: "VIP Room",
      price: "50,000",
      duration: "per hour",
      popular: false,
      features: [
        "Private Gaming Room",
        "PS5 + Nintendo Switch",
        "Premium Seating for 4",
        "Snack & Drink Service",
        "Extended Gaming Hours",
        "Personal Attendant"
      ]
    }
  ];

  return (
    <section id="pricelist" className="section-padding bg-gray-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-6xl text-white mb-6 tracking-wider">
            Price <span className="text-orange-500">List</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pilih paket gaming yang sesuai dengan budget dan kebutuhan anda. 
            Semua harga sudah termasuk akses penuh ke fasilitas gaming.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative bg-black rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
              plan.popular 
                ? 'border-orange-500 bg-gradient-to-b from-orange-500/10 to-black' 
                : 'border-gray-800 hover:border-gray-700'
            }`}>
              
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>MOST POPULAR</span>
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-orange-500">
                  Rp {plan.price}
                </span>
                <span className="text-gray-400 text-lg">
                  /{plan.duration}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={`https://wa.me/6285122999729?text=Hi, saya ingin booking ${plan.name} di Tygron!`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 text-center block ${
                  plan.popular
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
                }`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

        {/* Special Offers */}
        <div className="mt-16 bg-gradient-to-r from-orange-500/10 to-blue-900/10 rounded-2xl p-8 border border-orange-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Special Offers</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-orange-500 text-xl font-bold">Weekend Package</div>
                <div className="text-gray-300">5 hours gaming = Get 1 hour FREE</div>
              </div>
              <div>
                <div className="text-orange-500 text-xl font-bold">Student Discount</div>
                <div className="text-gray-300">20% OFF with valid student ID</div>
              </div>
              <div>
                <div className="text-orange-500 text-xl font-bold">Group Booking</div>
                <div className="text-gray-300">15% OFF for groups of 4+ people</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}