import PropTypes from "prop-types";
import styles from "./Container.module.css";

const Component = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};

Component.propTypes = {
  children: PropTypes.node,
};

export default Component;
