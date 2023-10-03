import styles from "./Navbar.module.css";
import PropTypes from "prop-types";

import searchIcon from "../../assets/search-icon.svg";
import emojiIcon from "../../assets/emoji-icon.svg";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img src={emojiIcon} alt="emoji icon" className={styles.navIcon} />
      <img src={searchIcon} alt="search icon" className={styles.navIcon} />
      <span>Emoji List</span>
    </nav>
  );
};

export default Navbar;
