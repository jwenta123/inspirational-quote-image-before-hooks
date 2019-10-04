import React, { Component } from 'react';

import classes from './BackgroundImage.module.css';

class BackgroundImage extends Component {
	render () {
		return (
			<div>
				<img
					className={classes.img}
					src={this.props.currentPicture}
					alt={`${this.props.currentPicture} Background`}
				/>
			</div>
		);
	}
}

export default BackgroundImage;
