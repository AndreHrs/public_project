import styles from "./EmojiBox.module.css";
import { useEffect, useState } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
const Emoji = ({ title, symbol }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSelected(false), 600);
    return () => clearTimeout(timer);
  }, [selected]);

  return (
    <div
      onClick={() => {
        navigator.clipboard.writeText(symbol);
        setSelected(true);
      }}
      className={classnames(styles.emojiBox, {
        [styles.selected]: selected,
      })}
    >
      <p
        className={styles.emoji}
        dangerouslySetInnerHTML={{
          __html: `&#${symbol.codePointAt(0)}`,
        }}
      ></p>

      <p className={styles.emojiText}>{title}</p>
    </div>
  );
};

Emoji.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
};

export default Emoji;
