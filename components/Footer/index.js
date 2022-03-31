import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>2022 &copy; <b>RWSdigital</b></p>

      <div className={styles.links}>
        <p className={styles.link}>About</p>
        <p className={styles.link}>Support</p>
        <p className={styles.link}>Purchase</p>
      </div>

    </div>
  );
};

export default Footer;
