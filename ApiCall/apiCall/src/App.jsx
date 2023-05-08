import { useState } from "react";
import SearchHeader from "./SearchHeader";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div className="app">
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceholder={images} />
    </div>
  );
}

export default App;
