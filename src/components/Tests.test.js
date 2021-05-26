import ReactDOM from "react-dom"
import React from "react";
import {BrowserRouter as Router } from "react-router-dom";
import HeaderPage from "./HeaderPage";
import HistoryPage from "./HistoryPage";
import Article, {Delete, Saved, unSaved} from "./Article";
import Articles from "./Articles";
import ArticlesByCategory from "./ArticlesByCategory";
import AddArticleUser from "./AddArticleUser";
import EditArticle from "./EditArticle";
import Footer from "./Footer";
import Login from "./Login";
import Logout, {logout} from "./Logout";
import SavedArticles from "./SavedArticles";
import {SignIn} from "./SignIn";
import SignUp from "./SignUp";
import SingleHistory, {Submit,Delete as del} from "./SingleHistory";
import {render,screen,fireEvent,getByTestId} from "@testing-library/react";

const currentUlr = window.location.href
localStorage.setItem("username","sergo")
it("HeaderPage renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><HeaderPage/></Router>,div);
})

it("HistoryPage renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><HistoryPage/></Router>,div);
})

it("Article renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Article/></Router>,div);
    expect(unSaved()).toEqual(undefined);
    expect(Saved()).toEqual(undefined);
    expect(Delete()).toEqual(undefined);
})

it("Articles renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Articles/></Router>,div);
})

it("ArticleByCategory renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><ArticlesByCategory/></Router>,div);
})

it("AddArticleUser renders without crashes",()=>{
    render(<Router><AddArticleUser/></Router>);
    const  input1 = screen.getByPlaceholderText('Text');
    const  input2 = screen.getByPlaceholderText('Required');
    const  input3 = screen.getByText('Add article');
    fireEvent.change(input1, { target: { value: 'sergo' }});
    fireEvent.change(input2, { target: { value: '123' }});
    fireEvent.change(input3, { target: { value: '1' }});
    fireEvent(
        screen.getByText('Add article'),
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        })
    )
})

it("EditArticle renders without crashes",()=>{
    render(<Router><EditArticle/></Router>);
    const  input1 = screen.getByPlaceholderText('Text');
    const  input2 = screen.getByPlaceholderText('Article title');
    const  input3 = screen.getByText('Edit article');
    const  input4 = screen.getByPlaceholderText('category');
    fireEvent.change(input1, { target: { value: 'sergo' }});
    fireEvent.change(input2, { target: { value: '123' }});
    fireEvent.change(input3, { target: { value: '1' }});
    fireEvent.change(input4, { target: { value: 'science' }});
    fireEvent(
        screen.getByText('Edit article'),
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        })
    )
})

it("Footer renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Footer/></Router>,div);
})

it("Login renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Login/></Router>,div);
})

it("Logout renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Logout/></Router>,div);
    expect(logout()).toEqual(undefined)
})

it("SavedArticles renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><SavedArticles/></Router>,div);
})

it("SignIn renders without crashes",()=> {
    render(<Router><SignIn/></Router>);
    const  input1 = screen.getByPlaceholderText('username');
    const  input2 = screen.getByPlaceholderText('password');
    const  input3 = screen.getByText('Sign-in');
    fireEvent.change(input1, { target: { value: 'sergo' }});
    fireEvent.change(input2, { target: { value: '123' }});
    fireEvent.change(input3, { target: { value: '1' }});
    fireEvent(
        screen.getByText('Sign-in'),
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        })
    )

})

it("SignUp renders without crashes",()=>{
    render(<Router><SignUp/></Router>);
    const  input1 = screen.getByPlaceholderText('username');
    const  input2 = screen.getByPlaceholderText('password');
    const  input3 = screen.getByPlaceholderText('email');
    const  input4 = screen.getByPlaceholderText('firstname');
    const  input5 = screen.getByPlaceholderText('lastname');
    const  input6 = screen.getByPlaceholderText('phone');
    const  input7 = screen.getByPlaceholderText('passwordR');
    const  input8 = screen.getByText('Sign-up');
    fireEvent.change(input1, { target: { value: '1' }});
    fireEvent.change(input2, { target: { value: '1' }});
    fireEvent.change(input3, { target: { value: '1@gmail.com' }});
    fireEvent.change(input4, { target: { value: '1' }});
    fireEvent.change(input5, { target: { value: '1' }});
    fireEvent.change(input6, { target: { value: '1' }});
    fireEvent.change(input7, { target: { value: '1' }});
    fireEvent.change(input8, { target: { value: '1' }});

    fireEvent(
        screen.getByText('Sign-up'),
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        })
    )
})

it("SingleHistory renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><SingleHistory/></Router>,div);
    expect(Submit()).toEqual(undefined);
    expect(del()).toEqual(undefined)
})

