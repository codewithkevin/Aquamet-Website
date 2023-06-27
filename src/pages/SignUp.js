import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <form className="signup">
      <h3>Sign Up</h3>

      <label>Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your Email"
        value={email}
        palceholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button>Sing Up</button>
    </form>
  );
};

export default SignUp;
