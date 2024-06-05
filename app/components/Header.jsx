"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-gray-900 px-[20px] py-8 shadow-md bg-[212529] text-white lg:px-[100px] md:px-[100px]">
      <h2 className="text-2xl font-bold uppercase">meirrr&apos;s blog</h2>
      <nav className="text-sm lg:pr-[50px]">
        <ul className="flex space-x-3 font-bold text-[16px] lg:space-x-8 md:space-x-4">
          <li className=" hover:text-blue-900">
            <Link href="/">Home</Link>
          </li>
          <li className=" hover:text-blue-900">
            <Link href="/about">About</Link>
          </li>
          <li className=" hover:text-blue-900">
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
