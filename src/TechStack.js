import React from 'react';
import {FaReact, FaNodeJs, FaGithub, FaBootstrap, FaWordpress} from 'react-icons/fa'
import { DiJavascript1 } from "react-icons/di";
import { SiMongodb } from "react-icons/si";



export default function TechStack(){
    return(
        <div className="techdiv">
        <h1>Tech Stack</h1>
            <div class="techicon">
                <FaReact/>
                <p>React</p>
            </div>
            <div class="techicon">
                <DiJavascript1/>
                <p>Javascript</p>
            </div>
            <SiMongodb/>
            <FaNodeJs/>
            <FaGithub/>
            <FaBootstrap/>
            <FaWordpress/>
        </div>
    )
}