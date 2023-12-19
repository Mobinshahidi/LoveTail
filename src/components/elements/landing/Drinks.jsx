import { useState } from 'react';
import DrinkCard from '../../shared/cards/drinkCard';

export default function Drinks({ drinks }) {
	return (
		<div className="flex flex-wrap md:justify-between justify-start  gap-x-20 gap-y-10 m-24">
			{drinks.map((drink) => (
				<DrinkCard key={drink.idDrink} drinkData={drink} />
			))}
		</div>
	);
}
