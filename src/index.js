import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ProviderContext } from './app/';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './styles/index.css';
import './styles/slider.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ProviderContext>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ProviderContext>
	</React.StrictMode>,
);
reportWebVitals();
