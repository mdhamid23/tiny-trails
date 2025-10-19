import { Star } from "lucide-react";
import Image from "next/image";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Nida Zahra",
      rating: 5,
      source: "Review from Google Play",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      text: "Really happy with this app. It not only keeps your mind at peace by notifying about your child's precise location and when they leave or arrive at certain premises but it also has this unique feature which allows you to listen to their surroundings which adds another huge layer of security itself as we know they are doing okay and are safe. Happy with the trial and going to buy subscription.",
    },
    {
      name: "Diana K",
      rating: 5,
      source: "Review from Google Play",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      text: "Excellent and reliable. I first installed this on a test phone and I was so happy that I bought a lifetime subscription. Then I purchased gps watches, because they're easier for younger kids to have at all times. Now that the kids have phones, this is an exceptional app. I love that I can watch their route in real-time. It gives me HUGE peace of mind.",
    },
    {
      name: "Lamara Leigh",
      rating: 5,
      source: "Review from Google Play",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      text: "The app is good if you want to track your child's location. How did they get there? Also, if they aren't answering your messages, phone calls, or you just want peace of mind of who they are with, you can listen to their surroundings. I use it as I started giving my child independence of walking from car into school themselves, and I always listen to surrounds to make sure he made it inside school safely.",
    },
    {
      name: "Claire Ki",
      rating: 5,
      source: "Review from Google Play",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      text: "Amazing.. My son likes being able to stay in touch with friend's as we live in the country and don't see them as often. I both love the features and privacy aspect as my son is still too young for Instagram or other social media apps. This app is definitely what I needed, It shows features that I definitely want for my son to be safe.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
          1M+ reviews on Google Play and AppStore
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-3xl p-6 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-xs text-gray-600 italic">
                    {review.source}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="font-semibold">{review.rating}</span>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 flex-1">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Trusted by media */}
        <div className="mt-24">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Trusted by top media
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            <div className="text-4xl font-bold">BBC</div>
            <div className="text-2xl font-serif italic">VANITY FAIR</div>
            <div className="text-2xl font-bold">DAILY EXPRESS</div>
            <div className="text-3xl font-bold">The Sun</div>
            <div className="text-3xl font-bold">Mirror</div>
            <div className="text-2xl font-bold text-red-600">UTOPIA</div>
            <div className="text-2xl font-light">DIG glass</div>
          </div>
        </div>
      </div>
    </section>
  );
}
