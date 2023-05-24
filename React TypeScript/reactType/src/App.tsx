import "./App.css";
import Home from "./components/Home";
import Instructor from "./components/Instructor";
import InstructorList from "./components/InstructorList";

function App() {
  const instructor = {
    firstName: "Can",
    lastName: "Boz",
  };

  const instructorList = [
    {
      firstName: "Can",
      lastName: "Boz",
    },
    {
      firstName: "Kenan",
      lastName: "Kuzgun",
    },
  ];

  return (
    <div className="App">
      <Home name="Can Boz" courseNumber={5} isBest={true} />
      <Instructor instructorNameLastName={instructor} />
      <InstructorList instructorListProp={instructorList} />
    </div>
  );
}

export default App;
