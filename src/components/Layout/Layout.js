// Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// Routers
import Routers from '../../routers/Routers';

const Layout = () => {
	return (
		<>
			<Header />
			<div>
				<Routers />
			</div>
			<Footer />
		</>
	);
};
export default Layout;
