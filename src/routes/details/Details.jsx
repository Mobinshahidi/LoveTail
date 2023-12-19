import { Outlet } from 'react-router-dom';
import Navbar from '../../components/shared/navbar/Navbar';
export default function Details() {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
}
