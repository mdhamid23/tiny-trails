import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Feature 1 - Location Tracking */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
                alt="Child at school"
                width={600}
                height={450}
                className="w-full"
              />
              {/* Phone Mockup Overlay */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl p-4 border-4 border-blue-400 w-56">
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="text-center mb-4">
                    <p className="font-semibold">Max</p>
                    <p className="text-sm text-gray-600">is at school</p>
                  </div>
                  <div className="w-full h-40 bg-gray-200 rounded-xl flex items-center justify-center">
                    <div className="w-12 h-12 bg-red-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Check your kid&apos;s accurate, real-time location
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-gray-400">—</span>
                <span>
                  to make sure they are safe if they don&apos;t come home on
                  time
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">—</span>
                <span>to stop worrying about their whereabouts</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature 2 & 3 - Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {/* Updates about places */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <div className="mb-8">
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&h=400&fit=crop"
                  alt="Child at playground"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
                {/* Phone overlay */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-pink-400 to-purple-400 rounded-3xl shadow-xl p-4 w-48 border-4 border-blue-400">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">16:19</div>
                    <div className="bg-white rounded-2xl p-3 text-gray-900">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-6 h-6 bg-gray-800 rounded-full" />
                        <p className="font-semibold">
                          Kate is on the playground
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Get instant updates about Places that your child visits
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-gray-400">—</span>
                <span>to know they are where they are supposed to be</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">—</span>
                <span>to keep an eye on safe and unsafe spots</span>
              </li>
            </ul>
          </div>

          {/* Location History */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <div className="mb-8">
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=400&fit=crop"
                  alt="Child with backpack"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
                {/* Phone overlay */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-xl p-4 w-48 border-4 border-blue-400">
                  <div className="bg-gray-50 rounded-2xl p-3">
                    <div className="flex items-center gap-2 mb-3 text-xs">
                      <div className="w-6 h-6 bg-gray-800 rounded-full" />
                      <p className="font-semibold">To school 7:04 → 7:20</p>
                    </div>
                    <div className="h-24 bg-blue-100 rounded-xl flex items-center justify-center">
                      <div className="w-full h-1 bg-blue-500" />
                    </div>
                    <div className="mt-3 space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span>Amusement park</span>
                        <span>7:20 - 7:35</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Track your child&apos;s location history
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-gray-400">—</span>
                <span>to check their routes and ensure they&apos;re safe</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">—</span>
                <span>to track where they were to find a lost phone</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature 4 - Audio Monitoring */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 lg:p-12 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Listen to what is happening around your child
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">—</span>
                  <span>to keep calm if they don&apos;t answer calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">—</span>
                  <span>to protect from bullying or bad company</span>
                </li>
              </ul>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop"
                alt="Child wearing smartwatch"
                width={500}
                height={350}
                className="rounded-3xl shadow-xl"
              />
              {/* Phone overlay */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl p-6 w-64 border-4 border-blue-400">
                <div className="mb-4">
                  <div className="h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-2">
                    <div
                      className="w-full h-8 bg-blue-400 rounded"
                      style={{
                        clipPath:
                          "polygon(0 50%, 10% 30%, 20% 60%, 30% 20%, 40% 70%, 50% 40%, 60% 80%, 70% 30%, 80% 60%, 90% 40%, 100% 50%)",
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-sm mb-4">
                    <span className="font-semibold">30 Min</span>
                    <span className="font-semibold">07 Sec</span>
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <button className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    🔊
                  </button>
                  <button className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white">
                    ⬛
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid - SOS & Call Blocking */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {/* SOS Signal */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <div className="mb-8">
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&h=400&fit=crop"
                  alt="Children together"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Receive an SOS signal from your child
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-gray-400">—</span>
                <span>to help immediately if they need you</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">—</span>
                <span>
                  to get alerts if they can&apos;t call in a dangerous situation
                </span>
              </li>
            </ul>
          </div>

          {/* Block Calls */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <div className="mb-8">
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=500&h=400&fit=crop"
                  alt="Boy outdoors"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Block unwanted calls on your child&apos;s phone
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-gray-400">—</span>
                <span>Only allow calls from trusted contacts in phonebook</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">—</span>
                <span>Filter strangers, telemarketers, or potential risks</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Silent Mode & App Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Silent Mode */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <div className="mb-8">
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&h=400&fit=crop"
                  alt="Children on bench"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Call even when your child&apos;s phone is in silent mode
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-gray-400">—</span>
                <span>
                  to get your child&apos;s attention if they don&apos;t hear
                  their phone in their backpack
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">—</span>
                <span>to find their lost muted phone</span>
              </li>
            </ul>
          </div>

          {/* App Statistics */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <div className="mb-8">
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=500&h=400&fit=crop"
                  alt="Children with tablet"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Manage your child&apos;s app usage statistics
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-gray-400">—</span>
                <span>to reduce time in games and social media</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">—</span>
                <span>to check unsafe and age-restricted apps</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
