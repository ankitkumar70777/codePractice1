import { useSelector,useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const { users, loader, error } = useSelector((state) => {
    return state.userReducer;
  });

    // to dispatch action use useDispatch
    const dispatch = useDispatch();

  return (
    <div>
      <p><button onClick={() => { dispatch(fetchUsers()) }}>import user</button></p>
      <h2>Number of Users : </h2>
      { loader }
      <p>users : </p>
      <ul>
        {users.map((user) => { 
          return <li key={ user.id}>{ user.name}</li>
        })}
      </ul>
      { error ? error.message : ""}
    </div>

  );
};

export default UserView;
