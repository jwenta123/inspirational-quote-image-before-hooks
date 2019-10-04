// import React from 'react';

// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// import { Pictures } from './Pictures';
// import { BackgroundImage } from './BackGroundImage/BackgroundImage';
// import sinon from 'sinon';

// configure({ adapter: new Adapter() });

// // const picture = {
// //     pictureSrc: 'www.picture.com',
// //     initalClick: false
// // }

// describe('<Pictures />', () => {
// 	// it('renders children when passed in', () => {
// 	// 	const wrapper = shallow(
// 	// 		<Pictures>
// 	// 			<div className="unique" />
// 	// 		</Pictures>
// 	// 	);
// 	// 	expect(wrapper.contains(<div className="unique" />)).to.equal(true);
// 	// });

// 	// it('should render <BuildControls /> when receiving ingredients', () => {

// 	// });

// 	it('simulates click events', () => {
// 		const onButtonClick = sinon.spy();
// 		const wrapper = shallow(<Pictures onButtonClick={onButtonClick} />);
// 		wrapper.find('div').simulate('click');
// 		expect(onButtonClick).to.have.property('callCount', 1);
// 	});
// });
