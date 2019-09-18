import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import Navbar from './layout/Navbar';
import Content from './layout/Content';
import Footer from './layout/Footer';

function App() {
	return (
		<Provider store={store}>
			<div>
				<Navbar />
				<div className="main">
					<Content/>
				</div>
				<Footer />
			</div>
		</Provider>
	);
}

export default App;