import React, { Component } from 'react';

import quoteslist from '../../Assets/Quotes/quoteslist.js';
import fonts from '../../Assets/Fonts/Fonts';

import classes from './Quotes.module.css';

class Quotes extends Component {
	state = {
		quote    : 'Click me for inspiration!',
		fontType : 'Open Sans Condensed'
	};

	randomQuoteHandler = () => {
		const newQuote =
			quoteslist[Math.floor(Math.random() * quoteslist.length)];
		this.setState({ quote: newQuote });
	};

	fontSelectHandler = () => {
		let newFontType = fonts[Math.floor(Math.random() * fonts.length)];
		this.setState({ fontType: newFontType });
	};

	render () {
		let fontSize = '1em';
		switch (this.state.fontType) {
			case 'Major Mono Display':
				fontSize = '0.72em';
				break;
			case 'Lato':
				fontSize = '0.92em';
				break;
			case 'Love Ya Like A Sister':
				fontSize = '0.8em';
				break;
			case 'Open Sans Condensed':
				fontSize = '1em';
				break;
			case 'Srisakdi':
				fontSize = '0.9em';
				break;
			case 'Charmonman':
				fontSize = '0.76em';
				break;
			case 'Freckle Face':
				fontSize = '0.9em';
				break;
			case 'Annie Use Your Telescope':
				fontSize = '0.9em';
				break;
			case 'Petit Formal Script':
				fontSize = '0.8em';
				break;
			case 'Cabin Sketch':
				fontSize = '0.9em';
				break;
			case 'Fredericka the Great':
				fontSize = '0.85em';
				break;
			case 'Parisienne':
				fontSize = '0.93em';
				break;
			case 'Viga':
				fontSize = '0.85em';
				break;
			case 'Special Elite':
				fontSize = '0.92em';
				break;
			case 'Aldrich':
				fontSize = '0.82em';
				break;
			case 'Josefin Slab':
				fontSize = '1em';
				break;
			case 'Sacramento':
				fontSize = '1em';
				break;
			case 'Satisfy':
				fontSize = '0.88em';
				break;
			case 'Permanent Marker':
				fontSize = '0.75em';
				break;
			case 'Amatic SC':
				fontSize = '1.1em';
				break;
			case 'Abril Fatface':
				fontSize = '0.83em';
				break;
			case 'Dancing Script':
				fontSize = '1em';
				break;
			case 'Pacifico':
				fontSize = '0.78em';
				break;
			case 'Anton':
				fontSize = '0.8em';
				break;
			case 'Titillium Web':
				fontSize = '0.78em';
				break;
			case 'PT Serif':
				fontSize = '0.87em';
				break;
			case 'Roboto':
				fontSize = '0.87em';
				break;
			case 'Fahkwang':
				fontSize = '0.85em';
				break;
			case 'Tangerine':
				fontSize = '1.33em';
				break;
			case 'Roboto Condensed':
				fontSize = '1em';
				break;
			case 'ZCOOL KuaiLe':
				fontSize = '0.96em';
				break;
			default:
				fontSize = '1em';
		}

		let displayedQuote = this.state.quote;

		return (
			<div className={classes.Fixed}>
				<div className={classes.tableCell}>
					<div
						className={classes.Quotes}
						onClick={() => {
							this.randomQuoteHandler();
							this.fontSelectHandler();
						}}
						style={{
							fontFamily : this.state.fontType,
							fontSize   : fontSize
						}}
					>
						{displayedQuote}
					</div>
				</div>
			</div>
		);
	}
}

export default Quotes;
