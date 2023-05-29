import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseItem from "./CourseItem";
import { clearCart } from "../control/cartSlice";

function CourseList() {
  const { cartItems, quantity, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <>
      {quantity < 1 ? (
        <section>
          <header>
            <h2>Sepetim</h2>
            <h4>bomboş</h4>
          </header>
        </section>
      ) : (
        <section>
          <header>
            <h2>Sepetim</h2>
          </header>
          <div>
            {cartItems.map((item, id) => {
              return <CourseItem key={id} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4>
                Toplam Tutar <span>{total} TL</span>
              </h4>
            </div>
            <button type="submit" onClick={() => dispatch(clearCart())}>
              Temizle
            </button>
          </footer>
        </section>
      )}
    </>
  );
}

export default CourseList;
