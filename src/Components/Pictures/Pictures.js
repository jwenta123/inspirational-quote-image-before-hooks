import React, { Component } from 'react';

import classes from './Pictures.module.css';

import pictures from '../../Assets/Pictures/Pictures';
import BackgroundImage from './BackGroundImage/BackgroundImage';

import Quotes from '../Quotes/Quotes';
import Spinner from '../UI/Spinner/Spinner';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from 'axios';

class Pictures extends Component {
	state = {
		pictureSrc   : null,
		loading      : false,
		initialClick : false,
		error        : false
	};

	componentDidUpdate () {
		let pictureUrl = this.state.pictureSrc;
		axios
			.get(pictureUrl)
			.then((response) =>
				this.setState({
					pictureSrc : response.config.url,
					loading    : false
				})
			)
			.catch((error) => {
				this.setState({ error: true });
				this.setState({ loading: false });
			});
	}
	shouldComponentUpdate (nextProps, nextState) {
		return this.state.loading !== nextState.loading;
	}

	randomImageHandler = () => {
		let imgSource = pictures[Math.floor(Math.random() * pictures.length)];
		this.setState({ pictureSrc: imgSource });
	};

	loadHandler = () => {
		this.setState({ loading: true });
	};

	initialClickHandler = () => {
		this.setState({ initialClick: true });
	};

	render () {
		let image = <Quotes />;
		let spinner = null;

		let quoteStyle = {
			color : 'white'
		};

		if (this.state.loading) {
			spinner = <Spinner />;
			quoteStyle = { color: 'rgba(0,0,0,0)' };
		}

		if (this.state.initialClick) {
			image = (
				<div>
					<div>
						<img
							className={classes.img}
							src={this.state.pictureSrc}
							alt={`${this.state.pictureSrc}`}
						/>
						{image}
					</div>
					<BackgroundImage currentPicture={this.state.pictureSrc} />
				</div>
			);
		}

		return (
			<div
				style={quoteStyle}
				onClick={() => {
					this.randomImageHandler();
					this.loadHandler();
					this.initialClickHandler();
				}}
			>
				{spinner}
				{image}
			</div>
		);
	}
}

export default withErrorHandler(Pictures, axios);
