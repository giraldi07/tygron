export default function Gallery() {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Gaming setup with multiple monitors and RGB lighting"
    },
    {
      src: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Professional gaming room with comfortable chairs"
    },
    {
      src: "https://images.pexels.com/photos/4009624/pexels-photo-4009624.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Gamers enjoying PlayStation gaming session"
    },
    {
      src: "https://images.pexels.com/photos/3945323/pexels-photo-3945323.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Nintendo Switch gaming setup"
    },
    {
      src: "https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "VIP gaming room with premium setup"
    },
    {
      src: "https://images.pexels.com/photos/3829227/pexels-photo-3829227.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Gaming tournament in progress"
    },
    {
      src: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Modern gaming lounge interior"
    },
    {
      src: "https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Group of friends gaming together"
    },
    {
      src: "https://images.pexels.com/photos/4792378/pexels-photo-4792378.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Gaming accessories and setup details"
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-black">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-6xl text-white mb-6 tracking-wider">
            Our <span className="text-orange-500">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Lihat suasana gaming yang seru dan fasilitas premium yang tersedia di Tygron. 
            Bergabunglah dengan komunitas gamer terbesar di Bogor!
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl aspect-square">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Hover Content */}
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <p className="text-white text-sm font-medium">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-8">
            Ready to experience the ultimate gaming atmosphere?
          </p>
          <a
            href="https://wa.me/6285122999729?text=Hi, saya ingin berkunjung ke Tygron dan melihat fasilitas gaming!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4"
          >
            Visit Us Now
          </a>
        </div>
      </div>
    </section>
  );
}