import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './index.css';

export default function Footer() {
    return (
        <div>
            <footer class="mt-3 text-white">
                <Container className="pt-5">
                    <Row>
                        <Col>
                            <p class="fw-bolder fs-6">HARIVIDEO</p>
                            <p>harivideo@hv.com</p>
                            <p class="kontak">+62 123 456 789 10</p>
                        </Col>
                        <Col>
                            <p class="fw-bolder">About</p>
                            <p>About Us</p>
                            <p>Features</p>
                            <p>News</p>
                        </Col>
                        <Col>
                            <p class="fw-bolder">Company</p>
                            <p>Why HARIVIDEO?</p>
                            <p>Partner With Us</p>
                            <p>FAQ</p>
                        </Col>
                        <Col>
                            <p class="fw-bolder">Support</p>
                            <p>Account</p>
                            <p>Support Center</p>
                            <p>Contact Us</p>
                        </Col>
                    </Row>
                    <p class="mt-5 pb-4">© Harivideo 2022 . All Right Reserved</p>
                </Container>
            </footer>
        </div>
    );
}