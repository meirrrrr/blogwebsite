"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-[5px] py-8">
      <div className="container mx-auto shadow-md p-[15px] rounded-lg">
        <button className="text-[10px] uppercase p-[3px] mb-[10px] shadow-md">
          Adventure
        </button>
        <h2 className="text-2xl font-bold mb-2">
          Welcome to meirrr&apos;s Blog
        </h2>
        <p className="mb-4 text-[12px]">
          Discover interesting articles on various topics. Dive into our blog to
          find out more!
        </p>
        <Link href="/blog" className="text-blue-500 hover:underline">
          Go to Blog
        </Link>
      </div>
      <div></div>
    </div>
  );
}
