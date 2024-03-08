import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Details from './Pages/Details';
import CTA from './Pages/CTA';
import Footer from './Components/Footer';

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path='/'
					Component={Home}
				/>
				<Route
					path='/details'
					Component={Details}
				/>
				<Route
					path='/contacts'
					Component={CTA}
				/>
			</Routes>
			<Footer />
		</>
	);
};

export default App;
