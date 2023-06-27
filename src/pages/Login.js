import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(password);

  return (
    <section className="h-[100vh]"></section>
  );
};

export default Login;
