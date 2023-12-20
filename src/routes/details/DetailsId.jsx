import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { IoHeartCircleOutline } from 'react-icons/io5';
import axios from 'axios';
import { FavoritesContext } from '../../context/FavoritesContextProvider';
export default function DetailsId() {
	const [drink, setDrink] = useState([]);
	const { id } = useParams();
	const [active, setActive] = useState('description');
	const [favorites, setFavorites] = useContext(FavoritesContext);

	const isLiked = !!favorites.find((fav) => fav.idDrink === drink.idDrink);

	function clickedItems() {
		if (!isLiked) {
			setFavorites([...favorites, drink]);
		} else {
			setFavorites([
				...favorites.filter((drinks) => drinks.idDrink !== drinks.idDrink),
			]);
		}
	}

	useEffect(() => {
		const fetData = async () => {
			const res = await axios.get(
				`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
			);
			setDrink(res.data.drinks[0]);
		};
		fetData();
	}, []);

	return (
		<div className="flex flex-col mx-auto w-[200px] items-center h-[85vh]">
			<div className="flex flex-col items-center space-y-5">
				<div className="justify-center m-5">
					<img
						className="hover:border-l-4 hover:border-b-4 hover:border-red-500"
						src={drink.strDrinkThumb}
						alt=""
					/>
				</div>
				<div className="text-center">{drink.strDrink}</div>
				<IoHeartCircleOutline
					onClick={clickedItems}
					className={`text-gray-700 hover:!text-red-700 bottom-0 m-2  mt-10 ${
						isLiked ? '!text-red-700' : '!text-gray-700'
					}`}
				/>
				<IoHeartCircleOutline
					className={`text-gray-600 hover:text-red-700 absolute bottom-0 m-2 md:hidden inline ${
						isLiked ? '!text-red-700' : '!text-white'
					}`}
					onClick={clickedItems}
				/>
				<div
					role="tablist"
					className="tabs w-54 flex justify-center border rounded-full border-black"
				>
					<a
						role="tab"
						className={`tab ${
							active === 'description'
								? 'tab-active border-2 rounded-full border-black'
								: null
						}`}
						onClick={() => setActive('description')}
					>
						description
					</a>
					<a
						role="tab"
						className={`tab ${
							active === 'recipe'
								? 'tab-active border-2 rounded-full border-black'
								: null
						}`}
						onClick={() => setActive('recipe')}
					>
						recipe
					</a>
				</div>
				{active === 'description' && <div>{drink.strInstructions}</div>}
				{active === 'recipe' && (
					<div className="flex w-12 justify-start flex-col">
						<p>{drink.strIngredient1}</p>
						<p>{drink.strIngredient2}</p>
						<p>{drink.strIngredient3}</p>
						<p>{drink.strIngredient4}</p>
						<p>{drink.strIngredient5}</p>
						<p>{drink.strIngredient6}</p>
						<p>{drink.strIngredient7}</p>
						<p>{drink.strIngredient8}</p>
						<p>{drink.strIngredient9}</p>
					</div>
				)}
			</div>
		</div>
	);
}
