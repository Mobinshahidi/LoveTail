import { IoMdWine } from 'react-icons/io';
import { IoHeartCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
export default function Navbar() {
	return (
		<div className="h-[10vh] flex items-center justify-between px-5 text-3xl ">
			<div className="flex ">
				<IoMdWine className="bg-red-500 text-white" />
				<span className="text-red-500 ">LOVETAIL</span>
			</div>
			{/* <Link to="#"> */}
			<IoHeartCircleOutline className="text-gray-400 hover:text-gray-700" />
			{/* </Link> */}
		</div>
	);
}
