import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export const ArticlesByCategory = () => {

    const currentUrl = window.location.href;
    const[articles, setArticles]= useState([]);
    useEffect(()=>{
        fetch("http://127.0.0.1:5000/get_articles_by_category/"+currentUrl.split("category=")[1]).then(response =>
            response.json().then(data=>{
                setArticles(data)
            })
        );
    },[]);
    console.log(articles)
    let title = currentUrl.split("category=")[1][0].toUpperCase();
    title += currentUrl.split("category=")[1].slice(1,);
    return (
        <main>
            <div className="container">
                <h1>{title +" ("+articles.length + " results)"}</h1>
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

export default ArticlesByCategory;