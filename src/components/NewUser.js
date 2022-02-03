import Form from "./Form"
import InputCard from "./UI/InputCard"

const NewUser = (props) => {

    const saveUserHandler = (enteredUser) => {
        const user = {
            ...enteredUser,
            id: Math.random().toString()
        }
        props.onAddNewUser(user)
    }

    return (
        <InputCard>
           <Form onSaveUser={saveUserHandler} />
        </InputCard>
    )
}

export default NewUser