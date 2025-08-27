import { Calendar, Users, Trophy, Clock } from 'lucide-react';

export default function Events() {
  const upcomingEvents = [
    {
      title: "FIFA 24 Championship",
      date: "15 Februari 2025",
      time: "13:00 - 18:00 WIB",
      participants: "32 Players",
      prize: "Rp 2,500,000",
      description: "Turnamen FIFA 24 terbesar di Bogor dengan total hadiah jutaan rupiah!",
      registrationFee: "Rp 75,000",
      image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Mobile Legends Tournament",
      date: "22 Februari 2025", 
      time: "10:00 - 20:00 WIB",
      participants: "16 Teams",
      prize: "Rp 5,000,000",
      description: "Kompetisi Mobile Legends 5v5 dengan format eliminasi langsung.",
      registrationFee: "Rp 200,000/team",
      image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Tekken 8 Fight Night",
      date: "1 Maret 2025",
      time: "19:00 - 23:00 WIB", 
      participants: "24 Players",
      prize: "Rp 1,500,000",
      description: "Malam pertarungan sengit Tekken 8 untuk menentukan siapa fighter terkuat!",
      registrationFee: "Rp 50,000",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="events" className="section-padding bg-gray-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-6xl text-white mb-6 tracking-wider">
            Upcoming <span className="text-orange-500">Events</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ikuti turnamen dan event gaming terbesar di Bogor. Tunjukkan skill gaming 
            terbaikmu dan raih hadiah jutaan rupiah!
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500 transition-all duration-300 group hover:scale-105">
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {event.registrationFee}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-3 text-orange-500" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-3 text-orange-500" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="w-4 h-4 mr-3 text-orange-500" />
                    {event.participants}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Trophy className="w-4 h-4 mr-3 text-orange-500" />
                    Prize Pool: {event.prize}
                  </div>
                </div>

                {/* Register Button */}
                <a
                  href={`https://wa.me/6285122999729?text=Hi, saya ingin mendaftar untuk event ${event.title} di Tygron!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary text-center block"
                >
                  Register Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Event Rules */}
        <div className="bg-gradient-to-r from-orange-500/10 to-blue-900/10 rounded-2xl p-8 border border-orange-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Tournament Rules</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-orange-500 text-lg font-semibold mb-2">Registration</div>
              <div className="text-gray-300 text-sm">
                Daftar minimal 3 hari sebelum event. Payment via transfer atau cash.
              </div>
            </div>
            <div>
              <div className="text-orange-500 text-lg font-semibold mb-2">Fair Play</div>
              <div className="text-gray-300 text-sm">
                Dilarang keras menggunakan cheat, mod, atau software ilegal.
              </div>
            </div>
            <div>
              <div className="text-orange-500 text-lg font-semibold mb-2">Equipment</div>
              <div className="text-gray-300 text-sm">
                Semua equipment disediakan. Peserta boleh bawa controller sendiri.
              </div>
            </div>
            <div>
              <div className="text-orange-500 text-lg font-semibold mb-2">Prizes</div>
              <div className="text-gray-300 text-sm">
                Hadiah berupa uang cash dan merchandise gaming premium.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}