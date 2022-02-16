import { Navbar, Nav, Container } from 'react-bootstrap';
import './index.css';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <Navbar style={{ height:'62px' }} bg="primary">
                <Container>
                    <Nav.Item>
                        <Link to='/' className="text-white fw-bold fs-5">HARIVIDEO</Link>
                    </Nav.Item>
                    <Nav.Item className="ms-5 ps-3">
                        <button type="button" class="btn text-white fw-bold home py-1 px-2 me-4">Home</button>
                        <Link to='/' style={{ color: 'rgba(255, 255, 255, 0.6)' }} className="me-4 fw-bold">Courses</Link>
                        <Link to='/' style={{ color: 'rgba(255, 255, 255, 0.6)' }} className="me-4 fw-bold">Couches</Link>
                        <Link to='/' style={{ color: 'rgba(255, 255, 255, 0.6)' }} className="me-4 fw-bold">Blog</Link>
                        <Link to='/' style={{ color: 'rgba(255, 255, 255, 0.6)' }} className="fw-bold">About</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='/' className="fw-bold text-white">Register</Link>
                        <button type="button" class="btn fw-bold login py-1 px-3 ms-5 text-white">Login</button>
                    </Nav.Item>
                </Container>
            </Navbar>
        </div>
    );
}