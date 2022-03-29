import React from 'react';
import {FaReact, FaNodeJs, FaGithub, FaBootstrap, FaWordpress} from 'react-icons/fa'
import { DiJavascript1 } from "react-icons/di";
import { SiMongodb } from "react-icons/si";



export default function TechStack(){
    return(
        
        <div className="techdiv">
            <div class="techicon">
                <FaReact/>
                <p>React</p>
            </div>
            <div class="techicon">
                <DiJavascript1/>
                <p>Javascript</p>
            </div>
            <div class="techicon">
                <SiMongodb/>
                <p>Mongo DB</p>
            </div>
            <div class="techicon">
                <FaNodeJs/>
                <p>NodeJS</p>
            </div>
            <div class="techicon">
                <FaGithub/>
                <p>Github</p>
            </div>
            <div class="techicon">
                <FaBootstrap/>
                <p>Bootstrap</p>
            </div>
            <div class="techicon">
                <FaWordpress/>
                <p>Wordpress</p>
            </div>
        </div>
    )
}