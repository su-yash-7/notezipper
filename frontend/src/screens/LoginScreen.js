import React, { useState } from 'react';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MainScreen from '../components/MainScreen';
import axios from 'axios';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

function LoginScreen({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        '/api/users/login',
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem('userInfo', JSON.stringify(data));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };
  return (
    <Container>
      <MainScreen title="LOGIN">
        <loginContainer>
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {loading && <Loading />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <Row className="py-3">
            <Col>
              New Member ? <Link to="/register">Register Here</Link>
            </Col>
          </Row>
        </loginContainer>
      </MainScreen>
    </Container>
  );
}
const loginContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
export default LoginScreen;
