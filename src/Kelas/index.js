import './index.css';
import { Row, Col, Container, Card, Badge } from 'react-bootstrap';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { BsFillStarFill, BsFillCheckCircleFill } from "react-icons/bs";
import Helmet from "react-helmet";

export default function Kelas() {

    const data = [
		{
			title: "UX/UI Design",
			desc: "Prototype and UX Design for E-Commerce Apps",
			mentor: "Terry Carder",
			logo: require('../Assets/figma.png'),
			pic: require('../Assets/mentor.jpg')
		},
		{
			title: "UX/UI Design",
			desc: "Prototype and UX Design for E-Commerce Apps",
			mentor: "Marilyn Septimus",
			logo: require('../Assets/crystal.png'),
			pic: require('../Assets/mentor2.jpg')
		},
		{
			title: "Graphic Design",
			desc: "Prototype and UX Design for E-Commerce Apps",
			mentor: "Jaylon Baptista",
			logo: require('../Assets/ai.jpg'),
			pic: require('../Assets/mentor3.jpg')
		}
	]

    return (
        <div>
            <Header />
            <div class="mt-5">
                <Container>
                    <Card bg="primary text-white">
                        <Card.Header className='fs-5 fw-bolder' style={{ background: 'rgb(2, 40, 90, 0.527)' }} >
                            Description
                        </Card.Header>
                        <Card.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus pharetra, sed rhoncus, adipiscing. Mi, mi, nisi, morbi ullamcorper. Maecenas sed odio mi quis consequat convallis sapien aliquam. Feugiat ut aliquam elit bibendum elementum felis. Sodales magna ullamcorper orci eleifend pretium. Pretium auctor odio donec hendrerit tempor placerat. Euismod convallis urna convallis cum sit a imperdiet. Scelerisque ac pellentesque commodo ornare eget nam duis sit lectus. Volutpat, orci vel sem varius sit aenean viverra. Malesuada risus lobortis quisque quis pharetra donec nibh.
                        </Card.Body>
                    </Card>
                </Container>
            </div>
            <div class="mt-5">
                <Container>
                    <p class="text-primary fs-5 fw-bolder mb-4">What You’ll Learn</p>
                    <Row>
                        <Col sm={4} >
                            <div class="advantage fw-bold d-flex align-items-center mb-3"><BsFillCheckCircleFill color="rgba(252, 188, 42, 1)" className='me-3 ms-3'/>Applied Psychology in Design</div>
                            <div class="advantage fw-bold d-flex align-items-center mb-3"><BsFillCheckCircleFill color="rgba(252, 188, 42, 1)" className='me-3 ms-3'/>Applied Psychology in Design</div>
                            <div class="advantage fw-bold d-flex align-items-center mb-3"><BsFillCheckCircleFill color="rgba(252, 188, 42, 1)" className='me-3 ms-3'/>Applied Psychology in Design</div>
                        </Col>
                        <Col sm={4}>
                            <div class="advantage fw-bold d-flex align-items-center mb-3"><BsFillCheckCircleFill color="rgba(252, 188, 42, 1)" className='me-3 ms-3'/>Applied Psychology in Design</div>
                            <div class="advantage fw-bold d-flex align-items-center mb-3"><BsFillCheckCircleFill color="rgba(252, 188, 42, 1)" className='me-3 ms-3'/>Applied Psychology in Design</div>
                            <div class="advantage fw-bold d-flex align-items-center mb-3"><BsFillCheckCircleFill color="rgba(252, 188, 42, 1)" className='me-3 ms-3'/>Applied Psychology in Design</div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div class="mt-5">
				<p class="text-primary fw-bolder fs-3 text-center mb-5">High Quality Video, Audio &<br />Live Classes</p>
				<Helmet><script type="text/javascript" src="https://codegena.com/assets/js/youtube-embed.js"></script></Helmet>
				<center><div class="youtube" id="kgh5Ab7rZqc" src="https://img.youtube.com/vi/kgh5Ab7rZqc/maxresdefault.jpg" style={{ width: 500, height: 294 }}></div></center>
			</div>
            <div class="mt-5">
                <Container>
                    <p class="text-primary fs-4 fw-bolder">Students Also Bought</p>
                    <div class="d-flex gap-5">
                        {data.map(props => {
                            return (
                                <Card style={{ width: '16rem' }} className="mt-4 kelas">
                                    <Card.Body>
                                        <Row>
                                            <Col sm={3}>
                                                <img src={props.logo} alt="figma" class="logo-lesson" />
                                            </Col>
                                            <Col sm={9}>
                                                <div class="d-flex">
                                                    <Badge pill bg="danger" className="badge me-2">50% OFF</Badge>
                                                    <strike>Rp 6.000.000</strike>
                                                </div>
                                                <p class="price fw-bolder mt-1 ms-5">Rp 3.000.000</p>
                                            </Col>
                                        </Row>
                                        <Card.Title className="text-primary fw-bolder fs-6">{props.title}</Card.Title>
                                        <Card.Text className="text-secondary fw-bolder course-desc">{props.desc}</Card.Text>
                                        <Row>
                                            <Col sm={2}>
                                                <img src={props.pic} alt="mentor" class="logo-lesson" />
                                            </Col>
                                            <Col sm={7}>
                                                <p class="course-desc fw-bolder ms-3 mt-2">{props.mentor}</p>
                                            </Col>
                                            <Col sm={3} className="me-0">
                                                <BsFillStarFill className='star text-warning'/>
                                                <span class="course-desc fw-bolder text-secondary ms-2">4.8</span>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );
}