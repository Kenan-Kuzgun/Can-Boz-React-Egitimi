import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Courses from "./CoursesDeneme";
import Loading from "./loading";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const deleteCourse = (id) => {
    const afterDeletedCourses = courses.filter((course) => course.id !== id);
    setCourses(afterDeletedCourses);
  };

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:3000/courses");
      setCourses(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }

    const response = await axios.get("http://localhost:3000/courses");
    setCourses(response.data);
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          {courses.length === 0 ? (
            <div>
              <button
                onClick={() => {
                  fetchCourses();
                }}
              >
                Yenile
              </button>
            </div>
          ) : (
            <Courses coursesProp={courses} removeCourse={deleteCourse} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
