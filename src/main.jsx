import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes.jsx';
import Layout from './components/shared/Layout.jsx';
import DrinkContextProviders from './context/DrinkContextProviders.jsx';
import FavoritesContextProvider from './context/FavoritesContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<DrinkContextProviders>
		<FavoritesContextProvider>
			<Layout>
				<RouterProvider router={router} />
			</Layout>
		</FavoritesContextProvider>
	</DrinkContextProviders>,
);
