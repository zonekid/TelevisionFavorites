import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from './Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Goldenback from '../assets/goldengirlsback.jpg';

const Pic = styled.div`
text-align:center;
padding-top: 100px;
padding-bottom: 60px;
`

const Summary = styled.p `
padding-top: 35px;
font-family: LucidaGrande-Bold;
font-size: 16px;
color: #FDF508;
letter-spacing: 7.73px;
text-align: center;
text-shadow: 0 2px 4px rgba(0,0,0,0.50);
@media (max-width: 575px) {
    font-size: 13px;
    letter-spacing: 5.73px;
}
`

const Rectangle = styled.div `
/* margin: 0 auto; */

background: rgba(125,207,218,0.88);
border: 1px solid #979797;
box-shadow: 4px 4px 12px 0 rgba(0,0,0,0.50);
border-radius: 29px;

/* width: 764px;
height: 939px; */
`

class Golden extends Component {
    state = { 
        loading: true,
        info: null
     }

async componentDidMount() {
    const url = "https://api.themoviedb.org/3/tv/1678?api_key=f6825d0ea980c8d7e503d3bd64c33d94&language=en-US";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({info: data, loading: false});
}

    render() { 
 const img = "https://image.tmdb.org/t/p/w400/79OgqSv18PWvo29rN8U5f496DsX.jpg";

 const {info} = this.state;

if (this.state.loading) {
    return <div>...</div>
}

console.log(info.networks[0].name)


        return ( 
        
        <div style={{backgroundImage:`url(${Goldenback})`, backgroundSize: 'cover', backgroundPosition: 'center', paddingBottom: 100}}>

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
    Air Dates: September 14, 1985 – May 9, 1992<br></br>
    Stars: Betty White, Bea Arthur, Estelle Getty, Rue McClanaha<br></br><br></br>
    The Golden Girls is a wonderfully written, extremely funny show that will always be one of the greatest comedy efforts of all time. It proves to audiences that sassy grandmas are the heroes we never knew we wanted. On paper, a show about four elderly women doesn’t sound all that exciting. But when they are played by Betty White, Beatrice Arthur, Rue McClanahan, and Estelle Getty, that all changes. There’s something undeniably amusing about watching old women talk about taboo topics.  The show has laughter everyone can enjoy, and it explores topics that few shows dare to address. 
<br></br><br></br>
    
All four women won Emmy Awards for their roles, and the show enjoyed extraordinary ratings and acclaim. Every aspect of the show provides for pure comedic entertainment that transcends the art itself. The show provides a look into how friends from very different backgrounds compliment each other and become the best of friends. Each character brings a unique dynamic to the plot, and any viewer can learn from, identify with, and, of course, laugh at their adventures. Simply a show for the ages. The Golden Girls is another classic, and I’d be hard pressed to find someone who can watch an episode without cracking a smile.

    </Summary>
    </Rectangle>
    </Col>
    </Row>

        </div> 
        );
    }
}
 
export default Golden;