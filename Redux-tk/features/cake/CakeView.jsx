import {useSelector, useDispatch} from "react-redux"; // React-Redux library. It allows you to extract data from the Redux store's state
import {ordered, reStocked} from "./cakeSlice";


const CakeView = () => {

  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes)
  const dispatch = useDispatch(); //gives access to the dispatch function from the Redux store

  return (
    <div>
        <h1>number of cakes: {numberOfCakes} </h1>
        <button onClick={() => {dispatch(ordered())}}>order cake</button>
        <button onClick={() => {dispatch(reStocked(1))}}>restoked cake</button>
    </div>
  )
}

export default CakeView