import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<div className="min-h-[80vh]">{children}</div>
			<Footer />
		</>
	);
}
