import React, {Fragment} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// // Workaround for footer problems
// const phantom = {
//     display: 'block',
//     padding: '20px',
//     height: '80px',
//     width: '100%',
// };

function Footer(){
    return (
        <Fragment>
            {/*style={phantom}*/}
            <div ></div>
            <footer className="mt-5">
                <Container fluid={true}>
                    <Row className="justify-content-between p-1">
                        <Col className="p-0 d-flex justify-content-center">
                            Copyright © 2020 Timothy Barrett
                        </Col>
                    </Row>
                    <Row className="justify-content-between p-0">
                        <Col className="p-0 d-flex justify-content-center">
                            github.com/tjbarrett42
                        </Col>
                    </Row>
                </Container>
            </footer>
        </Fragment>
    );
}

export default Footer;