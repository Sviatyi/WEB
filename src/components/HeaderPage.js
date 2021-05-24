import React from "react";
import {Link} from "react-router-dom";

export const HeaderPage = () => {
    let pageType = null;
    if(window.location.href.includes("http://localhost:3000/")){
        pageType="/articles";
    }
    if(window.location.href.includes("http://localhost:3000/saved")){
        pageType="/saved";
    }
    const currentUser = localStorage.getItem("username");
    const currentUserStatus = localStorage.getItem("userStatus");
    return(
        <header>
            <div className="container">
                <div className="left-header">
                    <ul>
                        <li>{currentUser ? <a href={"/saved"}>Saved</a> : "" }</li>
                        <li>{currentUserStatus>0 ? <a href={"/add-article"}>Add article</a> : "" }</li>
                        <li>{currentUserStatus>0 ? <a href={"/history-page"}>Check edited</a> : "" }</li>
                        <li><Link to={"/"}>Category</Link>
                            {window.location.href !== "http://localhost:3000/add-article" &&
                            !window.location.href.includes("http://localhost:3000/edit-article") &&
                            !window.location.href.includes("http://localhost:3000/history")?
                                <ul className="submenu">
                                <li><a href={pageType+"?category=science"}>Science</a></li>
                                <li><a href={pageType+"?category=history"}>History</a></li>
                                <li><a href={pageType+"?category=business"}>Business</a></li>
                                <li><a href={pageType+"?category=machinery"}>Machinery</a></li>
                            </ul>:""}
                        </li>
                    </ul>
                </div>
                <div className="right-header">
                    <ul>
                        <li>{currentUser ? <Link to={"/logout"}>{currentUser}</Link> : <Link to={"/login"}>Login</Link>}</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default HeaderPage;