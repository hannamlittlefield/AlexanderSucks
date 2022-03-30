import React from 'react';
import {FaReact, FaNodeJs, FaGithub, FaBootstrap, FaWordpress} from 'react-icons/fa'
import { DiJavascript1, DiVisualstudio } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function TechStack(){
    return(
        <div><h1 align="center">Tech Stack</h1>
            <Row className="techdiv">
                <Col className="techicon">
                    <FaReact/>
                    <p>React</p> 
                </Col>
                <Col className="techicon">
                    <DiJavascript1/>
                    <p>Javascript</p>
                </Col>
                <Col className="techicon">
                    <SiMongodb/>
                    <p>Mongo DB</p>
                </Col>
                <Col className="techicon">
                    <FaNodeJs/>
                    <p>NodeJS</p>
                </Col>
            </Row>
            <Row className="techdiv">
                <Col className="techicon">
                    <FaGithub/>
                    <p>Github</p>
                </Col>
                <Col className="techicon">
                    <FaBootstrap/>
                    <p>Bootstrap</p>
                </Col>
                <Col className="techicon">
                    <FaWordpress/>
                    <p>Wordpress</p>
                </Col>
                <Col className="techicon">
                    <DiVisualstudio/>
                    <p>VS Code</p>
                </Col>
            </Row>

        {/*<div className="techdiv">
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
            <div class="techicon">
                <DiVisualstudio/>
                <p>VS Code</p>
        </div>
    </div>*/}
    </div>
    )
}