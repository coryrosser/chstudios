import React from 'react'
import styled from 'styled-components'
import {Row, Col, Image} from 'react-bootstrap'

const Styles = styled.div`
    background: linear-gradient(rgb(0,0,0,0.3), #FFFDE7 35%);
    .about-container {
        height: 100vh;
        width: 100vw;
    }
`

const About = (props) => {
    return (
        <Styles>
        <Row className='about-container'> 
            <div>About me</div>
        </Row>
        </Styles>
    )
}

export default About 