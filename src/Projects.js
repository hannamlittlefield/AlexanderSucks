import React from "react";
import './App.css';
import projectpic from './img/BQProject.JPG'

export default function Projects(){
    return(
        <div align="center" className="Projects">
        <img className="projImg" src={projectpic}/><br/>
                <a href="https://codepen.io/hannamlittlefield/pen/MWJLPgx" target="_blank">CodePen</a> 
                <a href="https://github.com/hannamlittlefield/BQSceneSelector/tree/master/BQSceneGen/bq-app/src" target="_blank">Github</a>
        </div>
    )
}