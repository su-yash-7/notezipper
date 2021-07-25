import React, { useEffect } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import BackgroundImage from '../images/background1.jpeg';

function LandingPage({ history }) {
  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      history.push('/mynotes');
    }
  }, [history]);
  const ButtonStyle = {
    width: '200px',
    height: '55px',
    '@media (max-width: 500px)': {
      width: '150px',
      height: '50px',
    },
  };
  return (
    <Landing>
      <Container>
        <Row>
          <IntroText>
            <div>
              <Title>Welcome to Note Zipper</Title>
              <SubTitle>One Safe place for all your notes.</SubTitle>
            </div>
            <div>
              <ButtonContainer>
                <a href="/login">
                  <Button size="lg" style={ButtonStyle}>
                    Login
                  </Button>
                </a>
                <a href="/register">
                  <Button
                    size="lg"
                    style={ButtonStyle}
                    variant="outline-primary"
                  >
                    SignUp
                  </Button>
                </a>
              </ButtonContainer>
            </div>
          </IntroText>
        </Row>
      </Container>
    </Landing>
  );
}
const Landing = styled.div`
  min-height: 87vh;
  display: flex;
  align-items: center;
  background-image: url(${BackgroundImage});
  background-position: center;
  background-size: cover;
`;
const IntroText = styled.div`
  width: 100%;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 95px;
  @media only screen and (min-width: 1200px) {
    padding: 0 100px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;
const SubTitle = styled.p`
  font-size: 25px;
  padding-top: 10px;
`;
const ButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
  @media only screen and (min-width: 1200px) {
    padding: 0 200px;
  }
`;
export default LandingPage;
