import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function DownloadSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Millions of parents worldwide already use the TinyTrails app
            </h2>
            <p className="text-lg text-gray-700">
              Download the app and worry less about your child
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6 text-lg">
              Download now
            </Button>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
              alt="World map with locations"
              width={600}
              height={450}
              className="rounded-3xl"
            />
            {/* Overlayed profile markers */}
            <div className="absolute top-12 left-12 w-16 h-16 rounded-full border-4 border-blue-400 overflow-hidden shadow-lg bg-white">
              <Image
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=100&h=100&fit=crop"
                alt="Child"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-24 right-24 w-16 h-16 rounded-full border-4 border-blue-400 overflow-hidden shadow-lg bg-white">
              <Image
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=100&h=100&fit=crop"
                alt="Child"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-24 left-24 w-16 h-16 rounded-full border-4 border-blue-400 overflow-hidden shadow-lg bg-white">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
                alt="Child"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-12 right-16 w-16 h-16 rounded-full border-4 border-blue-400 overflow-hidden shadow-lg bg-white">
              <Image
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop"
                alt="Child"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
