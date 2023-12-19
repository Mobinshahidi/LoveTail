import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes.jsx';
import Layout from './components/shared/Layout.jsx';
import DrinkContextProviders from './context/DrinkContextProviders.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<DrinkContextProviders>
		<Layout>
			<RouterProvider router={router} />
		</Layout>
	</DrinkContextProviders>,
);
