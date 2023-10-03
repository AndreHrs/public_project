import styles from "./Emojis.module.css";
import Emojibox from "../Emojibox";
import Empty from "../Empty";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { searchEmojis } from "../../utils/searchEmojis";

const Emojis = ({ emojisData, searchText }) => {
  const [filteredEmojis, setfilteredEmojis] = useState([]);

  useEffect(() => {
    setfilteredEmojis(
      searchEmojis({
        emojisData,
        searchText,
      })
    );
  }, [emojisData, searchText]);

  if (filteredEmojis.length > 0) {
    return (
      <div className={styles.emojisGrid}>
        {filteredEmojis.map((data, index) => (
          <Emojibox
            key={index}
            title={data.unicodeName}
            symbol={data.character}
          />
        ))}
      </div>
    );
  } else {
    return <Empty text="No emoji with those name found" />;
  }
};

Emojis.propTypes = {
  emojisData: PropTypes.array,
  searchText: PropTypes.string,
};

export default Emojis;
