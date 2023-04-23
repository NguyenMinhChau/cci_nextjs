import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './pages';
import { routerPublic } from './routers/routerRender';
import { ScrollToTop } from './components';
function App() {
	return (
		<div className="app">
			<ScrollToTop />
			<Routes>
				{routerPublic.map((item, index) => {
					const Layout = item.layout
						? item.layout
						: item.layout === null
						? Fragment
						: DefaultLayout;
					const Page = item?.component;
					return (
						<Route
							key={index}
							path={item.path}
							element={
								<Layout>
									<Page />
								</Layout>
							}
						/>
					);
				})}
			</Routes>
		</div>
	);
}

export default App;
