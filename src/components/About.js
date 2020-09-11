import React from 'react'
import styled from 'styled-components'
import {Row, Col, Image} from 'react-bootstrap'
import ChadWithFish from '../assets/images/ChadWithFish.jpeg'
import ChadFishing from '../assets/images/ChadFishing.jpg'
import DisposableChad from '../assets/images/DisposableChad.jpg'

const Styles = styled.div`
    // background: linear-gradient(rgb(0,0,0,0.3), #FFFDE7 35%);
    background: #FFFDE7;
    .about-container {
        height: 100vh;
        width: 100vw;
        border-bottom: rgb(0,0,0,0.2) solid 1px;
    }
    .about-img-col {
        text-align: center;
    }
    .about-content-col {
        text-align: center;
    }
    .about-title-row {
        width: 100%;
        margin-left: 0;
        margin-top: 10vh;
    }
    .about-title-text {
        margin-left: 0;
        margin-right: 0;
        width: 100%;
        color: #444;
        text-align: center;
        font-size: 4vh;
    }
    .chad-img {
        width: 75%;
        margin-top: 10vh;
        box-shadow: 0 8px 6px -6px black;
        border: rgb(0,0,0,0.3) solid 3px;
    }
    .two-pic-row {
        margin-top: 2vh;
    }
    .two-pic {
        height: 25vh;
        
        border: rgb(0,0,0,0.3) solid 1px;
    }
    .pic-column {
    }
    .about-content-row {
        max-height: 75vh;
        overflow-y: scroll;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
    .about-content-text {
        margin-top: 5vh;
        font-size: 2.25vh;
    }
`

const About = (props) => {
    return (
        <Styles>
        <Row className='about-container'> 
            <Col className='about-img-col' xs={12} lg={6}>
                <Image 
                className='chad-img'
                src={ChadFishing} />
                {/* <Row className='two-pic-row'>
                    <Col 
                    className='pic-column'
                    xs={12} md={6}>
                        <Image className='two-pic' src={ChadWithFish} />
                    </Col>
                    <Col 
                    className='pic-column'
                    xs={12} md={6}>
                        <Image className='two-pic' src={DisposableChad} />
                    </Col>
                </Row> */}
            </Col>
            <Col className='about-content-col' xs={12} lg={6}>
                <Row className='about-title-row'> 
                <div className='about-title-text'>
                    Who am I?
                </div>
                </Row>
                <Row className='about-content-row'>
                    <div className='about-content-text'>
                    Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen book. It has 
                    survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with 
                    desktop publishing software like Aldus PageMaker 
                    including versions of Lorem Ipsum.
                    </div>
                </Row>
            </Col>
        </Row>
        </Styles>
    )
}

export default About 