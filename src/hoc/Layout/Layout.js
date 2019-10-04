import React from 'react';

import { Offline, Online } from 'react-detect-offline';

import classes from './Layout.module.css';

const Layout = (props) => {
	return (
		<React.Fragment>
			<Online>
				<main className={classes.Content}>{props.children}</main>
			</Online>
			<Offline>
				<div style={{ color: 'black' }}>
					<h1>Please check your internet connection.</h1>
					<h3>Try reloading the page.</h3>
				</div>
			</Offline>
		</React.Fragment>
	);
};

export default Layout;
