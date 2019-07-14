import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from './Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import twilightback from '../assets/twlightback2.jpg';

const Pic = styled.div`
text-align:center;
padding-top: 100px;
padding-bottom: 60px;
`

const Summary = styled.p `
font-family: TwyliteZoneBook;
font-size: 18px;
color: #FEFEFE;
text-shadow: 0 2px 4px rgba(0,0,0,0.50);
padding-top: 35px;
letter-spacing: 8.7px;
text-align: center;
@media (max-width: 575px) {
    font-size: 13px;
    letter-spacing: 5.73px;
}
`

const Rectangle = styled.div `
/* margin: 0 auto; */
background: rgba(113,113,113,0.94);
border: 1px solid #848484;
box-shadow: 4px 4px 12px 0 rgba(0,0,0,0.50);
border-radius: 29px;
/* width: 764px;
height: 939px; */
`

class Twilight extends Component {
    state = { 
        loading: true,
        info: null
     }

async componentDidMount() {
    const url = "https://api.themoviedb.org/3/tv/6357?api_key=f6825d0ea980c8d7e503d3bd64c33d94&language=en-US";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({info: data, loading: false});
}

    render() { 
 const img = "https://image.tmdb.org/t/p/w400/7uY4pCOxbEdv4M8jTE4uMPVoSIW.jpg";

 const {info} = this.state;

if (this.state.loading) {
    return <div>...</div>
}

console.log(info.networks[0].name)


        return ( 
        
        <div style={{backgroundImage:`url(${twilightback})`, backgroundSize: 'cover', backgroundPosition: 'center', paddingBottom: 100}}>

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
    Air Dates: October 2, 1959 - June 19, 1964<br></br>
    Stars: Various<br></br><br></br>
    How many times have you heard someone, when in a bizarre situation, say, "It feels like I'm in the The Twilight Zone"? There's one man to thank for that ongoing pop culture reference point: Rod Serling, the game-changer responsible for several award-winning TV scripts, but most notably known for creating the groundbreaking anthology series The Twilight Zone.
<br></br><br></br>
    
Given a look today, the Zone's greatest episodes still hold up as television's best examples of thought-provoking and unsettling storytelling. Serling and his writing team (led by Richard Matheson and Charles Beaumont), probed societal issues and everyman fears with a genre-specific eye, inserting aliens, time travel, horror, and sometimes dark comedy into the everyday world as mirrors for viewers to confront harsh realities. The show was incredibly ahead of its time. <br></br><br></br>

And it was, more often than not, scary as hell. Try driving on an open road alone at night after watching "The Hitchhiker", or not shivering in the presence of mannequins once you've seen "After Hours". We still get paranoid while flying on airplanes ("Nightmare At 20,000 Feet"), reading cookbooks ("To Serve Man"), and quarreling with neighbors ("The Monsters Are Due On Maple Street"). <br></br><br></br>

Television producers have tried time and time again to match what Serling did back in the early '60s, but to no avail. What's most scary about The Twilight Zone is how brilliant it remains today. —MB
    </Summary>
    </Rectangle>
    </Col>
    </Row>

        </div> 
        );
    }
}
 
export default Twilight;