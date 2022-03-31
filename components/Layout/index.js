import { useRouter } from "next/router";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./Layout.module.css";
import Label from "../Label";

const Layout = ({ children }) => {
  const router = useRouter();
  const label = [
    { title: "FEATURES", subtitle: "Apps & Components", link: "/features" },
    {
      title: "ACCOUNTING",
      subtitle: "Finance & Reporting",
      link: "/accounting",
    },
    { title: "ECOMMERCE", subtitle: "Orders & Delivery", link: "/ecommerce" },
    { title: "AUDIENCE", subtitle: "Customer Directory", link: "/audience" },
    { title: "AUDIT", subtitle: "Activities & Logs", link: "/audit" },
  ];
  return (
    <>
      <Header />
      <div className={styles.label}>
        {label.map((item, index) => (
          <Label
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            link={item.link}
          />
        ))}
      </div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
