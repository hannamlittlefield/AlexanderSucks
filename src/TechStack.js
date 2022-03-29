import React from 'react';
import {FaReact, FaNodeJs, FaGithub, FaBootstrap, FaWordpress} from 'react-icons/fa'
import { DiJavascript1 } from "react-icons/di";
import { SiMongodb } from "react-icons/si";



export default function TechStack(){
    return(
        <div>
            <FaReact/>
            <DiJavascript1/>
            <SiMongodb/>
            <FaNodeJs/>
            <FaGithub/>
            <FaBootstrap/>
            <FaWordpress/>
        </div>
    )
}