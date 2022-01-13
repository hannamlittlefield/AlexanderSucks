import React from "react";
import './App.css';
import projectpic from './img/BQProject.JPG'
import { FaGithub, FaCodepen } from "react-icons/fa";

export default function Projects(){
    return(
        <div align="center" className="Projects">
        <img className="projImg" src={projectpic} alt="A screen capture of my scene generator project"/><br/>

                <FaCodepen/><a href="https://codepen.io/hannamlittlefield/pen/MWJLPgx" target="_blank" rel="noreferrer"><FaGithub/></a>
                <FaGithub/><a href="https://github.com/hannamlittlefield/BQSceneSelector/tree/master/BQSceneGen/bq-app/src" target="_blank" rel="noreferrer">Github</a>
        </div>
    )
}

//verify that projects component rendered
//verify that there is X amount of images
//verify that there are codepen and github icons and has an anchor tag to appropriate link