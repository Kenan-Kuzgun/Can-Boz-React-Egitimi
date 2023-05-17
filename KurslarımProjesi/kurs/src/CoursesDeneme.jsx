import Course from "./Course";

function Courses({ coursesProp, removeCourse }) {
  console.log(coursesProp);
  return (
    <div>
      <div>
        <h2>Kurslarım</h2>
      </div>
      <div className="conteiner">
        {coursesProp.map((course) => {
          return (
            <Course
              key={course.id}
              {...course}
              removeOneCourse={removeCourse}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
