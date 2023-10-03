import cartIcon from "../../assets/cart-icon.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img className={styles.navIcon} src={cartIcon} alt="Shopping Icon" />
      <h1 className={styles.navTitle}>Shopping List</h1>
    </nav>
  );
};
export default Navbar;
