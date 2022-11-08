import { Container, Row, Col } from 'reactstrap';

// Components
import Helmet from '../components/Helmet/Helmet';

// Images
// TODO: Get a hero image
import heroImg from '../assets/images/mens/adidas-nmd-shoes-mens.png';

const Home = () => {
	const year = new Date().getFullYear();
	return (
		<Helmet title={'Home'}>
			<section className='hero__section'>
				<Container>
					<Row>
						<Col lg='6' md='6'>
							<div className='hero__content'>
								<p className='hero__subtitle'>Trending Product in {year}</p>
								<h2>Put something here about clothing line</h2>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Culpa sapiente vel magni quo laudantium odit. Est enim odio ut
									temporibus!
								</p>

								<button className='buy__btn'>SHOP NOW</button>
							</div>
						</Col>
						<Col lg='6' md='6'>
							<div className='hero__img'>
								<img src={heroImg} alt='' />
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};
export default Home;
