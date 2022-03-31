import styles from './Card1.module.css'

const Card1 = ({title, date, text})=>{
    return (
        <div className={styles.card1}>
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{text}</p>
        </div>
    )
}

export default Card1