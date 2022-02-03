import Error from "./model/Error"

const SubmitHandler = (props) => {
    props.event.preventDefault()
    if(props.enteredName === ''){
       return(<Error message='Oiii'/>)
    }else{
        const user = {
            name : props.enteredName,
            age: props.enteredAge
        }

        console.log(user)

        props.onSaveUser(user)
    }
}

export default SubmitHandler