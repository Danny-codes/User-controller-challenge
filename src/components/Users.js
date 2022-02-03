import User from "./User";
import styles from "./Users.module.css";

const Users = (props) => {
  const usersArray = props.usersArray;

  return (
    <div>
      {usersArray.map((user) => (
        <ul key={user.id}className={styles.UsersDiv}>
          <User id={user.id} name={user.name} age={user.age} />
        </ul>
      ))}
    </div>
  );
};

export default Users;
