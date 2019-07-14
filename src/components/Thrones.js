import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from './Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import gotback from '../assets/gotbackdrop.jpg';

const Pic = styled.div`
text-align:center;
padding-top: 100px;
padding-bottom: 60px;
`

const Summary = styled.p `
padding-top: 35px;
font-family: GameofThrones;
font-size: 16px;
color: #FFFFFF;
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
background: rgba(34,117,203,0.87);
border: 1px solid #979797;
box-shadow: 4px 4px 12px 0 rgba(0,0,0,0.50);
border-radius: 29px;

/* width: 764px;
height: 939px; */
`

class Thrones extends Component {
    state = { 
        loading: true,
        info: null
     }

async componentDidMount() {
    const url = "https://api.themoviedb.org/3/tv/1399?api_key=f6825d0ea980c8d7e503d3bd64c33d94&language=en-US";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({info: data, loading: false});
}

    render() { 
 const img = "https://image.tmdb.org/t/p/w400/7WUHnWGx5OO145IRxPDUkQSh4C7.jpg";

 const {info} = this.state;

if (this.state.loading) {
    return <div>...</div>
}

console.log(info.networks[0].name)


        return ( 
        
        <div style={{backgroundImage:`url(${gotback})`, backgroundSize: 'cover', backgroundPosition: 'center', paddingBottom: 100}}>

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
    Air Dates: April 17, 2011 – present<br></br>
    Stars: Sean Bean, Peter Dinklage, Lena Headey, Nikolaj Coster-Waldau, Michelle Fairley, Emilia Clarke, Aidan Gillen, Iain Glen, Kit Harrington, Charles Dance, Liam Cunningham, Isaac Hempstead-Wright, Richard Madden, Sophie Turner, Maisie Williams, Alfie Allen, Jack Gleeson<br></br><br></br>

Someone should time how long the opening credits sequence for HBO's Game of Thrones runs—it has to be the longest on all of television. And that's because the gruesome, captivating sword-and-sorcery series, based on author George R.R. Martin's best-selling A Song of Fire and Ice book series, seems to average at least one new character introduced per episode. Somehow—perhaps through the kind of magic seen on the show—showrunners David Benioff and D.B. Weiss consistently weave a multifaceted and endlessly compelling yarn around Game of Throne's stacked cast 
<br></br><br></br>
    
During the show's debut season, breakouts like Peter Dinklage (as pint-sized shotcaller and ladies man Tyrion Lannister) and Emilia Clarke (the golden-haired dragon lady Daenerys Targaryen) received most of the attention, but season two saw a few previously limited performers step to the forefront in major ways.<br></br><br></br>
Of special note were Alfie Allen, who gave the suddenly megalomaniacal Theon Greyjoy's violent quest for power a stark (no pun intended) vulnerability; Sophie Turner, the brave young actress who shares most scenes with that sniveling bastard Joffrey (Jack Glesson) and continually manages to hold her own; and Maisie Williams, the 15-year-old wonder who played little Arya's undercover survival within the Lannister family's guarded walls with a sympathetic toughness.<br></br><br></br>

ow Game of Thrones balances so many rich characters while delivering eye-grabbing moments of wild carnage and pricey visual effects is one of the show's many selling points. That just goes to show you the paramount importance of substance over style. —MB


    </Summary>
    </Rectangle>
    </Col>
    </Row>

        </div> 
        );
    }
}
 
export default Thrones;