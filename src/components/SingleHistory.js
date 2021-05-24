import React, {useEffect, useState} from "react";


export const SingleHistory = () => {
    function Delete() {
        return async () => {
            const res = await fetch('http://127.0.0.1:5000/articleHistory/'
                + currentUrl.split("historyId=")[1]+"/"+ localStorage.getItem("userStatus"), {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                }

            });
            if (res.status === 200) {
                window.location.href = "/history-page"
                console.log("deleted")
            }
        }
    }
    function Submit() {
        return async () => {

            const res = await fetch('http://127.0.0.1:5000/article/' + article.oldArticle.articleId
                + "/" + localStorage.getItem("userStatus"), {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "articlename": article.newArticlename,
                    "text": article.newArticleText,
                    "category": article.newCategory
                })
            });
            if (res.status !== 200) {
                alert("BAD DATA!!!");
            } else {
                const res = await fetch('http://127.0.0.1:5000/articleHistory/'
                    + currentUrl.split("historyId=")[1]+"/"+ localStorage.getItem("userStatus"), {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json"
                    }

                });
                if (res.status === 200) {
                    window.location.href = "/history-page"
                    console.log("deleted")
                }
            }
        }
    }
    const currentUrl = window.location.href;
    const currentUser = localStorage.getItem("username")
    const[article, setArticles]= useState([]);
    useEffect(()=>{
        fetch("http://127.0.0.1:5000/articleHistory/"+currentUrl.split("historyId=")[1]+"/"+
        localStorage.getItem("userStatus")).then(response =>
            response.json().then(data=>{
                setArticles(data)
            })
        );
    },[]);


    return (
        <main>
            <div className="container-article">
                <h1>{article.newArticlename+" ("+article.newCategory+")"}</h1>
                <hr noshade=""/>
                {currentUser ? <div className="buttons">
                    {localStorage.getItem("userStatus") > 0 ?
                        <button type="submit" onClick={Delete()}>Delete</button>: ""}
                    <button type="submit" onClick={Submit()}>Submit</button>
                    <button type="submit" onClick={function (){
                        window.location.href = "/article?articleId="+article.oldArticle.articleId}}>
                        Open original article</button>
                </div> : ""}
                <div className="layers">
                    <div className="articles">
                        {article.newArticleText}
                    </div>
                </div>
            </div>
        </main>
    )
};

export default SingleHistory;