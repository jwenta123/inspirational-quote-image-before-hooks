import React from 'react';
import classes from './Spinner.module.css';

import LoadingText from './verticalScroll/verticalScroll';

const spinner = () => (
	<div className={classes.hourglass}>
		<div className={classes.textCenter}>
			<LoadingText />
		</div>
	</div>
);

export default spinner;
