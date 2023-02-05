import React from "react";
import { Link } from "react-router-dom";
import './App.css';


export default function Alex(){
    return(
        <div align="center" className="alexandersucks">
        <div id="projparagraph">
            Ever have the urge to take useless online quizzes as a way to waste some time? I gotchu, babes. Check out these completely valid, very accurate quizzes that I definitely did not make up. </div>
        <ul><Link to="/dessertquiz">What dessert are you?</Link>
        <a href="/dessertquiz">What dessert are you?</a></ul>
        <ul><a href="/vacationquiz">Answer a few questions and we'll tell you where you should go on your next trip!</a></ul>
        <ul><a href="/zodiacquiz">Can I guess your zodiac sign?</a></ul>
        <ul><a href="/meow">Which cat are you?</a>
        <ul><a href="/ididit">How well do you know your wildlife?</a></ul>
        <ul><a href="/areweserious">If you HAD to be a Buffy character, who would you be?</a></ul>
        <ul><a href="/eggggiiies">Which eggie dish are you?</a></ul>
        <ul><a href="/eggggiiies">I bet I can guess your dance style in a few short questions!</a></ul>
        </ul>
        <p className="lovenote">Dear Alexander, I hope you enjoy these, laugh a little bit, and have fun. They were really enjoyable to make, and I had a great time coding for fun and not for clients or work.Happy discount chocolate day, babes. I adore you, I love you, and you are my favorite.</p>
        <p>Love,</p>
        <p className="lovehan anim-typewriter">hanna</p>
        </div>
    )
}