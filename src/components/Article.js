import React, {useEffect, useState} from "react";

export const Article = () => {
    function unSaved() {
        return async () => {
            const res = await fetch('http://127.0.0.1:5000/delete_saved_by_id/'
                + currentUser + "/" + currentUrl.split("articleId=")[1], {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (res.status === 200) {
                window.location.reload()
            }
        }
    }
    function Delete() {
        return async () => {
            const res = await fetch('http://127.0.0.1:5000/article/'
                + currentUrl.split("articleId=")[1]+"/"+ localStorage.getItem("userStatus"), {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                }

            });
            if (res.status === 200) {
                window.location.href = "/"
            }
        }
    }
    function Saved(){
        return async () =>{
            const res = await fetch('http://127.0.0.1:5000/save_article_by_id/'
                +currentUser+"/"+currentUrl.split("articleId=")[1],{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                }
            });
            if(res.status === 200){
                window.location.reload()
            }
        }
    }
    const currentUrl = window.location.href;
    const currentUser = localStorage.getItem("username")
    const[article, setArticles]= useState([]);
    useEffect(()=>{
        fetch("http://127.0.0.1:5000/get_article_by_id/"+currentUrl.split("articleId=")[1]).then(response =>
            response.json().then(data=>{
                setArticles(data)
            })
        );
    },[]);
    const[saved, setSaved]= useState([]);
    useEffect(()=>{
        fetch("http://127.0.0.1:5000/is_saved_article_by_name/"+
            currentUser+"/"+currentUrl.split("articleId=")[1])
            .then(response =>
            response.json().then(data=>{
                setSaved(data)
            })
        );
    },[]);
    console.log(saved)
    return (
        <main>
            <div className="container-article">
                <h1>{article.articlename + " ("+article.category+")"}</h1>
                <hr noshade=""/>
                {currentUser ? <div className="buttons">
                    {saved.articleId ? <button type="submit" onClick={unSaved()}>Saved</button> :
                    <button type="submit" onClick={Saved()}>Save</button>}
                    {localStorage.getItem("userStatus") > 0 ?
                        <button type="submit" onClick={Delete()}>Delete</button>: ""}
                    <button type="submit" onClick={function (){window.location.href = "/edit-article?articleId="+
                        currentUrl.split("articleId=")[1]}}>Edit</button>
                </div> : ""}
                <div className="layers">
                    <div className="articles">
                        {article.text}
                    </div>
                </div>
            </div>
        </main>
    )

};

export default Article;