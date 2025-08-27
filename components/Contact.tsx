import { MapPin, Phone, MessageCircle, Instagram, Clock, Wifi } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-black">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-6xl text-white mb-6 tracking-wider">
            Visit <span className="text-orange-500">Our Location</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Temukan Tygron Playground & Lounge di lokasi strategis Bogor. 
            Kami siap memberikan pengalaman gaming terbaik untuk anda!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            {/* Address */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Our Address</h4>
                    <p className="text-gray-300">
                      Jl. Raya Pajajaran No. 123<br />
                      Bantarjati, Bogor Utara<br />
                      Kota Bogor, Jawa Barat 16153
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Operating Hours</h4>
                    <div className="text-gray-300 space-y-1">
                      <p>Monday - Thursday: 10:00 - 23:00</p>
                      <p>Friday - Sunday: 10:00 - 01:00</p>
                      <p className="text-orange-500 font-semibold">Open 7 Days a Week!</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wifi className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Facilities</h4>
                    <div className="text-gray-300">
                      <p>Free High-Speed WiFi, AC, Parking Area, Snack Bar, Clean Restrooms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-4">
              <a
                href="https://wa.me/6285122999729?text=Hi, saya ingin bertanya tentang Tygron Gaming Lounge!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat WhatsApp</span>
              </a>
              
              <a
                href="tel:+6285122999729"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: +62 812-3456-7890</span>
              </a>
              
              <a
                href="https://instagram.com/tygronbogor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Instagram className="w-5 h-5" />
                <span>Follow @tygronbogor</span>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="bg-gray-800 rounded-2xl overflow-hidden h-96">
              {/* Placeholder for Google Maps */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Interactive Map</h3>
                  <p className="text-gray-300 mb-4">Click below to open in Google Maps</p>
                  <a
                    href="https://www.google.com/maps/place/Tygron+Playground+and+Lounge/@-6.5843495,106.7805178,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69c50058b844a7:0xaa061ea156868ee4!8m2!3d-6.5843495!4d106.7805178!16s%2Fg%2F11xm8hm35h?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block"
                  >
                    Open Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="mt-6 bg-gray-900 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">How to Get Here</h4>
              <div className="space-y-3 text-gray-300 text-sm">
                <p>🚗 <strong>By Car:</strong> 15 minutes from Bogor Train Station</p>
                <p>🚌 <strong>Public Transport:</strong> Angkot 03 or Bus TransPakuan</p>
                <p>🏍️ <strong>Motorcycle:</strong> Easy parking available</p>
                <p>🚶 <strong>Walking:</strong> 5 minutes from Pajajaran Plaza</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}