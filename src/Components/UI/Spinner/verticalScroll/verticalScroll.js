import React from 'react';

import classes from './verticalScroll.module.css';

const LoadingText = (props) => {
	return (
		<div className={classes.Iam}>
			<p className={classes.p}>This is</p>
			<b className={classes.b}>
				<div className={classes.innerIam}>
					loading<br />
					<br />
					downloading the image<br />
					<br />
					almost ready<br />
				</div>
			</b>
		</div>
	);
};

export default LoadingText;
