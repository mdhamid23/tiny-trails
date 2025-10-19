"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  const articles = [
    {
      title: "5 EASY Discipline",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
      link: "#",
    },
    {
      title: "BEST Family Tracking Apps 2024 [Android/iOS]",
      image:
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
      link: "#",
    },
    {
      title: "Best Apple Watch for Kids - Pros & Cons",
      image:
        "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=300&fit=crop",
      link: "#",
    },
    {
      title: "SIM card for Kids Smartwatch",
      image:
        "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=400&h=300&fit=crop",
      link: "#",
    },
    {
      title: "Best Smart Watch For Kids - Models 2024",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      link: "#",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white" id="blog">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Check tips and tricks for parents in our Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={article.link}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-4 line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 text-blue-500 group-hover:gap-3 transition-all">
                  <span className="text-sm font-semibold">Read more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
