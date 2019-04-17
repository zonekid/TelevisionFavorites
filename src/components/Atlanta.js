import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from './Nav';
import Container from 'react-bootstrap/Container';
const Styles = styled.div`

`

class Atlanta extends Component {
    state = { 
        loading: true,
        img: "https://image.tmdb.org/t/p/w500/lbE138t2eSyVohab6i91OBGbPgC.jpg",
        
     }

async componentDidMount() {
    const url = "https://api.themoviedb.org/3/tv/65495?api_key=f6825d0ea980c8d7e503d3bd64c33d94&language=en-US";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({loading: false});
}

    render() { 
if (this.state.loading) {
    return <div>loading...</div>
}


        return ( 
        
        <div>

<NavBar/>

        </div> 
        );
    }
}
 
export default Atlanta;