import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const Articles = () => {
    const currentUser = localStorage.getItem("username")
    const currentUrl = window.location.href;
    let category = currentUrl.split("category=")[1] ? currentUrl.split("category=")[1] : "none";

    const[articles, setArticles]= useState([]);
    useEffect(()=>{
        fetch("http://127.0.0.1:5000/get_saved_article_by_name/"+currentUser+"/"+category)
            .then(response =>
            response.json().then(data=>{
                setArticles(data)
            })
        );
    },[]);
    console.log(articles)

    return (
        <main>
            <div className="container">
                <h1>{"Articles "+"("+articles.length + " results)"}</h1>
                <hr noshade=""/>
                <div className="layers" id="layers">
                    {articles.map(article=> {
                        return (
                            <div className="articles">
                                <h3>{article.articlename}</h3>
                                <div className="article-text">
                                    {article.text}
                                </div>
                                <div className="article-a">
                                    <Link to={"/article?articleId="+article.articleId}>Open full text</Link>
                                </div>
                            </div>
                        )}
                    )
                    }
                </div>
            </div>
        </main>
    )

}

export default Articles;