import { Navbar, Nav, Container } from 'react-bootstrap';
import './index.css';

export default function Header() {
    return (
        <div>
            <Navbar style={{ height:'62px' }} bg="primary">
                <Container>
                    <Nav.Item>
                        <a href='/' class="text-white fw-bold fs-5">HARIVIDEO</a>
                    </Nav.Item>
                    <Nav.Item>
                        <button class="home py-1 px-2 me-4">Home</button>
                        <a href='/' style={{ color: 'rgba(255, 255, 255, 0.6)' }} class="me-4">Courses</a>
                        <a href='/' style={{ color: 'rgba(255, 255, 255, 0.6)' }} class="me-4">Couches</a>
                        <a href='/' style={{ color: 'rgba(255, 255, 255, 0.6)' }} class="me-4">Blog</a>
                        <a href='/' style={{ color: 'rgba(255, 255, 255, 0.6)' }}>About</a>
                    </Nav.Item>
                    <Nav.Item>
                        <a href='/' class="fw-bold text-white">Register</a>
                        <button class="login py-1 px-3 ms-5">Login</button>
                    </Nav.Item>
                </Container>
            </Navbar>
        </div>
    );
}