import React from 'react';
import './App.css';

import Layout from './hoc/Layout/Layout';
// import PicQuoteContainer from './Containers/PicQuoteContainer/PicQuoteContainer';
import Pictures from './Components/Pictures/Pictures';

function App () {
	return (
		<div className="App">
			<Layout>
				<Pictures />
			</Layout>
		</div>
	);
}

export default App;
