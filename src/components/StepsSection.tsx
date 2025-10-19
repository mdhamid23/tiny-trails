import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function StepsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
          3 simple steps to be sure your children are safe
        </h2>
        <p className="text-center text-gray-600 mb-16">
          You will need only 5 minutes and your child&apos;s phone or GPS watch
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Step 1 */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="text-8xl font-bold text-blue-500">1</div>
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-lg">
              Download the{" "}
              <a href="#" className="text-blue-500 font-semibold underline">
                Findmykids
              </a>{" "}
              app on your smartphone
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="text-8xl font-bold text-blue-500">2</div>
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center text-white text-xl">
                    🐧
                  </div>
                </div>
              </div>
            </div>
            <p className="text-lg">
              Install the{" "}
              <a href="#" className="text-blue-500 font-semibold underline">
                Pingo
              </a>{" "}
              app on your kid&apos;s phone or buy a GPS watch
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="text-8xl font-bold text-blue-500">3</div>
                <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full overflow-hidden shadow-lg border-4 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=100&h=100&fit=crop"
                    alt="Family"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <p className="text-lg">Keep tabs on your kid&apos;s safety 24/7</p>
          </div>
        </div>
      </div>

      {/* GPS Watch Section */}
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 mt-24"
        id="gps-watch"
      >
        <div className="bg-white rounded-3xl p-8 lg:p-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Your kid is too young for a smartphone? Use a kid&apos;s GPS
                watch
              </h2>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Kid&apos;s GPS watch</h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📞</span>
                    </div>
                    <p className="text-gray-700">Audio and video calls</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📍</span>
                    </div>
                    <p className="text-gray-700">
                      Accurate GPS location (up to 15 ft.)
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">⭐</span>
                    </div>
                    <p className="text-gray-700">
                      IP67 waterproof - wash hands without fear
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🎁</span>
                    </div>
                    <p className="text-gray-700">
                      All benefits of the Findmykids app subscription as a gift
                      forever
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6 text-lg">
                Buy compatible Device
              </Button>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop"
                alt="Kids GPS Watches"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
