import { useEffect, useState } from "react";

const Sport = ({ category = "sports", country="in" }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchNews();
  }, [category]);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json`
      );
      const data = await res.json();
      setArticles(data.articles || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
    setLoading(false);
  };

  if (loading) {
    return <h2 className="text-center mt-10 text-xl">Loading News...</h2>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {category} News
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((news, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={
                news.urlToImage ||
                "https://c.ndtvimg.com/2022-02/lcc6k61o_arjun-tendulkar-bcci-ipl_625x300_13_February_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675"
              }
              alt="news"
              className="rounded-t-lg h-48 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">
                {news.title}
              </h2>
              <p className="text-sm text-gray-600 mb-3">
                {news.description || "No description available"}
              </p>

              <a
                href={news.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                Read Full Article →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sport;
