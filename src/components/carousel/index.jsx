import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import './styles.scss';

export const Carouselitem = ({
	children,
	width = '100%',
	height = '100%',
}) => {
	return (
		<div className='carousel-item' style={ { width, height } }>
			{ children }
		</div>
	);
};

const Carousel = ({
	children,
	position = 'relative',
	width = '100%',
	height = '100%',
	autoPlay = false,
}) => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		if (autoPlay) {
			const interval = setInterval(() => {
				updateIndex(activeIndex + 1);
			}, 5000);

			return () => {
				if (interval) {
					clearInterval(interval);
				}
			};
		}
	});

	const handlers = useSwipeable({
		onSwipedLeft: () => updateIndex(activeIndex + 1),
		onSwipedRight: () => updateIndex(activeIndex - 1),
	});

	const updateIndex = (newIndex) => {
		if (newIndex < 0) {
			newIndex = React.Children.count(children) - 1;
		} else if (newIndex >= React.Children.count(children)) {
			newIndex = 0;
		}

		setActiveIndex(newIndex);
	};

	return (
		<div
			{ ...handlers }
			className='carousel'
			style={ {
				position,
				width,
				height,
			} }
		>
			<div className='inner' style={ { transform: `translateX(-${ activeIndex * 100 }%)` } }>
				{ React.Children.map(children, (child, index) => {
					return React.cloneElement(child, { width: '100%' });
				}) }
			</div>
			<div className='indicators'>
				{ React.Children.map(children, (child, index) => {
					if (activeIndex == index) {
						return (
							<div
								className='dot-active'
							>
							</div>
						);
					} else {
						return (
							<div
								className='dot'
								onClick={ () => {
									updateIndex(index);
								} }
							>
							</div>
						);
					}
				}) }
			</div>
		</div>
	);
};

export default Carousel;