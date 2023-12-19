import { Link } from 'react-router-dom';

import { useContext, useState } from 'react';
import Pagination from '../../shared/pagination/Pagination';
import Drinks from './Drinks';
import { DrinksContext } from '../../../context/DrinkContextProviders';

export default function IntroLanding() {
	const drinks = useContext(DrinksContext);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(10);
	const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage;
	const currentPosts = drinks.slice(firstPostIndex, lastPostIndex);

	return (
		<div className="relative">
			<h1 className="flex justify-center text-6xl font-bold text-red-600 mb-20">
				LOVETAIL
			</h1>
			<p className="flex justify-center p-5 md:text-6xl text-xl truncate font-bold z-0 text-gray-300 ">
				THAT YOU NEED FOR YOUR FAVORITE COCKTAIL
			</p>
			<div className="flex justify-center h-64 z-1 absolute top-0 md:w-[500px]  m-auto right-0 left-0 mt-20">
				<img src="/drink.svg" className=" w-full" alt="drink.svg" />
			</div>
			<span className="flex justify-center mt-40 z-1">
				<Link to="/">
					<button className="btn btn-outline ">EXPLORE COCKTAILS</button>
				</Link>
			</span>
			<div>
				<Drinks drinks={currentPosts} />
				<Pagination
					totalPosts={drinks.length}
					postsPerPage={postsPerPage}
					setCurrentPage={setCurrentPage}
				/>
			</div>
		</div>
	);
}
