import React from "react";
import { useSelector } from "react-redux";

function CourseList() {
  const courses = useSelector((state) => {
    return state.course.data;
  });
  return (
    <div>
      {courses.map((course) => {
        return (
          <div key={course.id} class="card">
            <header class="card-header">
              <p class="card-header-title">{course.name}</p>
              <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">{course.description}</div>
              <div class="content">{course.cost}</div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">
                Sil
              </a>
            </footer>
          </div>
        );
      })}
    </div>
  );
}

export default CourseList;
