import React from "react";
import { Link } from "react-router-dom";
import './App.css';


export default function Alex(){
    return(
        <div align="center" className="alexandersucks">
        <div id="projparagraph">
            Ever have the urge to take useless online quizzes as a way to waste some time? I gotchu, babes. Check out these completely valid, very accurate quizzes that I definitely did not make up. </div>
        <ul><Link to="/dessertquiz">What dessert are you?</Link></ul>
        <ul><Link to="/vacationquiz">Answer a few questions and we'll tell you where you should go on your next trip!</Link></ul>
        <ul><Link to="/zodiacquiz">Can I guess your zodiac sign?</Link></ul>
        <ul><Link to="/meow">Which cat are you?</Link>
        <ul><Link to="/ididit">How well do you know your wildlife?</Link></ul>
        <ul><Link to="/whyyyyy">Which Buffy character are you?</Link></ul>
        </ul>
        <p className="lovenote">Dear Alexander, I hope you enjoy these, laugh a little bit, and have fun. They were really enjoyable to make, and I had a great time coding for fun and not for clients or work.Happy discount chocolate day, babes. I adore you, I love you, and you are my favorite.</p>
        <p>Love,</p>
        <p className="lovehan anim-typewriter">hanna</p>
        </div>
    )
}