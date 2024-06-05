import React from "react";
import Card from "../components/Card";
import Link from "next/link";
import data from "../data";

export default function Page() {
  return (
    <div className="container mx-auto px-10 py-8">
      <h1 className="text-xl font-bold mb-4">Blog</h1>
      {data.map((post) => (
        <Link key={post.id} href={`/blog/${post.id}`} passHref>
          <div className="cursor-pointer">
            <Card
              title={post.title}
              date={post.date}
              author={post.author}
              description={post.description}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
