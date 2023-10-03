import PropTypes from "prop-types";
import styles from "./AddInput.module.css";

const Container = ({ onSubmit, value, onChange }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={onChange}
      />
      <button className={styles.addButton} type="submit">
        Add
      </button>
    </form>
  );
};

Container.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Container;
