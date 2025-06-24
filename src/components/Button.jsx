import React from "react";

function Button({ text, type, onclick, classname = "", varient }) {


    const Styles={
        inVar: "text-2xl text-center font-bold hover:bg-emerald-600 transition-all duration-200  cursor-pointer py-2 px-1  text-white bg-emerald-400 ",
        outVar:"bg-[#d04e1f] rounded-[5px] w-fit px-2 py-2 font-bold text-white text-md flex justify-center items-center ",
        blueVar:"bg-blue-600 rounded-[5px] w-fit px-3 py-2 font-bold text-white text-md flex justify-center items-center "
    }


    return (
        <button onClick={onclick} className={ Styles[varient] + classname + "cursor-pointer" } type={type} >
            {text}
           
        </button>
    );
}

export default Button;
