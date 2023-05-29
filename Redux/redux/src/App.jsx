import "./App.css";
import CourseList from "./components/CourseList";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { calculateTotal } from "./control/cartSlice";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <div className="App">
      <Navbar />
      <CourseList />
    </div>
  );
}

export default App;
