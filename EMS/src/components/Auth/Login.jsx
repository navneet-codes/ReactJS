import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email", email);
    console.log("password", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className=" flex justify-center items-center h-full w-full bg-linear-to-tl from-[#BBD2C5] from-10% to-[#536976] text-white p-2 ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="  backdrop-blur-3xl backdrop-brightness-120 flex justify-center p-15 rounded-4xl h-[70%] w-130"
      >
        <div className=" flex flex-col items-center w-full h-full gap-20 ">
          <FontAwesomeIcon
            className=" text-7xl rounded-full object-fit "
            icon={faUser}
            beatFade
          />
          <div className=" flex flex-row w-full items-center gap-6 border-b">
            <FontAwesomeIcon icon={faEnvelope} shake />
            <input
              className=" w-full focus:outline-none "
              type="text"
              placeholder="abc@gmail.com"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className=" flex flex-row w-full items-center gap-6 border-b">
            <FontAwesomeIcon icon={faLock} flip />
            <input
              className=" w-full focus:outline-none "
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className=" w-full flex flex-row justify-between text-gray-500">
            <div className=" flex flex-row items-center">
              <input
                className=" "
                type="checkbox"
                name="Remember_me"
                className="mt-1"
                id="RememberThisDevice"
              />
              <span>Remember Me</span>
            </div>
            <div>
              <button type="button">Forget Password?</button>
            </div>
          </div>
          <button className=" font-sans w-full bg-linear-to-tl from-blue-900 from-5% to-red-900  rounded-2xl py-2 text-3xl active:scale-95 duration-100">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
