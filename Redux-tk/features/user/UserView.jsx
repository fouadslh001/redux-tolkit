import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {

  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
      <h1>List of User:</h1>
      {data.loading && <div>Loading....</div> }
      {!data.loading && data.error ? <div>Error: {data.error} </div> : null}
      {!data.loading && data.data.length ? (
        <ul>
        {data.data.map((user) => <li key={user.id}>{user.name}</li> )}
      </ul>
      ): null }
    </div>
  )
}

export default UserView