"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className=" bg-blue-500 rounded-lg flex items-center justify-center">
              <Image
                src="/images/child-care-logo.png"
                alt="TINYTRAILS Logo"
                width={50}
                height={50}
              />
            </div>
            <span className="text-xl font-bold text-blue-500">TINYTRAILS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
              <span className="text-sm font-medium">App</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
              <span className="text-sm font-medium">Features</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <Link
              href="#gps-watch"
              className="text-sm font-medium hover:text-blue-500"
            >
              Device
            </Link>

            <Link
              href="#help"
              className="text-sm font-medium hover:text-blue-500"
            >
              Contact Us
            </Link>
            <Link
              href="#help"
              className="text-sm font-medium hover:text-blue-500"
            >
              About Us
            </Link>
            <Link
              href="#help"
              className="text-sm font-medium hover:text-blue-500"
            >
              Privacy Policy
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1 cursor-pointer">
              <span className="text-sm font-medium">English</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <Button className="hidden md:inline-flex bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6">
              Sign in
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col gap-4">
              <Link href="#app" className="text-sm font-medium">
                App
              </Link>
              <Link href="#features" className="text-sm font-medium">
                Features
              </Link>
              <Link href="#gps-watch" className="text-sm font-medium">
                Device
              </Link>
              <Link href="#blog" className="text-sm font-medium">
                Blog
              </Link>
              <Link href="#help" className="text-sm font-medium">
                Help Center
              </Link>
              <Link href="#company" className="text-sm font-medium">
                Company
              </Link>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-full">
                Sign in
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
