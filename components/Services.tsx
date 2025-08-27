import { Gamepad2, Monitor, Crown, Trophy } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Gamepad2,
      title: "PlayStation 4 & 5",
      description: "Main dengan console terbaru PlayStation 4 dan PlayStation 5 dengan game-game terpopuler dan terbaru.",
      features: ["Dual Shock Controllers", "4K Gaming", "Latest Games", "Comfortable Seating"]
    },
    {
      icon: Monitor,
      title: "Nintendo Switch",
      description: "Rasakan pengalaman gaming portable dan multiplayer yang seru dengan Nintendo Switch.",
      features: ["Portable Gaming", "Multiplayer Party", "Exclusive Games", "Joy-Con Controllers"]
    },
    {
      icon: Crown,
      title: "VIP Gaming Rooms",
      description: "Nikmati privasi maksimal dan kenyamanan premium di ruang VIP eksklusif kami.",
      features: ["Private Rooms", "Premium Seating", "Snack Service", "Extended Hours"]
    },
    {
      icon: Trophy,
      title: "Tournament & Events",
      description: "Ikuti turnamen regular dan event gaming dengan hadiah menarik untuk para juara.",
      features: ["Weekly Tournaments", "Cash Prizes", "Gaming Community", "Live Streaming"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-black">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-6xl text-white mb-6 tracking-wider">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Kami menyediakan berbagai layanan gaming premium untuk memenuhi kebutuhan 
            setiap tipe gamer, dari casual hingga professional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300 hover:scale-105 border border-gray-800">
              {/* Icon */}
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/6285122999729?text=Hi, saya ingin tahu lebih lanjut tentang layanan Tygron!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4"
          >
            Get More Info
          </a>
        </div>
      </div>
    </section>
  );
}