import SubLabel from "../components/subLabel";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Card1 from "../components/Card1";
import TrendsCard from "../components/TrendsCard";

const features = () => {
  const subLabel = [
    { title: "DASHBOARD" },
    { title: "CHROME" },
    { title: "APPS" },
    { title: "RESOURCES" },
    { title: "MEGA MENÙ" },
  ];

  const card1 = [
    {
      title: "Meeting schedule",
      date: "2:20PM - 4:20PM",
      text: "Create a headline that is informative and will capture readers",
    },
    {
      title: "Meeting schedule",
      date: "03 May 2020",
      text: "Great blog posts don't just happen even the best bloggers need it",
    },
    {
      title: "UI Conference",
      date: "10AM Jen 2021 ",
      text: "Airways - A front-end solution for airlines build whit React.JS",
    },
  ];
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.subLabel}>
          <div className={styles.subLabelText}>
            {subLabel.map((item, index) => (
              <SubLabel key={index} text={item.title} />
            ))}
          </div>
          <div>
            <button>Docs & Components</button>
          </div>
        </div>
        <hr />
        <div className={styles.card}>
          {card1.map((item, index) => (
            <Card1
              key={index}
              title={item.title}
              date={item.date}
              text={item.text}
            />
          ))}
        </div>
        <div>
          <TrendsCard subtitle={'Latest trends'} graphic={'https://media.blogfinanza.com/wp-content/uploads/2015/01/09093047/grafico-lineare.png'}/>
        </div>
      </div>
    </Layout>
  );
};

export default features;
