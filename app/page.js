import Link from "next/link";
import Card from "./components/Card";
import data from "./data";

export default function Home() {
  return (
    <div className="container mx-auto px-[5px] py-8 mt-2 md:px-[30px] lg:mt-4">
      <div className="mx-auto shadow-md p-[15px] rounded-lg max-w-screen-lg">
        <button className="text-[12px] uppercase p-[3px] mb-[15px] shadow-md bg-gray-900 text-white">
          Blog
        </button>
        <h2 className="text-3xl font-bold mb-2">
          Welcome to meirrr&apos;s Blog
        </h2>
        <p className="mb-4 text-[14px] text-gray-700 text-base">
          Discover interesting articles on various topics. Dive into our blog to
          find out more!
        </p>
        <Link
          href="/blog"
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2"
        >
          Go to Blog
        </Link>
        <p className="text-[14px] mt-2 font-light">by @meirrrrrr</p>
      </div>
      <div className="w-full py-20 md:py-24 lg:py-15">
        <div className="flex flex-col items-center justify-center space-y-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Blog Posts
            </h1>
            <p className="mt-5">
              Discover our carefully curated collection of the most captivating
              and informative blog posts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 max-w-screen-lg">
            {data.map((post) => (
              <div
                key={post.id}
                className="flex justify-center"
                href={`/blog/${post.id}`}
              >
                <Card
                  title={post.title}
                  date={post.date}
                  author={post.author}
                  description={post.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
