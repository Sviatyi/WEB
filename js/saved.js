String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};


let jsonhttp = new XMLHttpRequest();

let currentUser = window.localStorage.getItem("username")
let url = "http://127.0.0.1:5000/get_saved_article_by_name/"+currentUser+"/";
const currentUrl = window.location.href;
if (currentUrl.includes("category=")){
    url += currentUrl.split("category=")[1];
}
else{
    url += "none";
}
jsonhttp.open("GET", url, true);
jsonhttp.onload = function(){
    let articles = JSON.parse(this.responseText);
    
    if(currentUser){
        document.getElementById("username").innerHTML = `<a href="logout.html">${currentUser}</a>`
        document.getElementById("savedArticle").innerHTML = `<a href="saved.html">Saved</a>`
    }
    else{
        document.getElementById("username").innerHTML = `<a href="login.html">Login</a>`
    }
    document.getElementById("container-title").innerHTML = `
    ${url === "http://127.0.0.1:5000/get_saved_article_by_name/" +currentUser+"/none"? "Saved" : articles[0].category.toProperCase()} (${articles.length} results)`

    function get_articles(article){
        return `
            <div class="articles">
                <h3>${article.articlename}</h3>
                <div class="article-text">
                    ${article.text}
                </div>
                <div class="article-a">
                    <a href="article.html?articleId=${article.articleId}">Open full text</a>
                </div>
            </div>`
    }


    document.getElementById("layers").innerHTML = `
        
        ${
         articles.map(get_articles).join("")   
        }
        
        `
    let i;
    let divs = document.getElementsByTagName('div');
    for(i=0;i<divs.length;i++) {
        if(divs[i].className == 'article-text') {
        divs[i].innerHTML = divs[i].innerHTML.substring(0,550);
        if(divs[i].innerHTML.slice(-1) !== " "){
            divs[i].innerHTML += "..."
        }
        }
    }
}

jsonhttp.send();