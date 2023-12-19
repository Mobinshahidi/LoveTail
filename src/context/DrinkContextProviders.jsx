import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const DrinksContext = createContext();

export default function DrinkContextProviders({ children }) {
	const [drinks, setDrinks] = useState([]);

	useEffect(() => {
		const fetData = async () => {
			const res = await axios.get(
				'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic',
			);
			setDrinks(res.data.drinks);
		};
		fetData();
	}, []);
	console.log(drinks);
	return (
		<DrinksContext.Provider value={drinks}>{children}</DrinksContext.Provider>
	);
}
