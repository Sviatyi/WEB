import React, {useEffect, useState} from "react";
import {Button, Form} from "semantic-ui-react";
import TextField from '@material-ui/core/TextField';
import {FormControl, MenuItem, Select} from "@material-ui/core";


export const EditArticle = () => {
    const currentUrl = window.location.href;
    const[article, setArticles]= useState([]);
    const [title, setTitle] = useState()
    const [category, setCategory] = useState()
    const [text, setText] = useState()
    useEffect(()=>{
        fetch("http://127.0.0.1:5000/get_article_by_id/"+currentUrl.split("articleId=")[1]).then(response =>
            response.json().then(data=>{
                setArticles(data)
                setCategory(data.category)
                setText(data.text)
                setTitle(data.articlename)
            })
        );
    },{});

    const currentUserStatus = localStorage.getItem("userStatus")
    return (
        <main>
            <div className="container">
                <Form className="add-article-form">
                    <Form.Field className="form-element">
                        Enter article title:
                        <TextField
                            required
                            id="outlined-required"
                            variant="outlined"
                            value={title}
                            default={title}
                            onChange={e=>setTitle(e.target.value)}
                        />
                    </Form.Field>
                    <Form.Field className="form-element">
                        Chose article category (now {category}):
                        <FormControl variant="outlined" defaultValue={category}>

                            <Select
                                required
                                value={category}
                                onChange={e => setCategory(e.target.value)}>

                                <MenuItem key="science" value={"science"}>Science</MenuItem>
                                <MenuItem key="history" value={"history"}>History</MenuItem>
                                <MenuItem key="business" value={"business"}>Business</MenuItem>
                                <MenuItem key="machinery" value={"machinery"}>Machinery</MenuItem>
                            </Select>

                        </FormControl>
                    </Form.Field>
                    <Form.Field className="form-element">
                        <label>Enter article text: </label>
                        <textarea required placeholder="Text"
                                  defaultValue={article.text}
                                  value={text}
                                  onChange={e => setText(e.target.value)}/>
                    </Form.Field>
                    <Form.Field className="buttons">
                        <Button onClick={localStorage.getItem("userStatus") > 0 ? async () =>{

                            const res = await fetch('http://127.0.0.1:5000/article/'+ article.articleId
                                + "/" + localStorage.getItem("userStatus"),{
                                method:'PUT',
                                headers:{
                                    "Content-Type":"application/json"
                                },
                                body: JSON.stringify({
                                    "articlename": title,
                                    "text": text,
                                    "category": category
                                })
                            });
                            if (res.status !== 200){
                                alert("BAD DATA!!!");
                            }
                            else{
                                window.location.href="/"
                            }
                        }: async () =>{
                            const res = await fetch('http://127.0.0.1:5000/add_articleHistory',{
                                method:'POST',
                                headers:{
                                    "Content-Type":"application/json"
                                },
                                body: JSON.stringify({
                                    "newArticlename": title,
                                    "newArticleText": text,
                                    "newCategory": category,
                                    "userName": localStorage.getItem("username"),
                                    "oldId": currentUrl.split("articleId=")[1]
                                })
                            });
                            if (res.status !== 200){
                                alert("BAD DATA!!!");
                            }
                            else{
                                window.location.href="/"
                            }}}>Edit article</Button>
                    </Form.Field>
                </Form>
            </div>
        </main>
    )
}

export default EditArticle;