import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
    return <>
        <footer>
            <Container>
                <Row className="py-1">
                    <Col md={12} className="text-center py-4">
                        &copy; 2022. All Rights Reserved.
                    </Col>
                </Row>
            </Container>
        </footer>
    </>
}

export default Footer;