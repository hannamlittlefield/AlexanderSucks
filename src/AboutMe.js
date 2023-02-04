import React from 'react'
import resume from './img/resume.pdf'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProfPic from './img/ProfilePhoto.jpg'
import Container from 'react-bootstrap/Container'
import TechStack from './TechStack'


export default function About(){
    return(
        <div className='About'>
        <Container>
        
                    <div className='abouttext'> 
<p>Alright! Here is the start of Alexander Sucks</p>
                    </div>
        </Container>
        <TechStack/>
    </div>
        
    )
}