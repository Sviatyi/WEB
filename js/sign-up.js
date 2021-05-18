function signUp(){
	let email = document.getElementById("email").value;
	let username = document.getElementById("username").value;
	let firstname = document.getElementById("firstname").value;
	let lastname = document.getElementById("lastname").value;
	let pn = document.getElementById("pn").value;
	let psw = document.getElementById("psw").value;
	let pswRepeat = document.getElementById("psw-repeat").value;
	if (psw !== pswRepeat){
		alert("Password and repeat password are not the same")
	}
	else{
		let user = {
	        userName: username,
	        firstName: firstname,
	        lastName: lastname,
	        email: email,
	        password: psw,
	        phone: pn
	    };
	    console.log(user)
	    let jsonhttp = new XMLHttpRequest();
	    const url = "http://127.0.0.1:5000/add_user";
	    jsonhttp.open("POST", url, true);
	    jsonhttp.setRequestHeader("Content-Type", "application/json");
	    let data = JSON.stringify(user);
	    jsonhttp.send(data);
	    
	    window.location.href='sign-in.html';
	}
}
