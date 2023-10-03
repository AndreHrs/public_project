import PropTypes from "prop-types";
import styles from "./Info.module.css";

const Info = ({ todos, getTotalCount, onDeleteAll }) => {
  return (
    <div className={styles.info}>
      <div className={styles.infoTotal}>
        {" "}
        <p>{`Total List ${todos.length}`}</p>
      </div>
      <div className={styles.infoTotal}>
        {" "}
        <p>{`Total Count ${getTotalCount}`}</p>
      </div>
      <button className={styles.deleteAllButton} onClick={onDeleteAll}>
        deleteAllList
      </button>
    </div>
  );
};

Info.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      count: PropTypes.number,
    })
  ),
  getTotalCount: PropTypes.func,
  onDeleteAll: PropTypes.func,
};

export default Info;
