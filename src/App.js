import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import NewsContent from "./components/NewsContent/NewsContent";
import axios from "axios";
import apikey from "./data/config";
import Footer from "./components/Footer/Footer";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);

  const newsApi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(
        `${proxyUrl}https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&pageSize=${loadMore}&category=${category}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(newsArray);
  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, category, loadMore]);
  return (
    <div className="App">
      <NavBar setCategory={setCategory} />
      <NewsContent
        newsArray={newsArray}
        newsResults={newsResults}
        loadMore={loadMore}
        setLoadMore={setLoadMore}
      />
      <Footer />
    </div>
  );
}

export default App;
