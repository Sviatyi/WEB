import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const HistoryPage = () => {
    const[articles, setArticles]= useState([]);
    useEffect(()=>{
        fetch("http://127.0.0.1:5000/articleHistory").then(response =>
            response.json().then(data=>{
                setArticles(data)
            })
        );
    },[]);
    console.log(articles)

    return (
        <main>
            <div className="container">
                <h1>{"History "+"("+articles.length + " results)"}</h1>
                <hr noshade=""/>
                <div className="layers" id="layers">
                    {articles.map(article=> {
                        return (
                            <div className="articles">
                                <h3>{article.newArticlename}</h3>
                                <div className="article-text">
                                    {article.newArticleText}
                                </div>
                                <div className="article-a">
                                    <Link to={"/history?historyId="+article.historyId}>Open full text</Link>
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

export default HistoryPage;