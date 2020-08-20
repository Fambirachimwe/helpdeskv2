import axios from 'axios';


export const getToken = () => {
    return localStorage.getItem('token')
}

export const LogOut = () => {
   localStorage.removeItem("token");
}

export const handleLogOut = () => {
    LogOut();
}

export const verifyToken = () => {
    // get the token from localStorage 
    // use bacrypt to compare the token
    // send and api request to check if the provided details are valid ie they exist 
    // use bacrypt to compare the token with the one on the frontend 
    // if the token is verified return true else return false
}

export const STATUS = {
    PENDING: "PENDING",
    CLOSED:'CLOSED',
    ELEVATED: "ELEVATED",
    UNRESOLVED: "UNRESOLVED"
}