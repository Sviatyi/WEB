let jsonhttp = new XMLHttpRequest();
let url = "http://127.0.0.1:5000/get_article_by_id/";
const currentUrl = window.location.href;
let articleId = currentUrl.split("articleId=")[1];
url += articleId

jsonhttp.open("GET", url, true);


console.log(url);

function save(){
    let currentUser = window.localStorage.getItem("username");
    let saveUrl = "http://127.0.0.1:5000/save_article_by_id/"+currentUser+"/"+articleId;
    let jsonhttpSave = new XMLHttpRequest();
    jsonhttpSave.open("GET", saveUrl, true);
    console.log(jsonhttpSave)
    jsonhttpSave.onload = function(){
        if (jsonhttpSave.status === 200){
        document.getElementById("buttons").innerHTML = `<button type="submit" onclick="unsave()">Saved</button>
        <button type="submit" onclick="edit()">Edit</button>`
        }
    }
    jsonhttpSave.send();
}

function unsave(){
    let currentUser = window.localStorage.getItem("username");
    let unsaveUrl = "http://127.0.0.1:5000/delete_article_by_id/"+currentUser+"/"+articleId;
    let jsonhttpUnsave = new XMLHttpRequest();
    jsonhttpUnsave.open("GET", unsaveUrl, true);
    console.log(jsonhttpUnsave)
    jsonhttpUnsave.onload = function(){
        if (jsonhttpUnsave.status === 200){
        document.getElementById("buttons").innerHTML = `<button type="submit" onclick="save()">Save</button>
        <button type="submit" onclick="edit()">Edit</button>`
        }
    }
    jsonhttpUnsave.send();
}

jsonhttp.onload = function(){
    let article = JSON.parse(this.responseText);
    let currentUser = window.localStorage.getItem("username")
    if(currentUser){
        
        
        document.getElementById("username").innerHTML = `<a href="logout.html">${currentUser}</a>`
        document.getElementById("savedArticle").innerHTML = `<a href="saved.html">Saved</a>`
        let isSavedUrl = "http://127.0.0.1:5000/is_saved_article_by_name/"+currentUser+"/"+articleId;
        let jsonhttpIsSaved = new XMLHttpRequest();
        jsonhttpIsSaved.open("GET", isSavedUrl, true);
        jsonhttpIsSaved.onload = function(){

            if (jsonhttpIsSaved.status === 200){
                document.getElementById("buttons").innerHTML = `<button type="submit" onclick="unsave()">Saved</button>
                <button type="submit" onclick="edit()">Edit</button>`
            }
            else{
                document.getElementById("buttons").innerHTML = `<button type="submit" onclick="save()">Save</button>
                <button type="submit" onclick="edit()">Edit</button>`
            }
        }
        jsonhttpIsSaved.send();
    }
    else{
        document.getElementById("username").innerHTML = `<a href="login.html">Login</a>`
    }

    document.getElementById("container-title").innerHTML = article.articlename
    document.getElementById("layers").innerHTML = `
        
        ${
        	`
            <div class="articles">
                    ${article.text}
                </div>
            </div>`  
        }
        
        `


}

jsonhttp.send();