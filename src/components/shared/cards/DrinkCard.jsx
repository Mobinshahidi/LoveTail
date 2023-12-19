import { Link } from 'react-router-dom';
import { IoHeartCircleOutline } from 'react-icons/io5';
import { useContext } from 'react';
import { FavoritesContext } from '../../../context/FavoritesContextProvider';

export default function DrinkCard({ drinkData }) {
	const { idDrink, strDrinkThumb, strDrink } = drinkData;
	const [favorites, setFavorites] = useContext(FavoritesContext);

	const isLiked = !!favorites.find((fav) => fav.idDrink === idDrink);

	function clickedItems() {
		if (!isLiked) {
			setFavorites([...favorites, drinkData]);
		} else {
			setFavorites([...favorites.filter((drink) => drink.idDrink !== idDrink)]);
		}
	}

	return (
		<div className="flex flex-col w-[200px]  justify-center ">
			<div className="relative">
				<img
					className="hover:border-l-4 hover:border-b-4 hover:border-red-500"
					src={strDrinkThumb}
					alt=""
				/>
				<IoHeartCircleOutline
					onClick={clickedItems}
					className={` text-white hover:!text-red-700 bottom-0 m-2 absolute ${
						isLiked ? '!text-red-700' : '!text-white'
					}`}
				/>
			</div>
			<div>
				<Link className="" to={`/details/${idDrink}`}>
					{strDrink}
				</Link>
			</div>
		</div>
	);
}
