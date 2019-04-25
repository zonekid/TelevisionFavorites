import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from './Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const Pic = styled.div`
text-align:center;
padding-top: 100px;
padding-bottom: 60px;
`

const Summary = styled.p `
font-family: Mobsters;
font-size: 20px;
color: #C71D0E;
letter-spacing: 9.67px;
text-align: center;
text-shadow: 0 2px 4px rgba(0,0,0,0.50);
padding-top: 35px;

`

const Rectangle = styled.div `
/* margin: 0 auto; */
background: #000000;
border: 1px solid #979797;
box-shadow: 4px 4px 12px 0 rgba(0,0,0,0.50);
border-radius: 29px;
/* width: 764px;
height: 939px; */
`

class Sopranos extends Component {
    state = { 
        loading: true,
        info: null
     }

async componentDidMount() {
    const url = "https://api.themoviedb.org/3/tv/1398?api_key=f6825d0ea980c8d7e503d3bd64c33d94&language=en-US";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({info: data, loading: false});
}

    render() { 
 const img = "https://image.tmdb.org/t/p/w400/u0cLcBQITrYqfHsn06fxnQwtqiE.jpg";

 const {info} = this.state;

if (this.state.loading) {
    return <div>...</div>
}

console.log(info.networks[0].name)


        return ( 
        
        <div style={{backgroundColor:`#FBF6F0`, backgroundSize: 'cover', backgroundPosition: 'center', paddingBottom: 100}}>

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
    Air Dates: January 10, 1999 – June 10, 2007<br></br>
    Stars: James Gandolfini, Edie Falco, Lorraine Bracco, Michael Imperioli, Dominic Chianese, Robert Iler, Jamie-Lynn Sigler, Drea de Matteo, Tony Sirico, Steven Van Zandt, Vincent Pastore, David Proval, Aida Turturro, Nancy Marchand, Steven R. Schirripa, Federico Castelluccio, John Ventimiglia, Vincent Curatola, Steve Buscemi, Max Casella, Joe Pantoliano, Joseph R. Gannascoli<br></br><br></br>
    
    As with any intimate relationship, the connection that exists between viewer and television series can be a complicated one. Like any loved one, the television characters we come to know best have the ability to trigger a range of emotions—glee, despair, surprise, fear, anger—allowing us to love them and hate them in equal parts. <br></br><br></br>

    In the history of television, few shows have engaged viewers as passionately as David Chase's The Sopranos, the story of a New Jersey mob boss with mommy issues. (OK, so it's a bit more complicated.) Steeped in nihilism and based in the psychotherapy process, the show—which ran for six seasons on HBO between 1999 and 2007—has been cited by many critics as one of the greatest series in the history of television. And with very good reason.   <br></br><br></br>

The Sopranos set the standard for excellence on HBO, and captured the attention of the nation. Has any recent TV finale been discussed more than the end of this series? No. And we'll continue to discuss it. We'll only continue to analyze the mob epic that was so much more. —Jennifer Wood
    </Summary>
    </Rectangle>
    </Col>
    </Row>

        </div> 
        );
    }
}
 
export default Sopranos;