import "./App.css";
import Event from "./components/Event";
import Home from "./components/Home";
import Instructor from "./components/Instructor";
import InstructorList from "./components/InstructorList";
import LoginCheck from "./components/LoginCheck";
import ReducerExemple from "./components/ReducerExemple";
import Request from "./components/Request";

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
      <Request status="loading" />
      <Event />
      <LoginCheck />
      <ReducerExemple />
    </div>
  );
}

export default App;
