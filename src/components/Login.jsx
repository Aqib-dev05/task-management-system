import React from "react";
import Button from "./Button";

function Login() {



  const inpStyle =
    "border-[#dadada] border-2 p-4 rounded-2xl w-full text-white placeholder:text-white focus:outline-0";

  return (
    <div className="bg-black text-white flex justify-center items-center w-[100vw] h-[100vh] ">
      <div className="border-[#bdbbbb] bg-[rgba(255,255,255,.12)] border-[1px] max-md:w-[98%] w-[500px]  rounded-2xl ">
        <form className="flex py-20 items-center justify-center flex-col px-5 md:px-12 min-h-[300px] gap-5  ">
          <input
            className={inpStyle}
            type="email"
            required
            placeholder="Enter your email"
          />
          <input
            className={inpStyle}
            type="password"
            required
            placeholder="Enter Password"
          />
          <Button type={"submit"} varient={"inVar"} classname="w-full rounded-2xl mt-10" text={"Log in"} />
        </form>
      </div>
    </div>
  );
}

export default Login;
