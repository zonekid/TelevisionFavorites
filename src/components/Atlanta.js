import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from './Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Atlantaback from '../assets/Atlantabackdrop.jpg';

const Pic = styled.div`
text-align:center;
padding-top: 100px;
padding-bottom: 60px;
`

const Summary = styled.p `
font-family: ComicSansMS-Bold;
font-size: 16px;
color: #FBF0D0;
letter-spacing: 7.73px;
text-align: center;
text-shadow: 0 2px 4px rgba(0,0,0,0.50);
padding-top: 35px;

`

const Rectangle = styled.div `
/* margin: 0 auto; */
background: rgba(136,150,137,0.88);
border: 1px solid #979797;
box-shadow: 4px 4px 12px 0 rgba(0,0,0,0.50);
border-radius: 29px;
/* width: 764px;
height: 939px; */
`

class Atlanta extends Component {
    state = { 
        loading: true,
        info: null
     }

async componentDidMount() {
    const url = "https://api.themoviedb.org/3/tv/65495?api_key=f6825d0ea980c8d7e503d3bd64c33d94&language=en-US";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({info: data, loading: false});
}

    render() { 
 const img = "https://image.tmdb.org/t/p/w400/lbE138t2eSyVohab6i91OBGbPgC.jpg";

 const {info} = this.state;

if (this.state.loading) {
    return <div>...</div>
}

console.log(info.networks[0].name)


        return ( 
        
        <div style={{backgroundImage:`url(${Atlantaback})`, backgroundSize: 'cover', backgroundPosition: 'center', paddingBottom: 100}}>

<NavBar/>
<Row>
    <Col xs={{span: 10, offset: 1}} sm={{span: 10, offset: 1}}  >
<Pic>
<Image src={img} fluid />;
</Pic>
</Col>
</Row>
<Row>
    <Col sm={{span: 10, offset: 1}} xs={{span: 10, offset: 1}} md={{span: 8, offset: 2}} xl={{span: 6, offset: 3}} lg={{span: 8, offset: 2}}>
<Rectangle>
<Summary>
    Network: {info.networks[0].name}<br></br>
    Created by: {info.created_by[0].name}<br></br>
    Air Dates: September 6, 2016–present<br></br>
    Stars: Donald Glover, Brian Tyree Henry, Lakeith Stanfield, Zazie Beetz<br></br><br></br>
    Part of what makes Atlanta succeed is how it quietly debases that otherness. Easily one of the decade’s best shows of any genre, Glover’s most essential work is a piece of surreality that grounds itself in a realistic perspective of blackness that’s as fertile as the city that lends the series its name. Glover dials back the nerdy histrionics to become Earn, a college dropout who sees a new opportunity in managing his cousin, Alfred, AKA already-over-it rapper Paper Boi. Rounding out the core characters is Earn’s baby mother Van, who’s caught between responsibilities to her daughter and herself, and Alfred's best friend Darius, who’s just... Darius. In short, they’re all screw-ups to an extent.<br></br><br></br>
    
    Atlanta is basically a new show with every episode, but even as it chicanes through a dark comedy variety show (“B.A.N.”), straight-up horror (all-timer “Teddy Perkins”), and bildungsroman (“FUBU”), it centers on the idea of the impossibility of self-improvement. The parade of absurdities—who could forget Black Justin Bieber?—lends Atlanta its charm, but it’s the attention paid to humanity that makes the series resonate. —Khal
    </Summary>
    </Rectangle>
    </Col>
    </Row>

        </div> 
        );
    }
}
 
export default Atlanta;