export const getToken = () => {
    return localStorage.getItem('token')
}

export const LogOut = () => {
   localStorage.removeItem("token");
}

export const handleLogOut = () => {
    LogOut();
}