import styles from "./TrendsCard.module.css";

const TrendsCard = ({ subtitle, graphic }) => {
  const trends = [
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      listTitle: "Top Sales",
      listDescription: "pressup email",
      trend: "+815",
    },
    {
      icon: "https://flyclipart.com/thumb2/vimeo-icon-450764.png",
      listTitle: "Top Engagement",
      listDescription: "KT.com",
      trend: "+825",
    },
  ];

  return (
    <div className={styles.trendsCard}>
      <div>
        <h3>Trends</h3>
        <p>{subtitle}</p>
        <img src={graphic}></img>
      </div>
      <ul className={styles.trendsList}>
        {trends.map((item, key) => (
          <li>
            <img src={item.icon}></img>
            <div className={styles.listText}>
              <p className={styles.listTitle}>{item.listTitle}</p>
              <p className={styles.listDescription}>{item.listDescription}</p>
            </div>
            <p className={styles.trend}>{item.trend}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendsCard;
