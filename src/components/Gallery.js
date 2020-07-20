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
    min-height: 100vh;
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
        width: 75%;
        box-shadow: 0 8px 6px -6px black;
    }
    .img-text {
        font-size: 2vh;
        color: #444;
    }
    .cat-card-outdoor, .cat-card-people {
        border: rgb(0,0,0,0.3) solid 1px;
        text-align: center;
        height: 40vh;
        box-shadow: 0 8px 6px -6px black;
        cursor: pointer;
    }
    .cat-card-outdoor {
        
    }
    .cat-card-people {

    }
    .cat-card-text {
        color: #f7f7f7;
        font-size: 5vh;
        background: rgb(0,0,0,0.7);
        box-shadow: 0 8px 6px -6px black;
        position: absolute;
        padding: .25vh;
        bottom: -5vh;
        left: 20vw;
    }
    .cat-card-overlay {
        font-size: 0;
        background: rgb(0,0,0,0.6);
        color: #f7f7f7;
    }
    .card-img {
        max-height: 100%;
        object-fit: cover;
    }
    `;


class Gallery extends React.Component {
    imgs = [
        {
            name: ChadFishing,
            cat: 'People'
        },
        {
            name: ChadWithFish,
            cat: 'People'
        },
        {
            name: Creek,
            cat: 'Outdoor'
        },
        {
            name: DisposableChad,
            cat: 'People'
        },
        {
            name: Field,
            cat: 'Outdoor'
        },
        {
            name: FishShot,
            cat: 'Outdoor'
        },
        {
            name: Hunting,
            cat: 'People'
        },
        {
            name: LogDog,
            cat: 'Outdoor'
        },
        {
            name: RiverFishing,
            cat: 'People'
        },
        {
            name: RiverFishing2,
            cat: 'People'
        },
        {
            name: Standing,
            cat: 'People'
        },
        {
            name: Trees,
            cat: 'Outdoor'
        },
        {
            name: Trees2,
            cat: 'Outdoor'
        }
    ]
    state = {
        filteredImgs: [],
    }
    setPicFilter = (filter) => {
        let imgList = this.imgs.filter((img) => img.cat === filter)
        this.setState({filteredImgs: [...imgList]})
    }

    renderImages = (list) => {
        return list.map((entry) => {
            return (
            <Col xs={10} md={6} >
                <div className='img-card'>
                    <Image className='img-pic' src={entry.name} />
                    <p className='img-text'>Image</p>
                </div>
            </Col>
            )
        })
    }
    render(){
            return (
                <Styles>
                    <Row className='gallery-container'>
                        <Col xs={12} >
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
                            
                            <Col xs={10} md={6}>
                                <div className='cat-card-outdoor'
                                onClick={()=> {
                                    this.setPicFilter('Outdoor')
                                }}>
                                <Image className='card-img' src={FishShot} />
                                <div className='cat-card-overlay'>See More</div>
                                    <p className='cat-card-text'>Outdoor</p>
                                </div>
                            </Col>
                            <Col xs={10} md={6}>
                                <div className='cat-card-people' 
                                onClick={()=> {
                                    this.setPicFilter('People')
                                }}>
                                <Image className='card-img' src={DisposableChad} />
                                <div className='cat-card-overlay'>See More</div>
                                <p className='cat-card-text'>People</p>
                                </div>
                            </Col>
                            {this.state.filteredImgs ? 
                            this.renderImages(this.state.filteredImgs) :
                            <></>}
                        {/*   { imgs.map((img) => {
                                return (
                                    <Col xs={10} md={6} >
                                        <div className='img-card'>
                                        <Image className='img-pic' src={img} />
                                        <p className='img-text'>Image</p>
                                        </div>
                                    </Col>
                                )
                            })} */}
                        </Row>
                        </Col>
                    </Row>
                </Styles>
        )
    }
}

export default Gallery