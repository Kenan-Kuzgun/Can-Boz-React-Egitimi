import Course from "./Course";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Courses({ coursesProp, removeCourse }) {
  const [index, setIndex] = useState(0);
  const { content, title, price } = coursesProp[index];
  const checkIndex = (index) => {
    if (index < 0) {
      return coursesProp.length - 1;
    }
    if (index > coursesProp.length - 1) {
      return 0;
    }
    return index;
  };

  const prevCourse = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const nextCourse = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const handleRandom = () => {
    let random = Math.floor(Math.random() * coursesProp.length);
    if (random === index) {
      random = index + 1;
    }
    setIndex(checkIndex(random));
  };

  return (
    <div>
      <div>
        <h2>Kurslarım</h2>
      </div>
      <button onClick={handleRandom}>Rastgele Kurs</button>
      <div className="conteiner">
        <button onClick={prevCourse}>
          <FaChevronLeft />
        </button>
        <div className="courseContainer">
          <div>
            <div className="cardTitlePrice">
              <h2 className="cardTitle">{title}</h2>
              <h4 className="cardPrice">{price}TL</h4>
            </div>

            <p>{content}</p>
          </div>
        </div>
        <button onClick={nextCourse}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Courses;
