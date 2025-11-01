import { Star } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative Circle */}
      <div className="absolute left-0 top-0 w-32 h-64 bg-blue-500 rounded-r-full opacity-20 lg:w-48 lg:h-96" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="text-blue-500">Best Kids GPS Tracker App</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-700">
              Being parent is tough, but we have a simple solution to ensure
              their ways of exploring the world are safe
            </p>

            {/* QR Code and Ratings */}
            <div className="flex items-start gap-6">
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect width="100" height="100" fill="white" />
                    <g fill="black">
                      <rect x="10" y="10" width="15" height="15" />
                      <rect x="75" y="10" width="15" height="15" />
                      <rect x="10" y="75" width="15" height="15" />
                      <rect x="30" y="30" width="10" height="10" />
                      <rect x="60" y="60" width="10" height="10" />
                      <rect x="40" y="40" width="20" height="20" />
                    </g>
                  </svg>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.7</span>
                  <span className="text-sm text-gray-600">App Store</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.7</span>
                  <span className="text-sm text-gray-600">Google Play</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.7</span>
                  <span className="text-sm text-gray-600">AppGallery</span>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  <span className="text-3xl font-bold">4.7</span>
                </div>
                <p className="text-sm text-gray-600">
                  rating based on 1 million reviews
                </p>
              </div>

              <div>
                <div className="text-3xl font-bold mb-1">3.4</div>
                <p className="text-sm text-gray-600">
                  million parents use us monthly
                </p>
              </div>

              <div>
                <div className="text-3xl font-bold mb-1">180</div>
                <p className="text-sm text-gray-600">
                  countries worldwide coverage
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&h=600&fit=crop"
                alt="Parents using TinyTrails app"
                width={600}
                height={500}
                className="w-full"
              />

              {/* Overlay App Preview */}
              <div className="absolute top-8 right-8 bg-white rounded-3xl shadow-xl p-4 border-4 border-blue-400">
                <div className="w-40 h-32 bg-gray-100 rounded-2xl flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full mb-2" />
                  <p className="text-xs font-semibold">Kate</p>
                  <p className="text-xs text-gray-600">is at school</p>
                </div>
              </div>

              {/* Profile Avatar */}
              <div className="absolute bottom-8 right-8 w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                  alt="User"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
