export function Hero() {
    return (
      <div className="relative bg-neutral-dark text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&q=80"
            alt="Food background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                La cuisine malienne
                <span className="block text-secondary mt-2">livrée chez vous</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200 font-light leading-relaxed">
                Découvrez IkaPlat, l'application qui vous permet de commander vos plats traditionnels maliens préférés en quelques clics.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl hover:bg-white/20 transform transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg border border-white/10">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" 
                       alt="Google Play" 
                       className="h-8" />
                </button>
                <button className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl hover:bg-white/20 transform transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg border border-white/10">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" 
                       alt="App Store" 
                       className="h-8" />
                </button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="relative animate-float">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-3xl blur-lg opacity-30 animate-pulse" />
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80" 
                  alt="App Screenshot" 
                  className="relative rounded-3xl shadow-2xl border-8 border-neutral-dark"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary text-neutral-dark px-8 py-4 rounded-2xl font-bold shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                4.8 ⭐ sur Play Store
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 200" className="w-full h-20 fill-white preserve-3d">
            <path d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
          </svg>
        </div>
      </div>
    );
  }