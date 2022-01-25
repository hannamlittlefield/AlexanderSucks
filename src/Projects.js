import React from "react";
import './App.css';
import projectpic from './img/BQProject.JPG'
import { FaGithub, FaCodepen, } from "react-icons/fa";
import {SiReplit} from "react-icons/si";
import UltraApp from './UltraCrewApp.mov'

export default function Projects(){
    return(
        <div align="center" className="Projects">
            <img className="projImg" src={projectpic} alt="A screen capture of my scene generator project"/><br/>
                <a href="https://codepen.io/hannamlittlefield/pen/MWJLPgx" target="_blank" rel="noreferrer"><FaCodepen/>Codepen</a>
                <a href="https://github.com/hannamlittlefield/BQSceneSelector/tree/master/BQSceneGen/bq-app/src" target="_blank" rel="noreferrer"><FaGithub/>Github</a><br/>
                    La la la a little description here.<br/>
            <img className="projImg" src={projectpic} alt="A screen capture of my exercise tracker project"/><br/>    
                <a href ="https://replit.com/@hannamlittlefie/Exercise-Tracker#.replit"><SiReplit/>Replit</a>
        <video controls src={UltraApp} type="video/mp4" height= '400px'/>
                </div>
    )
}

//verify that projects component rendered
//verify that there is X amount of images
//verify that there are codepen and github icons and has an anchor tag to appropriate link