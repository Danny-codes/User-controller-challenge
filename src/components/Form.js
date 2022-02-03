import styles from './Form.module.css'
import { useState } from 'react'
import Button from './UI/Buttton'
import Error from './model/Error'

const Form = (props) => {
    const [error, setError] = useState()

    const [enteredName, setEnteredName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const nameChangeHandler = (e) => {
        setEnteredName(e.target.value)
    }

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value)
        console.log(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if(enteredName === '' || enteredAge === ''){
            setError({
                title: 'Invalid Input',
                msg: 'Please enter a valid name and age'
            })
                return;
            
        }
        if(enteredAge < 0){
            setError({
                title: 'Invalid age',
                msg: 'Please enter a valid age'
            })
            return;
        }
        const user = {
            name : enteredName,
            age: enteredAge
        }

        console.log(user)

        props.onSaveUser(user)
    }
    const errorMessageCancel = () =>{
        setError(null)
    }
    return (
        <div>
            {error &&
                
             <Error onCancel={errorMessageCancel} title={error.title} msg={error.msg}></Error>
            }
        <form>
            <label className={styles.label}>Username</label>
            <input onChange={nameChangeHandler} className={styles.input}type="text"></input>
            <label className={styles.label}>Age (years)</label>
            <input onChange={ageChangeHandler} className={styles.input}type="number"></input>
            <Button onClick={submitHandler} type='button'>Add User</Button>
        </form>
        </div>
    )
}

export default Form