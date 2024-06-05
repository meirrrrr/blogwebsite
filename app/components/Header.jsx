"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-[30px] py-[15px] shadow-md bg-gray-900 text-white lg:px-[100px] md:px-[100px]">
      <h2 className="text-2xl font-bold uppercase">meirrr&apos;s blog</h2>
      <nav className="text-sm">
        <ul className="flex space-x-3 lg:space-x-4 md:space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
