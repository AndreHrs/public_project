import axios from "axios";
import { useEffect, useState } from "react";

import Container from "./components/Container";
import Emojis from "./components/Emojis";
import Empty from "./components/Empty";
import Input from "./components/Input";
import Navbar from "./components/Navbar";

function App() {
  const [emojiData, setEmojiData] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsError(false);
      setIsLoading(true);
      try {
        const res = await axios.get(
          "https://emoji-api.com/emojis?access_key=6a78d137424819747d54cb3a815ee7540084abc5"
        );
        setEmojiData(res.data);
      } catch (error) {
        console.error(error);
        setIsError(true);
      }
      setIsLoading(false);
    }

    fetchData();
  }, []);

  const handleSearchEmojis = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Input onChange={handleSearchEmojis} value={searchText} />
        {isLoading && <Empty text="Loading data..." />}{" "}
        {isError && <Empty text="Empty Data" />}
        <Emojis emojisData={emojiData} searchText={searchText} />
      </Container>
    </>
  );
}

export default App;
