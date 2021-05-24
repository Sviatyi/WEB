import React, {useState} from "react";
import {Button, Form} from "semantic-ui-react";
import TextField from '@material-ui/core/TextField';

import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";


export const AddArticleUser = () => {
    const [title, setTitle] = useState()
    const [category, setCategory] = useState("science")
    const [text, setText] = useState()
    const currentUserStatus = localStorage.getItem("userStatus")
    return (
        <main>
            <div className="container">
                <Form className="add-article-form">
                    <Form.Field className="form-element">
                        <label>Enter article title: </label>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            variant="outlined"
                            value={title}
                            onChange={e=>setTitle(e.target.value)}
                        />
                    </Form.Field>
                    <Form.Field className="form-element">
                        <label>Chose article category:</label>
                        <FormControl variant="outlined">
                            <InputLabel id="demo-simple-select-required-label">Category</InputLabel>
                            <Select
                                required
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={category}
                                label="Category"
                                onChange={e => setCategory(e.target.value)}
                                defaultValue="science">

                                <MenuItem value={"science"}>Science</MenuItem>
                                <MenuItem value={"history"}>History</MenuItem>
                                <MenuItem value={"business"}>Business</MenuItem>
                                <MenuItem value={"machinery"}>Machinery</MenuItem>
                            </Select>
                        </FormControl>
                    </Form.Field>
                    <Form.Field className="form-element">
                        <label>Enter article text: </label>
                        <textarea required placeholder="Text" value={text} onChange={e => setText(e.target.value)}/>
                    </Form.Field>
                    <Form.Field className="buttons">
                        <Button onClick={ async () =>{

                            const res = await fetch('http://127.0.0.1:5000/create_article',{
                                method:'POST',
                                headers:{
                                    "Content-Type":"application/json"
                                },
                                body: JSON.stringify({
                                    "articlename": title,
                                    "category": category,
                                    "userStatus": currentUserStatus,
                                    "text": text
                                })
                            });
                            if (res.status !== 200){
                                alert("BAD DATA!!!");
                            }
                            else{
                                window.location.href="/"
                            }
                        }}>Add article</Button>
                    </Form.Field>
                </Form>
            </div>
        </main>
    )
}

export default AddArticleUser;