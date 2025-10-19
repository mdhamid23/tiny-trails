import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and App Downloads */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 text-white"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    fill="currentColor"
                  />
                  <circle cx="12" cy="9" r="2.5" fill="white" />
                </svg>
              </div>
              <span className="text-xl font-bold text-blue-500">
                Findmykids
              </span>
            </Link>

            {/* App Store Ratings */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">4.7</span>
                <span className="text-sm text-gray-600">on AppStore</span>
              </div>
              <p className="text-sm text-gray-600">2.5+k reviews</p>

              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">4.7</span>
                <span className="text-sm text-gray-600">on Google Play</span>
              </div>
              <p className="text-sm text-gray-600">1M reviews</p>

              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">4.7</span>
                <span className="text-sm text-gray-600">on App Gallery</span>
              </div>
              <p className="text-sm text-gray-600">5.4+k reviews</p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col gap-3">
              <Link href="#" className="inline-block">
                <Image
                  src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=200&h=60&fit=crop"
                  alt="Download on App Store"
                  width={140}
                  height={42}
                  className="rounded-lg"
                />
              </Link>
              <Link href="#" className="inline-block">
                <Image
                  src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=200&h=60&fit=crop"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                  className="rounded-lg"
                />
              </Link>
              <Link href="#" className="inline-block">
                <Image
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=60&fit=crop"
                  alt="Explore on App Gallery"
                  width={140}
                  height={42}
                  className="rounded-lg"
                />
              </Link>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#partners"
                  className="text-sm text-gray-600 hover:text-blue-500"
                >
                  For partners
                </Link>
              </li>
              <li>
                <Link
                  href="#gps-watch"
                  className="text-sm text-gray-600 hover:text-blue-500"
                >
                  Device
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-gray-600 hover:text-blue-500"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="#reviews"
                  className="text-sm text-gray-600 hover:text-blue-500"
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#help-center"
                  className="text-sm text-gray-600 hover:text-blue-500"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#subscription"
                  className="text-sm text-gray-600 hover:text-blue-500"
                >
                  Purchase app subscription
                </Link>
              </li>
              <li>
                <Link
                  href="#legal"
                  className="text-sm text-gray-600 hover:text-blue-500"
                >
                  Legal and Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">
              Follow us to receive news and tips for parents
            </h3>
            <div className="flex gap-4">
              <Link href="#" className="text-blue-600 hover:text-blue-700">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link href="#" className="text-pink-600 hover:text-pink-700">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link href="#" className="text-blue-500 hover:text-blue-600">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">
              <p>© 2017 - 2025 LETEM LTD</p>
              <p className="mt-1">1 Arch Makariou III Avenue,</p>
              <p>1 st Floor, office 101,</p>
              <p>Lakatameia, Nicosia, 2324, Cyprus</p>
              <p className="mt-2">info@findmykids.org</p>
            </div>

            <div className="text-sm text-gray-600 text-center md:text-right">
              <p>Privacy of your and your children&apos;s</p>
              <p>data is important to us.</p>
              <div className="mt-4 border-2 border-black px-6 py-3 font-bold text-2xl">
                500
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
