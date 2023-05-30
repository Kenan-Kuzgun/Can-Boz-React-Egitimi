import React from "react";
import { useSelector } from "react-redux";
function CourseValue() {
  const totalCost = useSelector(({ form, course: { data, searchTerm } }) => {
    const filtered = data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    let cost = 0;
    for (let course of filtered) {
      cost += course.cost;
    }
    return cost;
  });
  return <div>Toplam Tutar :{totalCost} TL</div>;
}

export default CourseValue;

// course.name.toLowerCase().includes(searchTerm.toLowerCase())).reduce((acc,course)=>acc+course.cost,0)
