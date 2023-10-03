import styles from "./Error.module.css";

const Component = () => {
  return (
    <div className={styles.container}>
      <p className={styles.error}>Error happened, please reload page!</p>
    </div>
  );
};

export default Component;
