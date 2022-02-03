import styles from './InputCard.module.css'

const InputCard = (props) => {
    return (
        <div className={styles.inputCard}>
            {props.children}
        </div>
    )
}

export default InputCard;
