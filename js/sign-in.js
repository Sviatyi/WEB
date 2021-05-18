function signIn(){
	let username = document.getElementById("username").value;
	let psw = document.getElementById("psw").value;
	let jsonhttp = new XMLHttpRequest();
	const url = "http://127.0.0.1:5000/sign-in/";
	jsonhttp.open("POST", url+username+"/"+psw, true);
	jsonhttp.setRequestHeader("Content-Type", "application/json");
	jsonhttp.send()
	console.log(jsonhttp)
	jsonhttp.onreadystatechange = function() {
		if (jsonhttp.status !== 200){
			console.log(jsonhttp.status)
			alert("Wrong password or username")
		}
		else{
			window.localStorage.setItem("username", username);
			window.location.href='index.html';
		}
	}
}
function logout(){
	if(confirm("Are you really want to logout?")){
		window.localStorage.removeItem("username")
		window.location.href='index.html';
	}
}