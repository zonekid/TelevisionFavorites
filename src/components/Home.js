import React from 'react';
import styled from 'styled-components';
import HomeNav from './HomeNav';
import rugrattv from '../assets/rugrattv.png';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const HomeTitle = styled.h1`
text-transform: uppercase;
text-align: center;
font-family: KidsCorner-Regular;
font-size: 59px;
letter-spacing: 7.88px;
text-shadow: 0 2px 4px rgba(0,0,0,0.50);
`

const Tv = styled.div`
padding-top: 150px;
margin: 0 auto;
display: block;
text-align: center;
`

const Disclosure = styled.p`
font-family: KidsCorner-Regular;
font-size: 12px;
letter-spacing: 7.88px;
text-shadow: 0 2px 4px rgba(0,0,0,0.50);
color: #FFFFFF;
padding-top: 50px;
`

export const Home = () => (
<div style={{backgroundColor:`#8ce9ff`, backgroundSize: 'cover', backgroundPosition: 'center', paddingBottom: 350}}>
    <HomeTitle>
    <span style={{ color: '#F53320' }}>m</span>
    <span style={{ color: '#0653F9' }}>a</span>
    <span style={{ color: '#FAFD03' }}>r</span>
    <span style={{ color: '#F703F4' }}>c</span>
    <span style={{ color: '#26D606' }}>u</span>
    <span style={{ color: '#FA7004' }}>s</span>
    <span style={{ color: '#F80BC9' }}>'</span>
    <span style={{ color: '#9013FE' }}>s</span>
    <span style={{ color: '#F53320' }}> </span>
    <span style={{ color: '#F53320' }}>F</span>
    <span style={{ color: '#0653F9' }}>a</span>
    <span style={{ color: '#FAFD03' }}>v</span>
    <span style={{ color: '#F703F4' }}>o</span>
    <span style={{ color: '#26D606' }}>r</span>
    <span style={{ color: '#FA7004' }}>i</span>
    <span style={{ color: '#F80BC9' }}>t</span>
    <span style={{ color: '#9013FE' }}>e</span>
    <span style={{ color: '#F53320' }}> </span>
    <span style={{ color: '#F53320' }}>s</span>
    <span style={{ color: '#0653F9' }}>h</span>
    <span style={{ color: '#FAFD03' }}>o</span>
    <span style={{ color: '#F703F4' }}>w</span>
    <span style={{ color: '#26D606' }}>s</span>
    </HomeTitle>
    <HomeNav/>
    <Tv>
    <Image src={rugrattv} fluid />
    </Tv>
<Row>
    <Col xl={{span: 2, offset:9}} lg={{span: 3, offset:7}} md={{offset:1}} >
    <Disclosure>
    API courtesy of https://www.themoviedb.org  All writing credits courtery of Complex Magazine  
    </Disclosure>
    </Col>
</Row>
    </div>


)
