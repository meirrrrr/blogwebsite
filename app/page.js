"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Meirrr's Blog</h1>
      <p className="mb-6">
        Discover interesting articles on various topics. Dive into our blog to
        find out more!
      </p>
      <Link href="/blog" className="text-blue-500 hover:underline">
        Go to Blog
      </Link>
    </div>
  );
}
