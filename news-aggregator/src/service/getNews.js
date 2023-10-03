import axios from "axios";

const NEWS_API_BASE_URL = import.meta.env.VITE_REACT_APP_NEWS_API_URL;
const NEWS_API_KEY = import.meta.env.VITE_REACT_APP_NEWS_API_KEY;

export const getNews = async ({ searchQuery = "technology" }) => {
  try {
    const path = "/everything";
    const query = `?q=${searchQuery}&apiKey=${NEWS_API_KEY}`;
    const endpoint = `${NEWS_API_BASE_URL}${path}${query}`;

    const res = await axios.get(endpoint);

    if (res.status === 200) {
      const additionalObj = {
        category: searchQuery,
      };
      const resData = {
        ...res.data,
        ...additionalObj,
      };
      return resData;
    }
  } catch (error) {
    console.error("Error getting news::", error);
  }
};
