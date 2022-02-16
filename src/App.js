import React from 'react';
import { Row, Col, Container, Card, FormControl, Button, Badge } from 'react-bootstrap';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './index.css';
import { VscArrowRight } from 'react-icons/vsc';
import Helmet from "react-helmet";
import { BsFillStarFill } from "react-icons/bs";

export default function App() {

	const data = [
		{
			title: "UX/UI Design",
			desc: "Prototype and UX Design for E-Commerce Apps",
			mentor: "Terry Carder",
			logo: require('./Assets/figma.png'),
			pic: require('./Assets/mentor.jpg')
		},
		{
			title: "UX/UI Design",
			desc: "Prototype and UX Design for E-Commerce Apps",
			mentor: "Marilyn Septimus",
			logo: require('./Assets/crystal.png'),
			pic: require('./Assets/mentor2.jpg')
		},
		{
			title: "Graphic Design",
			desc: "Prototype and UX Design for E-Commerce Apps",
			mentor: "Jaylon Baptista",
			logo: require('./Assets/ai.jpg'),
			pic: require('./Assets/mentor3.jpg')
		}
	]

	return (
		<div>
			<Header />
			<div class="bg-primary fw-bolder">
				<p class="text-white fs-3 pt-4 text-center mb-0">Build Your Skills With Experts</p>
				<p style={{ color: 'rgba(253, 216, 53, 1)' }} class="text-center fs-3">Anytime Anywhere</p>
				<p class="text-white access-desc text-center">A solution for easy and flexible online learning, you can study<br />anywhere through this platform</p>
				<button type="button" class="btn btn-light rounded-pill fw-bold join position-relative start-50 translate-middle mt-5"><span class="me-2 text-primary">Join Us Today</span><VscArrowRight className="arrow2 bg-primary text-white rounded-circle" /></button>
				<img src={require('./Assets/hero.png')} style={{ width: 200 }} alt="landing" class="position-relative start-50 translate-middle-x" />
			</div>
			<div class="text-white fw-bold exp">
				<Container>
					<Row>
						<Col>
							<p class="fs-5 pt-2 mb-0 ps-4 ms-1">3.9 K</p>
							<p class="fs-6">Online Courses</p>
						</Col>
						<Col>
							<p class="fs-5 pt-2 mb-0 ps-5">800+</p>
							<p class="fs-6">Experienced Mentor</p>
						</Col>
						<Col>
							<p class="fs-5 pt-2 mb-0 ps-4 ms-2">4.2 M</p>
							<p class="fs-6">Rating & Reviews</p>
						</Col>
						<Col>
							<p class="fs-5 pt-2 mb-0 ps-4 ms-1">21 K</p>
							<p class="fs-6">Active Students</p>
						</Col>
					</Row>
				</Container>
			</div>
			<div class="mt-5">
				<Container>
					<Row>
						<Col className="fw-bold">
							<p class="text-primary fs-5">Why online<br />learning method?</p>
							<p class="access-desc">Studying online teaches important time<br />management skils, which make easier for<br />you to find a good work<br />study balance</p>
							<button type="button" class="btn btn-primary rounded-pill fw-bold join"><span class="me-2">Join Us Today</span><VscArrowRight className="arrow rounded-circle" /></button>
						</Col>
						<Col>
							<img src={require('./Assets/map.jpg')} alt="access" class="access" />
							<span class="access-text ms-3">Access Anywhere</span>
							<p class="mt-3 access-desc">Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Et neque, erat pulvinar platea.<br />Sapien nunc nec mauris nullam nisi. Tellus,<br />tincidunt a eget at integer in. </p>
							<div class="mt-5">
								<img src={require('./Assets/certificate.jpg')} alt="access" class="access" />
								<span class="access-text ms-3">Certificate</span>
								<p class="mt-3 access-desc">Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Et neque, erat pulvinar platea.<br />Sapien nunc nec mauris nullam nisi. Tellus,<br />tincidunt a eget at integer in. </p>
							</div>
						</Col>
						<Col>
							<img src={require('./Assets/clock.jpg')} alt="access" class="access" />
							<span class="access-text ms-3">Flexible Time</span>
							<p class="mt-3 access-desc">Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Et neque, erat pulvinar platea.<br />Sapien nunc nec mauris nullam nisi. Tellus,<br />tincidunt a eget at integer in. </p>
							<div class="mt-5">
								<img src={require('./Assets/book.jpg')} alt="access" class="access" />
								<span class="access-text ms-3">Class Program Options</span>
								<p class="mt-3 access-desc">Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Et neque, erat pulvinar platea.<br />Sapien nunc nec mauris nullam nisi. Tellus,<br />tincidunt a eget at integer in. </p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<div class="mt-5">
				<Container>
					<p class="fs-4 text-primary fw-bolder">Explore Top Courses</p>
					<div class="d-flex gap-5 mt-5">
						<Button size="sm" className="fw-bold">Design</Button>
						<Button variant="outline-light" size="sm" className="fw-bold text-secondary" style={{ background: 'rgba(230, 233, 240, 1)' }} >Business</Button>
						<Button variant="outline-light" size="sm" className="fw-bold text-secondary" style={{ background: 'rgba(230, 233, 240, 1)' }} >Writing</Button>
						<Button variant="outline-light" size="sm" className="fw-bold text-secondary" style={{ background: 'rgba(230, 233, 240, 1)' }} >Health</Button>
						<Button variant="outline-light" size="sm" className="fw-bold text-secondary" style={{ background: 'rgba(230, 233, 240, 1)' }} >Animation</Button>
						<Button variant="outline-light" size="sm" className="fw-bold text-secondary" style={{ background: 'rgba(230, 233, 240, 1)' }} >Programming</Button>
						<Button variant="outline-light" size="sm" className="fw-bold text-secondary" style={{ background: 'rgba(230, 233, 240, 1)' }} >Marketing</Button>
						<Button variant="outline-primary" size="sm" className="fw-bold text-primary see-all">See all</Button>
					</div>
					<div class="d-flex gap-5">
						{data.map(props => {
							return (
								<Card style={{ width: '16rem' }} className="mt-5 kelas">
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
			<div class="mt-5">
				<Container>
					<p class="text-primary fw-bolder fs-4">It’s Easy To Enroll The Course</p>
					<Row>
						<Col>
							<Card style={{ width: '12rem' }} className="roadmap mt-4">
								<Card.Body>
									<Card.Title><img src={require('./Assets/register.jpg')} alt="register" class="me-3" /><span class="text-primary fs-6 fw-bolder">Register</span></Card.Title>
									<Card.Text className="fw-bold">
									<p>Start registering to our<br />account, to create your<br />student profile</p>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card style={{ width: '12rem' }} className="roadmap mt-4">
								<Card.Body>
									<Card.Title><img src={require('./Assets/search.jpg')} alt="search" class="me-2" /><span class="text-primary fs-6 fw-bolder">Find a Course</span></Card.Title>
									<Card.Text className="fw-bold">
									<p>Find the best courses<br />and teachers for you to<br />study</p>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card style={{ width: '12rem' }} className="roadmap mt-4">
								<Card.Body>
									<Card.Title><img src={require('./Assets/pay.jpg')} alt="pay" class="me-2" /><span class="text-primary fs-6 fw-bolder">Pay Securely</span></Card.Title>
									<Card.Text className="fw-bold">
									<p>Pay safely and easily<br />using existing banks</p><br />
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card style={{ width: '13rem' }} className="roadmap mt-4">
								<Card.Body>
									<Card.Title><img src={require('./Assets/rocket.jpg')} alt="rocket" class="me-2" /><span class="text-primary fs-6 fw-bolder">Enjoy The Class</span></Card.Title>
									<Card.Text className="fw-bold">
									<p>Enjoy your class and<br />start learning a new thing</p><br />
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<button type="button" class="btn btn-primary rounded-pill fw-bold join mt-5"><span class="me-2">Join Us Today</span><VscArrowRight className="arrow rounded-circle" /></button>
				</Container>
			</div>
			<div class="mt-5">
				<Container>
					<Card style={{ height: 170 }} bg='primary' className="teacher">
						<Card.Body>
							<Row>
								<Col sm={2}>
									<Card.Img src={require('./Assets/teacher.png')} style={{ width: 200, marginTop: -80 }} />
								</Col>
								<Col sm={8}>
									<Card.Title className='fw-bolder text-white fs-3 text-center pt-4'><p>Our <span style={{ color: 'rgba(253, 216, 53, 1)' }}>Best Teachers</span> Who Are</p><p>Engaged In Their Fields</p></Card.Title>
								</Col>
								<Col sm={2}>
									<Card.Img src={require('./Assets/trophy.png')} style={{ width: 160, marginTop: -9 }} />
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Container>
			</div>
			<div class="mt-5 pb-5">
				<p class="text-primary fw-bolder fs-3 text-center mb-5">High Quality Video, Audio &<br />Live Classes</p>
				<Helmet><script type="text/javascript" src="https://codegena.com/assets/js/youtube-embed.js"></script></Helmet>
				<center><div class="youtube" id="kgh5Ab7rZqc" src="https://img.youtube.com/vi/kgh5Ab7rZqc/maxresdefault.jpg" style={{ width: 500, height: 294 }}></div></center>
			</div>
			<div class="mt-5">
				<p class="text-primary fw-bolder fs-3 text-center mb-5">What our happy Students<br />say about us</p>
				<Container className="me-5">
					<Row>
						<Col>
							<p class="fst-italic testy">“Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Quis molestie quisque<br />dictumst proin magna a penatibus. Sit<br />aliquam luctus ornare netus quis nunc”</p>
							<p class="testy-name mt-4 fw-bolder">Jakob</p>
							<img src={require('./Assets/testy1.jpg')} style={{ width: 70, marginLeft: 65 }} alt="testy" />
						</Col>
						<Col>
							<p class="fst-italic testy">“Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Quis molestie quisque<br />dictumst proin magna a penatibus. Sit<br />aliquam luctus ornare netus quis nunc”</p>
							<p class="testy-name mt-4 fw-bolder">Ando</p>
							<img src={require('./Assets/testy2.jpg')} style={{ width: 70, marginLeft: 65 }} alt="testy" />
						</Col>
						<Col>
							<p class="fst-italic testy">“Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Quis molestie quisque<br />dictumst proin magna a penatibus. Sit<br />aliquam luctus ornare netus quis nunc”</p>
							<p class="testy-name mt-4 fw-bolder">Nadia</p>
							<img src={require('./Assets/testy3.jpg')} style={{ width: 70, marginLeft: 65 }} alt="testy" />
						</Col>
					</Row>
				</Container>
			</div>
			<div class="mt-5">
				<Container>
					<Card style={{ height: 170 }} bg='primary' className="teacher">
						<Card.Body>
							<Row>
								<Col sm={9}>
									<Card.Title className="ms-5 mt-1">
										<p class="fw-bolder fs-5 text-white">Are You Ready To Learn, Join Us</p>
										<p class="testy text-white">In case you interested with our services, we will let you to stay up to date<br />by sending latest update from us.</p>
										<div class="d-flex">
											<FormControl style={{ width: 280 }} />
											<button type="button" class="btn subscribe text-white fw-bolder ms-4">SUBSCRIBE</button>
										</div>
									</Card.Title>
								</Col>
								<Col sm={3}>
									<Card.Img src={require('./Assets/student.png')} style={{ width: 200, marginTop: -80 }} />
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Container>
			</div>
			<Footer />
		</div>
	);
}