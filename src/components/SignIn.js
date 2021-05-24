import React, {useState}from "react";
import {Button, Form , Input} from "semantic-ui-react";

export const SignIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return(
        <main>
            <div className="wrapper-sign-in">
                    <Form className="container-sign-in">
                        <div className="sign-in">
                            <Form.Field>
                                <label htmlFor="username"><b>Username</b></label>
                                <Input type="username" placeholder="username" value={username}
                                       onChange={e=>setUsername(e.target.value)}/>
                            </Form.Field>
                        </div>
                        <div className="sign-in">
                            <Form.Field>
                                <label htmlFor="psw"><b>Password</b></label>
                                <Input type="password" placeholder="password" value={password}
                                       onChange={e=>setPassword(e.target.value)}/>
                            </Form.Field>
                        </div>
                        <div className="buttons">
                            <Form.Field>
                                <Button onClick={async () =>{

                                    const res = await fetch('http://127.0.0.1:5000/sign-in/'+username+"/"+password,{
                                        method:'POST',
                                        headers:{
                                            "Content-Type":"application/json"
                                        }
                                    });
                                    if (res.status !== 200){
                                        alert("BAD DATA!!!");
                                    }
                                    else{
                                        let result = await res.json();
                                        localStorage.setItem('username', result.userName);
                                        localStorage.setItem('userStatus', result.userStatus)
                                        window.location.href='/';
                                    }
                                }}>Sign-in</Button>
                            </Form.Field>
                        </div>
                    </Form>
            </div>
        </main>
    )
}