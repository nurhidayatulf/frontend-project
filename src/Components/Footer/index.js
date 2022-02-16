import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './index.css';

export default function Footer() {
    return (
        <div>
            <footer class="mt-5 text-white bg-dark">
                <Container className="pt-5">
                    <Row>
                        <Col sm={4}>
                            <p class="fw-bolder fs-6">HARIVIDEO</p>
                            <p>harivideo@hv.com</p>
                            <p class="kontak">+62 123 456 789 10</p>
                        </Col>
                        <Col sm={2}>
                            <p class="fw-bolder">About</p>
                            <p>About Us</p>
                            <p>Features</p>
                            <p>News</p>
                        </Col>
                        <Col sm={2}>
                            <p class="fw-bolder">Company</p>
                            <p>Why HARIVIDEO?</p>
                            <p>Partner With Us</p>
                            <p>FAQ</p>
                        </Col>
                        <Col sm={2}>
                            <p class="fw-bolder">Support</p>
                            <p>Account</p>
                            <p>Support Center</p>
                            <p>Contact Us</p>
                        </Col>
                        <Col sm={2} className="mt-5 pt-5">
                            <img src={require('../../Assets/twitter.jpg')} alt="twitter" class="me-4" />
                            <img src={require('../../Assets/facebook.jpg')} alt="facebook" class="me-4" />
                            <img src={require('../../Assets/instagram.jpg')} alt="instagram" class="me-4" />
                            <img src={require('../../Assets/youtube.jpg')} alt="youtube" />
                        </Col>
                    </Row>
                    <p class="mt-5 pb-4">© Harivideo 2022 . All Right Reserved</p>
                </Container>
            </footer>
        </div>
    );
}