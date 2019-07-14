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
font-family: ComicSansMS-Bold;
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
background: #9FD708;
border: 1px solid #979797;
box-shadow: 4px 4px 12px 0 rgba(0,0,0,0.50);
border-radius: 29px;
/* width: 764px;
height: 939px; */
`

class Fresh extends Component {
    state = { 
        loading: true,
        info: null
     }

async componentDidMount() {
    const url = "https://api.themoviedb.org/3/tv/1892?api_key=f6825d0ea980c8d7e503d3bd64c33d94&language=en-US";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({info: data, loading: false});
}

    render() { 
 const img = "https://image.tmdb.org/t/p/w400/fJXzwxCVr2TEkhhKRKcih9o5DYK.jpg";

 const {info} = this.state;

if (this.state.loading) {
    return <div>...</div>
}

console.log(info.networks[0].name)


        return ( 
        
        <div style={{backgroundColor:`#FF2D88`, backgroundSize: 'cover', backgroundPosition: 'center', paddingBottom: 100}}>

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
    Air Dates: Sept. 10, 1990–May 20, 1996<br></br>
    Stars: Will Smith, James Avery, Alfonso Ribiero, Karyn Parsons, Tatyana M. Ali, Janet Hubert-Whitten, Joseph Marcell, Daphne Maxwell Reid, DJ Jazzy Jeff<br></br><br></br>

    During its six-season run on NBC, The French Prince of Bel-Air was a juggernaut. Viewers learned the theme song without trying. Smith even allowed "Summertime," his classic track recorded with DJ Jazzy Jeff, to fuel the show's popularity and vice versa. Hell, the legendary DJ landed a role on the show as Will's friend, the one whose undying love for Hilary got him regularly ejected from the Banks' residence.
    <br></br><br></br>
    
    The Fresh Prince of Bel-Air was the perfect complement and eventual successor to The Cosby Show, as it depicted an upper-class African-American family that wasn't out of touch with the realities of black America. It wasn't quite as funny as Martin, but it dealt with a broader range of subjects. That makes it one of the better television shows of all-time-period. -—JK 

    </Summary>
    </Rectangle>
    </Col>
    </Row>

        </div> 
        );
    }
}
 
export default Fresh;