import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCourse } from "../store/slices/courseSlice";

function CourseList() {
  const dispatch = useDispatch();
  const { courses } = useSelector(({ form, course: { data, searchTerm } }) => {
    const filtered = data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      courses: filtered,
    };
  });
  return (
    <div>
      {courses.map((course) => {
        return (
          <div key={course.id} className="card">
            <header className="card-header">
              <p className="card-header-title">{course.name}</p>
              <button className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div className="card-content">
              <div className="content">{course.description}</div>
              <div className="content" style={{ opacity: 0.5 }}>
                {course.cost} TL
              </div>
            </div>
            <footer className="card-footer">
              <button
                onClick={() => {
                  dispatch(removeCourse(course.id));
                }}
                className="card-footer-item"
              >
                Sil
              </button>
            </footer>
          </div>
        );
      })}
    </div>
  );
}

export default CourseList;
