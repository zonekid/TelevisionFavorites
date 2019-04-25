import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from './Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import twinback from '../assets/backdroptwin.jpg';

const Pic = styled.div`
text-align:center;
padding-top: 100px;
padding-bottom: 60px;
`

const Summary = styled.p `
font-family: AmericanTypewriter-Semibold;
font-size: 16px;
color: #FFFFFF;
letter-spacing: 7.73px;
text-align: center;
text-shadow: 0 2px 4px rgba(0,0,0,0.50);
padding-top: 35px;

`

const Rectangle = styled.div `
/* margin: 0 auto; */
background-image: linear-gradient(180deg, rgba(185,37,42,0.77) 1%, rgba(132,16,19,0.76) 79%);
border: 1px solid #979797;
box-shadow: 4px 4px 12px 0 rgba(0,0,0,0.50);
border-radius: 29px;
/* width: 764px;
height: 939px; */
`

class TwinPeaks extends Component {
    state = { 
        loading: true,
        info: null
     }

async componentDidMount() {
    const url = "https://api.themoviedb.org/3/tv/1920?api_key=f6825d0ea980c8d7e503d3bd64c33d94&language=en-US";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({info: data, loading: false});
}

    render() { 
 const img = "https://image.tmdb.org/t/p/w400/6W6zWBAay6XVBgJsOu6c2mlFZ8l.jpg";

 const {info} = this.state;

if (this.state.loading) {
    return <div>...</div>
}

console.log(info.networks[0].name)


        return ( 
        
        <div style={{backgroundImage:`url(${twinback})`, backgroundSize: 'cover', backgroundPosition: 'center', paddingBottom: 100}}>

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
    Created by: {info.created_by[0].name} & {info.created_by[1].name}<br></br>
    Air Dates: April 8, 1990 - June 10, 1991<br></br>
    Stars: Kyle MacLachlan, Madchen Amick, Dana Ashbrook, Lara Flynn Boyle, Sherilyn Fenn, Michael Ontkean, Richard Breymer, Joan Chen, Piper Laurie, Peggy Lipton, Everett McGill, James Marshall, Jack Nance, Warren Frost, Harry Goaz, Michael Horse, Russ Tamblyn, Ray Wise<br></br><br></br>

    It's not exactly "going out on a limb" to declare that network TV will never air another show quite like Twin Peaks. Much like how cinemas don't regularly screen films comparable to Blue Velvet or Mulholland Drive. The common denominator here, of course, is David Lynch, the unclassifiable filmmaker whose wonderfully odd sensibilities own stock in horror, drama, romance, comedy, and brain-scrambling WTF-ness.
    <br></br><br></br>
    
    All of those elements, and plenty more, were the high points of Twin Peaks, the anything but routine procedural soap, co-created by Lynch and Mark Frost, that left viewers scratching their temples through its two-season existence. When they weren't scratching, though, viewers were applauding the show's uncanny knack for producing shivers and awkward laughs in equal measure. <br></br><br></br>

    The plot of Twin Peaks, or whatever semblance of coherent narrative there was, traced the investigations of one Agent Dale Cooper (Kyle McLachlan), a beguiling lead character obsessed with nabbing the person who killed homecoming queen Laura Palmer; unlike AMC's The Killing, though, the whodunit side of Twin Peaks played second fiddle to the show's beautifully random scenes. - MB

    </Summary>
    </Rectangle>
    </Col>
    </Row>

        </div> 
        );
    }
}
 
export default TwinPeaks;