import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    setError(null);

    if (!handleLogin(email, password)) {
      // Keep the email so they only have to retype the password.
      setError("Invalid email or password.");
      setPassword("");
      return;
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className=" flex justify-center items-center h-screen w-full bg-linear-to-tl from-[#BBD2C5] from-10% to-[#536976] text-white p-2 ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="  backdrop-blur-3xl backdrop-brightness-120 flex justify-center p-15 rounded-4xl h-[70%] w-130"
      >
        <div className=" flex flex-col items-center w-full h-full gap-20 ">
          <FontAwesomeIcon
            className=" text-7xl rounded-full object-cover "
            icon={faUser}
            beatFade
          />
          <label
            htmlFor="email"
            className=" flex flex-row w-full items-center gap-6 border-b"
          >
            <span className="sr-only">Email</span>
            <FontAwesomeIcon icon={faEnvelope} shake />
            <input
              className=" w-full focus:outline-none "
              id="email"
              autoComplete="username"
              type="email"
              placeholder="abc@gmail.com"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label
            htmlFor="password"
            className=" flex flex-row w-full items-center gap-6 border-b"
          >
            <span className="sr-only">Password</span>
            <FontAwesomeIcon icon={faLock} flip />
            <input
              className=" w-full focus:outline-none "
              id="password"
              autoComplete="current-password"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <div className=" w-full flex flex-row justify-between text-gray-500">
            <div className=" flex flex-row items-center">
              <input
                type="checkbox"
                name="Remember_me"
                className="mt-1"
                id="RememberThisDevice"
              />
              <label htmlFor="RememberThisDevice">Remember Me</label>
            </div>
            <div>
              <button type="button">Forget Password?</button>
            </div>
          </div>
          {error && (
            <p
              role="alert"
              className="w-full rounded-lg bg-rose-950/60 px-3 py-2 text-center text-sm text-rose-200"
            >
              {error}
            </p>
          )}

          <button className=" font-sans w-full bg-linear-to-tl from-blue-900 from-5% to-red-900  rounded-2xl py-2 text-3xl active:scale-95 duration-100">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
