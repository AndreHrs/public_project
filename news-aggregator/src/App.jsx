import Container from "./components/Container";
import Error from "./components/Error";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import NewsList from "./components/NewsList";
import { getNews } from "./service/getNews";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [articles, setArticles] = useState([]);

  const { category } = useParams();
  const DEFAULT_SEARCH_QUERY = "technology";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await getNews({
        searchQuery: category || DEFAULT_SEARCH_QUERY,
      });

      if (!result) {
        setIsError(true);
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      setArticles(result.articles);
    };

    fetchData();
  }, [category]);

  return (
    <>
      <Navbar />
      <Container>
        {isLoading && <Loading />}
        {isError && <Error />}
        {!isLoading && articles.length > 0 && <NewsList articles={articles} />}
      </Container>
    </>
  );
}

export default App;
