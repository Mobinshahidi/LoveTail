import { Link } from 'react-router-dom';
import { IoHeartCircleOutline } from 'react-icons/io5';

export default function DrinkCard({ drinkData }) {
	return (
		<>
			<div className="flex flex-col w-[200px]  justify-center ">
				<div className="relative">
					<img className="hover:border" src={drinkData.strDrinkThumb} alt="" />
					<IoHeartCircleOutline className="text-white hover:text-gray-700 absolute bottom-0 m-2  hidden md:inline" />
				</div>
				<div >
					<Link className="" to={`/details/${drinkData.idDrink}`}>
						{drinkData.strDrink}
					</Link>
				</div>
				<IoHeartCircleOutline className=" text-gray-600 hover:text-gray-700 absolute bottom-0 m-2 md:hidden inline" />
			</div>
		</>
	);
}
