import React, {useState} from "react";
import {Button, Form, Input} from "semantic-ui-react";


export const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordR, setPasswordR] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    return(
        <main>
            <div className="wrapper-sign-in">
                <Form className="container-sign-in">
                    <div className="sign-in">
                        <Form.Field>
                            <label htmlFor="email"><b>Email</b></label>
                            <Input type="email" placeholder="email" value={email}
                                   onChange={e=>setEmail(e.target.value)}/>
                        </Form.Field>
                    </div>
                    <div className="sign-in">
                        <Form.Field>
                            <label htmlFor="username"><b>Username</b></label>
                            <Input type="username" placeholder="username" value={username}
                                   onChange={e=>setUsername(e.target.value)}/>
                        </Form.Field>
                    </div>
                    <div className="sign-in">
                        <Form.Field>
                            <label htmlFor="firstname"><b>Firstname</b></label>
                            <Input type="text" placeholder="firstname" value={firstname}
                                   onChange={e=>setFirstname(e.target.value)}/>
                        </Form.Field>
                    </div>
                    <div className="sign-in">
                        <Form.Field>
                            <label htmlFor="lastname"><b>Lastname</b></label>
                            <Input type="text" placeholder="lastname" value={lastname}
                                   onChange={e=>setLastname(e.target.value)}/>
                        </Form.Field>
                    </div>
                    <div className="sign-in">
                        <Form.Field>
                            <label htmlFor="phone"><b>Phone number</b></label>
                            <Input type="phone" placeholder="phone" value={phone}
                                   onChange={e=>setPhone(e.target.value)}/>
                        </Form.Field>
                    </div>
                    <div className="sign-in">
                        <Form.Field>
                            <label htmlFor="psw"><b>Password</b></label>
                            <Input type="password" placeholder="password" value={password}
                                   onChange={e=>setPassword(e.target.value)}/>
                        </Form.Field>
                    </div>
                    <div className="sign-in">
                        <Form.Field>
                            <label htmlFor="pswR"><b>Repeat password</b></label>
                            <Input type="password" placeholder="passwordR" value={passwordR}
                                   onChange={e=>setPasswordR(e.target.value)}/>
                        </Form.Field>
                    </div>
                    <div className="buttons">
                        <Form.Field>
                            <Button onClick={async () =>{
                                if (password===passwordR) {
                                    const res = await fetch('http://127.0.0.1:5000/add_user', {
                                        method: 'POST',
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            "email": email,
                                            "password": password,
                                            "userName": username,
                                            "phone": phone,
                                            "firstName": firstname,
                                            "lastName": lastname
                                        })
                                    });
                                    if (res.status !== 200) {
                                        alert("BAD DATA!!!");
                                    } else {
                                        window.location.href = '/sign-in';
                                    }
                                }
                                else {
                                    alert("BAD DATA!!!");
                                }
                            }}>Sign-up</Button>
                        </Form.Field>
                    </div>
                </Form>
            </div>
        </main>
    )
}

export default SignUp;