import PropTypes from "prop-types";
import classnames from "classnames";

import plusIcon from "../../assets/plus-icon.svg";
import minusIcon from "../../assets/minus-icon.svg";

import styles from "./Todo.module.css";

const Todo = ({ todos, handleAddition, handleSubstraction }) => {
  return (
    <div className={styles.todos}>
      {todos.map((todo, index, currentArray) => (
        <div
          key={index}
          className={classnames(styles.todo, {
            [styles.todoDivider]: !(currentArray.length === index + 1),
          })}
        >
          {todo.title}
          <div className={styles.todoIconWrapper}>
            <div className={styles.todoCount}>{todo.count}</div>
            <button
              className={styles.todoActionButton}
              onClick={() => handleSubstraction(index)}
            >
              <img src={minusIcon} alt="minus icon" />
            </button>
            <button
              className={styles.todoActionButton}
              onClick={() => handleAddition(index)}
            >
              <img src={plusIcon} alt="plus icon" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

Todo.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      count: PropTypes.number,
    })
  ),
  handleAddition: PropTypes.func,
  handleSubstraction: PropTypes.func,
};

export default Todo;
