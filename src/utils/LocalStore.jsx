import React from 'react'

function SetLocally(user) {
   localStorage.setItem("role",JSON.stringify(user.role));
}

function GetLocally(){
    const locallySetRole = JSON.parse(localStorage.getItem("role"));
    return locallySetRole;
}

export  {SetLocally,GetLocally}
