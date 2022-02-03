import styles from './Error.module.css'
import Button from '../UI/Buttton'

const Error = (props) => {
    return (
        <div>
        <div className={styles.background} onClick={props.onCancel} />
        <div className={styles.errorField}>
            <header className={styles.header}>
                {props.title}
            </header>
            <div>
                <p className={styles.p}>{props.msg}</p>
            </div>
            <footer>
                <Button onClick={props.onCancel} type='submit' className={styles.button}>Cancel</Button>
                <span className={styles.span}></span>
            </footer>
        </div>
        </div>
    )
}

export default Error
