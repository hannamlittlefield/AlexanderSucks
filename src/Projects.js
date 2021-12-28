import React from "react";
import './App.css';
import projectpic from './img/BQProject.JPG'
import { FaGithub, FaCodepen } from "react-icons/fa";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects(){
    return(
        <div align="center" className="Projects">
        <img className="projImg" src={projectpic}/><br/>
        <FontAwesomeIcon icon="fa-brands fa-github" />
                <FaCodepen/><a href="https://codepen.io/hannamlittlefield/pen/MWJLPgx" target="_blank">CodePen</a>
                <FaGithub/><a href="https://github.com/hannamlittlefield/BQSceneSelector/tree/master/BQSceneGen/bq-app/src" target="_blank">Github</a>
        </div>
    )
}