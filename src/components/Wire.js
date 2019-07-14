import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from './Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import wireback from '../assets/wireback.jpg';

const Pic = styled.div`
text-align:center;
padding-top: 100px;
padding-bottom: 60px;
`

const Summary = styled.p `
font-family: AmericanTypewriter;
font-size: 16px;
color: #FFFFFF;
letter-spacing: 7.73px;
text-align: center;
text-shadow: 0 2px 4px rgba(0,0,0,0.50);
padding-top: 35px;
@media (max-width: 575px) {
    font-size: 13px;
    letter-spacing: 5.73px;
}
`

const Rectangle = styled.div `
/* margin: 0 auto; */
background: rgba(1,0,6,0.82);
border: 1px solid #979797;
box-shadow: 4px 4px 12px 0 rgba(0,0,0,0.50);
border-radius: 29px;
/* width: 764px;
height: 939px; */
`

class Wire extends Component {
    state = { 
        loading: true,
        info: null
     }

async componentDidMount() {
    const url = "https://api.themoviedb.org/3/tv/1438?api_key=f6825d0ea980c8d7e503d3bd64c33d94&language=en-US";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({info: data, loading: false});
}

    render() { 
 const img = "https://image.tmdb.org/t/p/w400/dg7NuKDjmS6OzuNy33qt8kSkPA1.jpg";

 const {info} = this.state;

if (this.state.loading) {
    return <div>...</div>
}

console.log(info.networks[0].name)


        return ( 
        
        <div style={{backgroundImage:`url(${wireback})`, backgroundSize: 'cover', backgroundPosition: 'center', paddingBottom: 100}}>

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
    Air Dates: June 2, 2002 – March 9, 2008<br></br>
    Stars: Dominic West, Idris Elba, Wood Harris, Michael K. Williams, Wendell Pierce, Lance Reddick, Andre Royo, Aidan Gillen, Amy Ryan, John Doman, Frankie Faison, Larry Gillard, Jr., Deirdre Lovejoy, Sonja Sohn, Clarke Peters, Jamie Hector, Tristan Wilds, Isiah Whitlock, Jr<br></br><br></br>
    
    What more can be said? That The Wire is the most important television series of the 21st century is practically textbook truth. Fueled by incredible anger and empathy, David Simon's panorama of Baltimore cast the war on drugs as the futile tragedy so many Americans have known it to be, while also shining light on the unending games all institutions play to keep the oppressed oppressed, and the stats squeaky clean.
<br></br><br></br>
    
The Wire began, in its first season, by chronicling the Barksdale drug operation and the struggle of the police assigned to bring it down. From that center, the other stories radiated outward like the spokes of a wheel. The second season brought the docks to the forefront. The race for mayor of Baltimore entered with the third season. The fourth focused on the nightmare of public education. The fifth tackled the newspaper. <br></br><br></br>

Listing the moving parts does nothing to explain the work of the machine. And, as should be the case with all great art, no piece of writing can take the place of the series itself. <br></br><br></br>

The Wire wasn't perfect. The newspaper arc and serial killer debacle of the fifth season remain missteps. Still, when the show was great—and the first four seasons are peerless—it was moving in a way that had you reaching for a Bible, for the Communist Manifesto, for some massive text that offers guidance in tough times. <br></br><br></br>

Art should help you become a better human, and dammit if The Wire didn't do just that. —RS <br></br><br></br>
    </Summary>
    </Rectangle>
    </Col>
    </Row>

        </div> 
        );
    }
}
 
export default Wire;