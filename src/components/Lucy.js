import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from './Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import lucyback from '../assets/lucyback.png';
import './font.css';

const Pic = styled.div`
text-align:center;
padding-top: 127px;
padding-bottom: 60px;
`

const Summary = styled.p `
font-family: ComicBold;
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
background: #E0061C;
/* width: 764px;
height: 939px; */
`

class Lucy extends Component {
    state = { 
        loading: true,
        info: null
     }

async componentDidMount() {
    const url = "https://api.themoviedb.org/3/tv/2730?api_key=f6825d0ea980c8d7e503d3bd64c33d94&language=en-US";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({info: data, loading: false});
}

    render() { 
 const img = "https://image.tmdb.org/t/p/w400/qvPk5BDS1tYRyoxerU6bYk5zix6.jpg";

 const {info} = this.state;

if (this.state.loading) {
    return <div>...</div>
}

console.log(info.networks[0].name)


        return ( 
        
        <div style={{backgroundImage:`url(${lucyback})`, backgroundSize: 'cover', backgroundPosition: 'center', paddingBottom: 100}}>

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
    Air Dates: Oct. 15, 1951 - May 6, 1957<br></br>
    Stars: Lucille Ball, Desi Arnaz, Vivian Vance, William Frawley, Keith Thibodeaux<br></br><br></br>

    Lucille Ball's face was an elastic wonder, capable of overflowing pouts, wide and tight smiles. It could hold quantities of chocolate that would OD the most seasoned trick-or-treater. You laughed at her face and fell in love with it, whatever she needed from you at the moment. For six years, she accumulated laughter and adoration as Lucy Ricardo, wife to Ricky (real-life husband Desi Arnaz), friend to Fred and Ethel, eventual mother to Little Ricky.
    <br></br><br></br>
    
    During a time when TV was still figuring out whether it was just a means to keep viewers alert during advertisements or could be art, the majority of Americans watched I Love Lucy—during its second season, nearly 70 percent of the country was tuning in. Since it first began, there has not been a time when it was not airing. Even today, you can find it, and it's all because of the woman in the title. —RS 


    </Summary>
    </Rectangle>
    </Col>
    </Row>

        </div> 
        );
    }
}
 
export default Lucy;