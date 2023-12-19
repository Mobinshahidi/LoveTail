import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './landing/Landing';
import Favorites from './favorites/Favorites';
import Details from './details/details';
import ErrorPage from './Error';
import DetailsId from './details/DetailsId';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Landing />,
		errorElement: <ErrorPage />,
	},
	{
		path: 'favorite',
		element: <Favorites />,
	},
	{
		element: <Details />,
		children: [
			{
				path: 'details/:id',
				element: <DetailsId />,
			},
		],
	},
	{
		path: '*',
		element: <ErrorPage />,
	},
]);
