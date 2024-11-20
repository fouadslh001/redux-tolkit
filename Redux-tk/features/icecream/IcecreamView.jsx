import {useSelector, useDispatch} from "react-redux";
import {ordered, reStocked} from "./icecreamSlice";

const IcecreamView = () => {

  const numberOfIcecreams = useSelector((state) => state.icecream.numberOfIcecreams)
  const dispatch = useDispatch();
  return (
    <div>
        <h1>number of icecream: {numberOfIcecreams} </h1>
        <button onClick={() => {dispatch(ordered())}}>order icecream</button>
        <button onClick={() => {dispatch(reStocked(1))}}>restoked icecream</button>
    </div>
  )
}

export default IcecreamView;