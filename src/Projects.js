import React from "react";
import './App.css';
import {Link} from 'react-router-dom'
import GitLink from "./GithubLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects(){
    return(
        <div align="center" className="Projects">
        <img className="projImg" src="https://i.postimg.cc/c45wtbww/BQProject.jpg"/><br/>
                <a href="https://codepen.io/hannamlittlefield/pen/MWJLPgx" target="_blank">CodePen</a> 
                <a href="https://github.com/hannamlittlefield/BQSceneSelector/tree/master/BQSceneGen/bq-app/src" target="_blank">Github</a>
        </div>
    )
}