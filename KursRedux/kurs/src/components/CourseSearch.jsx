import React from "react";
import { changeSearchTerm } from "../store/slices/courseSlice";
import { useSelector, useDispatch } from "react-redux";
function CourseSearch() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => {
    return state.course.stateTerm;
  });
  return (
    <div className="listHeader">
      <h3 className="title is-3">Kurslarım</h3>
      <div className="search field is-horizontal">
        <label className="label">Ara</label>
        <input
          type="text"
          className="input"
          onChange={(event) => {
            dispatch(changeSearchTerm(event.target.value));
          }}
        />
      </div>
    </div>
  );
}

export default CourseSearch;
