import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from './Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './font.css';

const Pic = styled.div`
text-align:center;
padding-top: 127px;
padding-bottom: 60px;
`

const Summary = styled.p `
font-family: Chantilly;
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
border: 1px solid #979797;
box-shadow: 4px 4px 12px 0 rgba(0,0,0,0.50);
border-radius: 29px;
background: #E96304;
/* width: 764px;
height: 939px; */
`

class Martin extends Component {
    state = { 
        loading: true,
        info: null
     }

async componentDidMount() {
    const url = "https://api.themoviedb.org/3/tv/171?api_key=f6825d0ea980c8d7e503d3bd64c33d94&language=en-US";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({info: data, loading: false});
}

    render() { 
 const img = "https://image.tmdb.org/t/p/w400/inQQEpHiaSy8BEd9XEFF2W39vO0.jpg";

 const {info} = this.state;

if (this.state.loading) {
    return <div>...</div>
}

console.log(info.networks[0].name)


        return ( 
        
        <div style={{backgroundColor:`#310053`, backgroundSize: 'cover', backgroundPosition: 'center', paddingBottom: 100}}>

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
    Air Dates: Aug. 27, 1992 – May 1, 1997<br></br>
    Stars: Martin Lawrence, Tisha Campbell, Carl Anthony Payne II, Thomas Mikal Ford, Tichina Arnold<br></br><br></br>

    Very few programs remain every bit as entertaining over 15 years after their conclusion as Martin, a show about a big-eared radio DJ from Detroit with enough personality for an entire cast. Comedian and actor Martin Lawrence played Martin Payne, a DJ for WZUP (and eventually the host of his own talk show, "Word on the Street"). Central to the show was Martin's relationship with Gina Waters, the large-headed (literally) love of his life. They broke up and got back together throughout the series, but their genuine love provided a complement to the show's constant comedy. Also important were Martin's relationships with his biggest adversary, Gina's best friend, Pam James, and his two best friends, the comically inept Cole Brown and the tall, bald, and possibly unemployed Tommy Strawn.
    <br></br><br></br>
    
    Martin also had numerous amazing guest stars like Richard Pryor, Billy Dee Williams, Keith Washington, Snoop Dogg, Tommy Hearns, Randall Cunningham, Method Man, Jodeci, and even Biggie. No show today is landing cameos like that. Not only was Martin instrumental in African-American culture and hip-hop culture, it played a role in popular culture that can't be argued. —K 


    </Summary>
    </Rectangle>
    </Col>
    </Row>

        </div> 
        );
    }
}
 
export default Martin;