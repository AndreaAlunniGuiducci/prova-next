import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./label.module.css";

const Label = ({ title, subtitle, link }) => {
  const router = useRouter();
  return (
    <Link href={link}>
      <div
        className={
          router.pathname === { link } ? styles.selectedLabel : styles.label
        }
      >
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
    </Link>
  );
};

export default Label;
