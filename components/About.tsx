import { Target, Eye, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-bebas text-4xl md:text-6xl text-white mb-6 tracking-wider">
              About <span className="text-orange-500">Tygron</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Tygron Playground & Lounge adalah gaming center terbesar dan terdepan di Bogor. 
              Sejak didirikan, kami berkomitmen memberikan pengalaman gaming terbaik dengan 
              fasilitas premium dan teknologi terkini.
            </p>
            
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              Dengan console PlayStation 4, PlayStation 5, Nintendo Switch, dan ruang VIP yang 
              nyaman, kami menciptakan tempat dimana para gamer dapat berkumpul, bermain, dan 
              berkompetisi dalam suasana yang menyenangkan.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
                  <p className="text-gray-300">
                    Menyediakan platform gaming terbaik yang menghubungkan komunitas gamer 
                    dan memberikan pengalaman bermain yang tak terlupakan.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Our Vision</h3>
                  <p className="text-gray-300">
                    Menjadi gaming center pilihan utama di Indonesia yang dikenal karena 
                    kualitas, inovasi, dan komunitas yang solid.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Gaming setup at Tygron"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            {/* Stats */}
            <div className="absolute -bottom-6 left-6 right-6 bg-black/90 backdrop-blur-sm rounded-xl p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-orange-500">50+</div>
                  <div className="text-sm text-gray-300">Gaming Stations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-500">24/7</div>
                  <div className="text-sm text-gray-300">Operating Hours</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-500">1000+</div>
                  <div className="text-sm text-gray-300">Happy Gamers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}