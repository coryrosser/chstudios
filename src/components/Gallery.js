import React from 'react'
import styled from 'styled-components'
import {Row, Col, Image} from 'react-bootstrap'
import ChadWithFish from '../assets/images/ChadWithFish.jpeg'
import ChadFishing from '../assets/images/ChadFishing.jpg'
import DisposableChad from '../assets/images/DisposableChad.jpg'
import Creek from '../assets/images/Creek.jpg'
import Field from '../assets/images/Field.jpg'
import FishShot from '../assets/images/FishShot.jpg'
import Hunting from '../assets/images/Hunting.jpg'
import LogDog from '../assets/images/LogDog.jpg'
import RiverFishing from '../assets/images/RiverFishing.jpg'
import RiverFishing2 from '../assets/images/RiverFishing2.jpg'
import Standing from '../assets/images/Standing.jpg'
import Trees from '../assets/images/Trees.jpg'
import Trees2 from '../assets/images/Trees2.jpg'

const Styles = styled.div`
    background: #f7f7f7;
    .gallery-container {
        width: 100vw;
        margin-left: 0;
    }
    .gallery-title-text {
        color: #444;
        font-size: 4vh;
    }
    .gallery-title-row {
        margin-left: 0;
        width: 100%;
        justify-content: center;
        margin-top: 10vh;
    }
    .gallery-subtext-row {
        margin-left: 0;
        width: 100%;
        justify-content: center;
        margin-top: 2.5vh;
    }
    .gallery-subtext {
        font-size: 2vh;
    }
    .gallery-img-row {
        margin-top: 10vh;
    }
    .img-card {
        margin-top: 10vh;
        width: 90%;
        text-align: center;
    }
    .img-pic {
        height: 60vh;
        box-shadow: 0 8px 6px -6px black;
    }
    .img-text {
        font-size: 2vh;
        color: #444;
    }
`;


const Gallery = (props) => {
    let imgs = [
        ChadFishing, ChadWithFish, Creek, DisposableChad, Field, FishShot,
        Hunting, LogDog, RiverFishing, RiverFishing2, Standing, Trees, Trees2]
    return (
        <Styles>
            <Row className='gallery-container'>
                <Col>
                <Row className='gallery-title-row'> 
                    <div className='gallery-title-text'>
                        Gallery
                    </div>
                </Row>
                <Row className='gallery-subtext-row'>
                    <div className='gallery-subtext'>
                        <span className='quote-mark'>"</span>
                        You must not only aim right, but draw the bow with all your might.
                        <span className='quote-mark'>"</span>
                    </div>
                </Row>
                <Row className='gallery-img-row'>
                    { imgs.map((img) => {
                        return (
                            <Col xs={10} md={6} >
                                <div className='img-card'>
                                <Image className='img-pic' src={img} />
                                <p className='img-text'>Image</p>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
                </Col>
            </Row>
        </Styles>
    )
}

export default Gallery