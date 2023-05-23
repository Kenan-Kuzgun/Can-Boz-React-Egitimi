import "./App.css";
import { Routes, Route } from "react-router-dom";
import GeneralForm from "./components/GeneralForm";
import PortalForm from "./components/PortalForm";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" exact element={<GeneralForm />} />
        <Route path="/portal" exact element={<PortalForm />} />
      </Routes>
    </div>
  );
}

export default App;
