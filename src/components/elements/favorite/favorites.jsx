import { useContext, useState } from 'react';
import { FavoritesContext } from '../../../context/FavoritesContextProvider';
import DrinkCard from '../../shared/cards/drinkCard';

export default function Favorites() {
	const [favorites, setFavorites] = useContext(FavoritesContext);

	return (
		<div className="h-[90vh]">
			<h1 className="flex justify-center m-5 font-bold text-6xl">
				Favorite List
			</h1>
			<h2 className="flex justify-center m-5">Manage Your Favorite List</h2>
			<div className="flex flex-wrap md:justify-between justify-start  gap-x-20 gap-y-10 m-24">
				{favorites.map((favorite) => (
					<DrinkCard key={favorite.idDrink} drinkData={favorite} />
				))}
			</div>
		</div>
	);
}
