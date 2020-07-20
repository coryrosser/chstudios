import React from 'react';
import './App.css';
import {Row, Col, Image} from 'react-bootstrap'


import styled from 'styled-components'
import NavBar from './components/NavBar'
import About from './components/About'
import Gallery from './components/Gallery'

const Styles = styled.div`
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
  height: 100vh;
  width: 100vw;
  background: url(https://bit.ly/38Ru0Y1) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  .landing-img {
    height: 25vh;
    border-radius: 1vh;
    margin-top: 15vh;
    margin-left: auto;
    margin-right: auto;
    border: rgb(0, 82, 98, 0.5) solid .5vh;
    width: auto;
    animation: fadeIn 4s;
  }
  @keyframes fadeIn {
    from{
      opacity: 0
    }
    to {
      opacity: 1
    }
  }
  .content-row{
    margin-lefT: 0;
    height: 95vh;
    width: 100vw;
    background: rgb(0,0,0,0.3);
  }
  .name-brand {
    color: #f7f7f7;
    width: 100%;
    text-align: center;
    font-size: 8vh;
    animation: fadeIn 6s;
  }
  .name-brand-text {
    font-size: 3vh;
    color: #bde5ac;
    width: 100%;
    text-align: center;
    animation: fadeIn 8s;
  }
  .welcome-row {
    margin-top: 20vh;
  }
  .landing-btm{
    margin-top: 53vh;
    width: 100vw;
  }
  .landing-btm-text{
    font-size: 3vh;
    color: #FFFDE7;
    margin-left: auto;
    margin-right:auto;
    animation: fadeIn 8s;
  }
`

function App() {
  return (
    <Styles>
      <div className="app-container">
       {/* <NavBar /> 
      <Row className='content-row'>
        <Col>
        <Row className='welcome-row'>
          <div className='name-brand'>Chad J. Hoffman</div>
          <div className='name-brand-text'>Photographer, Environmentalist, Creator</div>
        </Row>
        <Row className='landing-btm'>
          <div className='landing-btm-text'>Scroll to see more</div>
        </Row>
        </Col>
      </Row>
      <About /> */}
      <Gallery />
    </div>
    </Styles>
  );
}

export default App;
