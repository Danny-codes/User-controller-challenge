import styles from './User.module.css'

const User = (props) => {

    const name = props.name
    const age = props.age

    return(
            <li className={styles.userLi}>
                <p>{`${name}  ( ${age} years old)`}</p>
            </li>
    )
}

export default User