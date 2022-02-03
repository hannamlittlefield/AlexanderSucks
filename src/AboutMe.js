import React from 'react'
import resume from './resume.pdf'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProfPic from './img/ProfilePhoto.jpg'
import Container from 'react-bootstrap/Container'


export default function About(){
    return(
        <div className='About'>
        <Container>
            <Row>
                <Col md="auto">
                    <img className="projImg" src={ProfPic} alt="Hanna looking off to the side laughing"/>
                </Col>
                <Col>
                    <div className='abouttext'> 
                        <p>Hi! I'm Hanna - a self taught programmer enjoying life in Massachusetts. After graduating with a business management degree and spending eight years in the field, I left the business world behind and began to pursue my passion for coding.</p>
                        
                        <p>Through various online resources and routine work with a mentor - I have taught myself a variety of languages, libraries, and web development skills. I always enjoy a challenge, and have the ability to teach myself nearly anything that I put my mind to.</p> 

                        <p>I am passionate about my fur-family, reading a lot of books, to-do lists, running obscenely long distances, creating things with my hands, and solving puzzles. </p>

                        <p>You can learn more about my skills by checking out my <a href={resume}>resume</a>!</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
        
    )
}