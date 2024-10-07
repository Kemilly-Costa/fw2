import Footer from './modulos/footer';
import {Container,Row, Col} from 'react-bootstrap/Container';
import  Navbar from './modulos/navbar';

export default function index() {
    return<div>
        <Navbar/>
        bem-vindo
        <Container>
      <Row>
        <Col className="bg-primary-subtle">1 of 2</Col>
        <Col className="bg-success-subtle">2 of 2</Col>
      </Row>
      <Row>
        <Col className="bg-info-subtle">1 of 3</Col>
        <Col className="bg-body-secondary">2 of 3</Col>
        <Col className="bg-warning-subtle">3 of 3</Col>
      </Row>
    </Container>
    <footer/>
    </div>
}