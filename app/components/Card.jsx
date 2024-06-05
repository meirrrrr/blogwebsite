function Card({ title, date, author, description }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 text-gray-900">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
          {date}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
          {author}
        </span>
      </div>
    </div>
  );
}

export default Card;
