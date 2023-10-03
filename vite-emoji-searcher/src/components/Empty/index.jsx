import styles from "./Empty.module.css";

import PropTypes from "prop-types";
const Component = ({ text }) => {
  return <div className={styles.empty}>{text}</div>;
};

Component.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Component;
