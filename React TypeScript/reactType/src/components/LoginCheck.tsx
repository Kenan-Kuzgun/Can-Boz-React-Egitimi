import { useState } from "react";

type UserType = {
  name: string;
  email: string;
  phone: string;
};

function LoginCheck() {
  const [user, setUser] = useState<UserType | null>({} as UserType);
  const handleLogin = () => {
    setUser({
      name: "Can",
      email: "cc@hotmail.com",
      phone: "734856387563",
    });
  };
  const handleLogout = () => {
    setUser({} as UserType);
  };

  return (
    <>
      <div style={{ marginTop: 20 }}>
        <button onClick={handleLogin}>Giriş Yap</button>
        <button onClick={handleLogout}>Çıkış Yap</button>
      </div>
      <div>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <p>{user?.phone}</p>
      </div>
    </>
  );
}

export default LoginCheck;
