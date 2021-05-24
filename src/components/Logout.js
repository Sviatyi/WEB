import React from "react";

export const Logout = () => {
    function logout() {
        if (window.confirm("Are you really want to logout?")) {
            window.localStorage.removeItem("username")
            window.localStorage.removeItem("userStatus")
            window.location.href = '/';
        }
    }
    return(
        <main>
            <div className="wrapper-sign-in">
                <div className="container-sign-in">
                    <div className="buttons">
                        <button type="submit" onClick={logout}>Logout</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Logout;