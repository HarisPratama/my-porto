import { useRef } from 'react';

import './styles.scss';
import Carousel, { Carouselitem } from '../../components/carousel/index';
import IscootSplash from '../../assets/images/projects/iscoot/Splash.png';
import IscootPerformance from '../../assets/images/projects/iscoot/Performance.png';
import IscootSideMenu from '../../assets/images/projects/iscoot/Side Menu.png';
import Oku from '../../assets/images/projects/oku/oku.png';
import ReactLogo from '../../assets/images/react.png';
import ReactNative from '../../assets/images/react-native.png';
import Sass from '../../assets/images/sass.svg';
import NodeJs from '../../assets/images/nodejs.png';
import HtmlCssJs from '../../assets/images/html-css-js.png';


function Education({ className, onScroll, setIndex }) {
	const listInnerRef = useRef();

	return (
		<div
			className={ className }
			onScroll={ () => onScroll(listInnerRef) }
			ref={ listInnerRef }
		>
			<div className="content">
				<div className='title'>
					<div onClick={ () => setIndex(0) }>{ '<' }</div>
					<h5>RECENT PROJECTS</h5>
				</div>
				<div className='item'>
					<Carousel
						autoPlay
					>
						<Carouselitem>
							<div className="iscoot-project">
								<div className="desc">
									<h1>Farad iScoot</h1>
									<p>Is a mobile application for tracking your scooter in realtime</p>
									<p>Tech:</p>
									<div className='tech'>
										<div>
											<img src={ ReactNative } height='40px' />
										</div>
										<div>
											<img src={ Sass } height='40px' />
											<img src={ HtmlCssJs } height='40px' />
										</div>
										<div>
											<img src={ NodeJs } height='40px' />
										</div>
									</div>
								</div>
								<div className='images'>
									<img src={ IscootSplash } className='img-1' width='200px' />
									<img src={ IscootPerformance } className='img-2' width='200px' />
									<img src={ IscootSideMenu } className='img-3' width='200px' />
								</div>
							</div>
						</Carouselitem>
						<Carouselitem>
							<div className="oku-project">
								<div className="desc">
									<h1>Oku Group</h1>
									<p>Is a landing page company profile</p>
									<p>Tech:</p>
									<div className='tech'>
										<div>
											<img src={ ReactLogo } height='40px' />
											<img src={ Sass } height='40px' />
											<img src={ HtmlCssJs } height='40px' />
										</div>
										<div>
											<img src={ NodeJs } height='40px' />
										</div>
									</div>
								</div>
								<div className='images'>
									<img src={ Oku } className='img-1' />
								</div>
							</div>
						</Carouselitem>
					</Carousel>
				</div>
			</div>
		</div>
	);
}

export default Education;
