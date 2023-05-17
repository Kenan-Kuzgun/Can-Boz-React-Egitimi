import { useContext } from "react";
import authContext from "./Auth-context";
function Auth() {
  const { status, login } = useContext(authContext);
  return (
    <div>
      <h1>Giriş yapıldı mı?</h1>
      {status ? <p>Evet</p> : <p>Hayır</p>}
      <button onClick={login}>Giriş yap.</button>
    </div>
  );
}

export default Auth;
