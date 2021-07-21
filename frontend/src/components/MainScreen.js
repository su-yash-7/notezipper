import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

function MainScreen({ title, children }) {
  return (
    <MainBack>
      <Container>
        <Row>
          <Page>
            {title && (
              <>
                <Heading>{title}</Heading>
                <hr />
              </>
            )}
            {children}
          </Page>
        </Row>
      </Container>
    </MainBack>
  );
}
const MainBack = styled.div`
  min-height: 87vh;
  display: flex;
  padding: 10px 0;
`;
const Page = styled.div`
  width: 100%;
`;
const Heading = styled.h1`
  font-size: 60px;
  font-family: 'Work Sans', sans-serif;
  padding: 5px 10px;
  @media only screen and (max-width: 600px) {
    font-size: 30px;
    display: flex;
    justify-content: center;
  }
`;

export default MainScreen;
