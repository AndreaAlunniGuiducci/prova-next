import styles from "./SubLabel.module.css";

const SubLabel = ({ text }) => {
  return (
    <>
      <p className={styles.subLabel}>{text}</p>
    </>
  );
};

export default SubLabel;
