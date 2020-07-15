import React from 'react';
import {Row, Col} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  .header-row {
    background: #FFFDE7;
    border-bottom: rgb(0,0,0,0.3) solid 1px;
    height: 5vh;
    width: 100vw;
    margin-left: 0;
  }
  .content-row{
    width: 100vw;
    height: 90vh;
    margin-left: 0;
  }
  .top-nav-col {
    text-align: center;
    max-height: 5vh;
  }
  .top-nav-item, .branding-text {
    color: #444;
    margin-top: 1vh;
    font-size: 2vh;
    font-weight: 500;
  }
`

const NavBar = () => {
  return (
    <Styles>
        <Row className='header-row'>
        <Col 
        xs={4}
        className='top-nav-col'>
            <div className='branding-text'>Chad Hoffman Studios</div>
        </Col>
        <Col 
        xs={3}
        />
        <Col 
        xs={1}
        className='top-nav-col'> 
            <div className='top-nav-item'>Home</div>
        </Col>
        <Col 
        xs={1}
        className='top-nav-col'> 
            <div className='top-nav-item'>Gallery</div>
        </Col>
        <Col 
        xs={1}
        className='top-nav-col'> 
            <div className='top-nav-item'>About</div>
        </Col>
        <Col 
        xs={1}
        className='top-nav-col'> 
            <div className='top-nav-item'>Contact</div>
        </Col>
        </Row>
    </Styles>
    );
}

export default NavBar;
