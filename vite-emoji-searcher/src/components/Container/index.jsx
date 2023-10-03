import styles from "./Container.module.css";

import PropTypes from "prop-types";
const Component = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};

Component.propTypes = {
  children: PropTypes.node,
};

export default Component;
