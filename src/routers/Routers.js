import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Cart from '../pages/Cart';
import CheckOut from '../pages/Checkout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProductDetails from '../pages/ProductDetails';
import Shop from '../pages/Shop';
import SignUp from '../pages/SignUp';

const Routers = () => {
	return (
		<Routes>
			<Route path='*' element={<Navigate to='home' />} />
			<Route path='home' element={<Home />} />
			<Route path='login' element={<Login />} />
			<Route path='sign-up' element={<SignUp />} />
			<Route path='shop' element={<Shop />} />
			<Route path='shop:id' element={<ProductDetails />} />
			<Route path='cart' element={<Cart />} />
			<Route path='checkout' element={<CheckOut />} />
		</Routes>
	);
};
export default Routers;
