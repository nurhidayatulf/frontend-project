import { Container, Navbar } from "react-bootstrap" ;

const Appbar = () => {
    return(
            <Navbar expand="lg" variant="light" bg="#04756F" style={{backgroundColor:"#04756F"}}>
                <Container>
                    <Navbar.Brand href="#" style={{color:"white", fontFamily:"Work Sans, sans-serif"}}>HARIVIDEO</Navbar.Brand>
                </Container>
            </Navbar>
    )
}

export default Appbar