export default function Page() {
  return (
    <div className="container items-center p-4 m-10 md:px-6 lg: py-12 flex justify-center max-w">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          About the Blog
        </h2>
        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Welcome to our blog, where we share the latest insights, trends, and
          expert opinions on the ever-evolving world of blogging. Our mission is
          to inspire and empower our readers with valuable content that helps
          them navigate the dynamic landscape of digital content creation and
          marketing.
        </p>
        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Behind this blog is a passionate team of writers, researchers, and
          industry professionals who are dedicated to providing you with the
          most up-to-date and insightful information. We believe that by sharing
          our knowledge and experiences, we can help you unlock your full
          potential as a blogger or content creator.
        </p>
      </div>
    </div>
  );
}
