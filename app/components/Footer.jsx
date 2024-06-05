import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold uppercase">meirrr&apos;s blog</h2>
            <p className="text-sm">
              © 2024 Meirrr&apos;s Blog. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              Facebook
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              Twitter
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              Instagram
            </Link>
          </div>
          <div>
            <Link href="/about" className="text-gray-400 hover:text-white">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
