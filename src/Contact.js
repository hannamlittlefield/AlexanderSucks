import React from 'react'
import {FaRegEnvelope, FaLinkedin, FaGithub, FaCodepen} from 'react-icons/fa'

export default function Contact(){
    return(
        <div align="center" className="Contact">
            You can find me here!<br/><br/>
        <FaRegEnvelope/><a href = "mailto: HannaMLittlefield@gmail.com">Email</a><br/>
        <FaLinkedin/><a href = 'https://www.linkedin.com/in/hannamlittlefield/'>LinkedIn</a><br/>
        <FaGithub/><a href = 'https://github.com/hannamlittlefield'>GitHub</a><br/>
        <FaCodepen/><a href = 'https://codepen.io/hannamlittlefield'>Codepen</a>
        </div>
    )
}