import React from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import rugrattv from '../assets/rugrattv.png';
import Container from 'react-bootstrap/Row';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

const Styles = styled.div`
font-family: KidsCorner-Regular;
font-size: 34px; 
letter-spacing: 7.87px;
text-shadow: 0 2px 4px rgba(0,0,0,0.50);
text-decoration: underline;
text-align: center;
.nav-link {color: #FFFFFF;
};
`

const Color1 = styled.div `
.nav-link{ color:#FFFFFF;
    &:hover {
    color: #F53320;
  };
}
`
const Color2 = styled.div `
.nav-link{ color:#FFFFFF;
    &:hover {
    color: #0653F9;
  };
}
`
const Color3 = styled.div `
.nav-link{ color:#FFFFFF;
    &:hover {
    color: #FAFD03;
  };
}
`
const Color4 = styled.div `
.nav-link{ color:#FFFFFF;
    &:hover {
    color: #F703F4;
  };
}
`
const Color5 = styled.div `
.nav-link{ color:#FFFFFF;
    &:hover {
    color: #26D606;
  };
}
`
const Color6 = styled.div `
.nav-link{ color:#FFFFFF;
    &:hover {
    color: #FA7004;
  };
}
`
const Color7 = styled.div `
.nav-link{ color:#FFFFFF;
    &:hover {
    color: #F80BC9;
  };
}
`
const Tv = styled.div`
padding-top: 150px;
margin: 0 auto;
display: block;
`



const HomeNav = () => {
    return ( 
    
      <Container fluid>
        <Styles>    
        <Nav className="justify-content-center" activeKey="/home">
    
        <Nav.Item>
            <Color1>
          <Nav.Link className="nav-link" href="/atlanta" eventKey="link-1">Atlanta</Nav.Link>
          </Color1>
        </Nav.Item>
        <Nav.Item>
            <Color2>
          <Nav.Link href="/twin-peaks" eventKey="link-2">Twin Peaks</Nav.Link>
          </Color2>
        </Nav.Item>
   
        <Nav.Item>
            <Color3>
          <Nav.Link eventKey="link-3">Martin</Nav.Link>
          </Color3>
        </Nav.Item>
        <Nav.Item>
            <Color4>
          <Nav.Link eventKey="link-4">I Love Lucy</Nav.Link>
          </Color4>
        </Nav.Item>
        <Nav.Item>
            <Color5>
          <Nav.Link eventKey="link-5">The Wire</Nav.Link>
          </Color5>
        </Nav.Item>
        <Nav.Item>
            <Color6>
          <Nav.Link eventKey="link-6">Game of Thrones</Nav.Link>
          </Color6>
        </Nav.Item>
        <Nav.Item>
            <Color7>
          <Nav.Link eventKey="link-7">The Sopranos</Nav.Link>
          </Color7>
        </Nav.Item>
        <Nav.Item>
            <Color1>
          <Nav.Link eventKey="link-8">The Golden Girls</Nav.Link>
          </Color1>
          </Nav.Item>
          <Nav.Item>
              <Color2>
          <Nav.Link eventKey="link-9">The Fresh Prince</Nav.Link>
          </Color2>
        </Nav.Item>
        <Nav.Item>
            <Color3>
          <Nav.Link eventKey="link-10">The Twilight Zone</Nav.Link>
          </Color3>
        </Nav.Item>
      </Nav>
      </Styles>
      <Tv>
      <Image src={rugrattv} fluid />
      </Tv>
    </Container>
   
     );
}
 
export default HomeNav;