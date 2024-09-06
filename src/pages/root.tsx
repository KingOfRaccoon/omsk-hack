import "./root.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HeaderRoot = () => {
    return (<Container>
        <Row className="justify-content-md-center">
            <Col xs lg="2">
                1 of 3
            </Col>
            <Col md="auto">Variable width content</Col>
            <Col xs lg="2">
                3 of 3
            </Col>
        </Row>
        <Row>
            <Col style={{background: "yellow"}}>1 of 3</Col>
            <Col md="auto">Variable width content</Col>
            <Col xs lg="2" style={{background: "blue"}}>
                3 of 3
            </Col>
        </Row>
    </Container>);
}

const Root = () => {
    return <><HeaderRoot/>
        <li>Error.....................</li></>
}

export default Root;