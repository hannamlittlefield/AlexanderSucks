import React from "react";
import './App.css';
import BQphoto from './img/BQProject.JPG'
import TrackerPhoto from './img/exercisetracker.JPG'
import { FaGithub, FaCodepen, } from "react-icons/fa";
import {SiReplit} from "react-icons/si";
import UltraApp from './UltraCrewApp.mov'
import Image from 'react-bootstrap/Image'

export default function Projects(){
    return(
        <div align="center" className="Projects">
            <h2>Beqanna Scene Generator</h2>
            <p>
            <Image className='projimage' src={BQphoto} alt="A screen capture of my scene generator project" fluid rounded/><br/>
                <a href="https://codepen.io/hannamlittlefield/pen/MWJLPgx" target="_blank" rel="noreferrer"><FaCodepen/>Codepen</a>
                <a href="https://github.com/hannamlittlefield/BQSceneSelector/tree/master/BQSceneGen/bq-app/src" target="_blank" rel="noreferrer"><FaGithub/>Github</a><br/><br/>
                    The Beqanna Scene Generator was one of my first personal projects. It is a simple random choice generator based on given inputs. It was built with vanilla Javascript.</p>
            
            <h2>Ultra Crew App</h2>
                <p>
            <video width="100%" controls src={UltraApp} type="video/mp4" height= '400px' maxWidth='480px'/><br/>
            <a href="https://github.com/GreenField-Org/ultracrewmobile" target="_blank" rel="noreferrer" alt="a short video showing navigation through the Ultra Crew App"><FaGithub/>Github</a><br/><br/>
                The Ultra Crew App is a current work in progress - and is being built by a team of two. It is used to track information collected at endurance racing aid stations - such as food, water, etc.

                It is built with React Native with Javascript, Expo, and React Dom.
                </p>
            <h2>Exercise Tracker</h2>
                <p>
                    <Image className="projImg" src={TrackerPhoto} alt="A screen capture of my exercise tracker project" fluid rounded/><br/>
                    <a href="https://replit.com/@hannamlittlefie/boilerplate-project-exercisetracker#.replit" target="_blank" rel="noreferrer"><SiReplit/>Replit</a><br/>
                The Exercise Tracker app is a simple application where you can create a user and track exercise activities. You may also look at a user exercise log by calling to an API. 
                    It is built with Javascript and uses MongoDB as a database. <br/>
                </p>
                <br/>
                </div>
    )
}

//verify that projects component rendered
//verify that there is X amount of images
//verify that there are codepen and github icons and has an anchor tag to appropriate link