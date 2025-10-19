import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
          Choose your plan
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-500 mb-4">Free Plan</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold">0 BDT</span>
            </div>
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full py-6 mb-8">
              Join for FREE
            </Button>

            <ul className="space-y-4">
              <li className="text-gray-700">current location</li>
              <li className="text-gray-700">1 day of location history</li>
              <li className="text-gray-700">
                movement notifications for 1 Place
              </li>
              <li className="text-gray-700">3 loud signals</li>
            </ul>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-blue-500 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-6 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-blue-500 mb-4">
              Premium Plan
            </h3>
            <div className="mb-2">
              <span className="text-5xl font-bold">420 BDT</span>
              <span className="text-gray-600">/month</span>
            </div>
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full py-6 mb-8">
              First 7 days free
            </Button>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  accurate real-time location
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  unlimited movement notifications and routes history
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">unlimited loud signals</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  monitor apps and games usage
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">SOS signal from child</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm text-gray-600 mt-8">
          Kid&apos;s app is available for free. The subscription does not
          include access to the Sound Around feature
        </p>
      </div>
    </section>
  );
}
