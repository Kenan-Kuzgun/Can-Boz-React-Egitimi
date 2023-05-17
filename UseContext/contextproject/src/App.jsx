import { useState } from "react";
import "./App.css";
import AuthContext from "../content/Auth-context";
import Auth from "../content/auth";

function App() {
  const [login, setLogin] = useState(false);
  const loginAuth = () => {
    setLogin(true);
  };

  return (
    <AuthContext.Provider value={{ status: login, login: loginAuth }}>
      <Auth />
    </AuthContext.Provider>
  );
}

//Value içerisine tanımlanan değerlere içerisine geçtiğimiz componentlerden ulaşabiliyoruz.

export default App;

// useContext props kullanmadan, data taşımaya olanak verir.
