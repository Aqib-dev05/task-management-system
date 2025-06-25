/* eslint-disable react-refresh/only-export-components */
// AppContext.js
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { SetLocally,GetLocally } from "../utils/LocalStore";


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dummyData, setDummyData] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    axios.get("/src/utils/Data.json")
      .then((res) => {
        setDummyData(res.data)
      })
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmittion = (e) => {
    e.preventDefault();
    const foundUser = dummyData.find((u) => u.email == formData.email && u.password == formData.password)

    if(foundUser){
      if(foundUser.email == "admin@example.com"){

        setUser((prev)=>({
          ...prev,
          role: "admin",
          info: foundUser.email
        }))
        SetLocally(user)
      }
      else {
       setUser((prev)=>({
          ...prev,
          role: "employee",
          info: foundUser.email
        }))
        SetLocally(user)

      }
    }
    else{
      
      setUser({ role: "", info: "" });
      localStorage.clear();
      alert("Unmatched cradentials");
    }
    
  };

  return (
    <AppContext.Provider
      value={{ formData,user,setUser, dummyData, handleInputChange, handleFormSubmittion }}
    >
      {children}
    </AppContext.Provider>
  );
};
