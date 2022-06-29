import { useEffect, useRef } from 'react';

import './styles.scss';
import MyPicture from '../../assets/images/my-picture.JPG';
import linkedin from '../../assets/images/linkedin.svg';
import instagram from '../../assets/images/instagram.svg';
import whatsapp from '../../assets/images/whatsapp.svg';

function Introduction({ className, setIndex, onScroll }) {
	const listInnerRef = useRef();

	useEffect(() => {
		if (className == 'Introduction' && listInnerRef.current) {
			listInnerRef.current?.scrollTo(0, 0);
		}
	}, [className]);

	return (
		<div
			className={ className }
			onScroll={ () => onScroll(listInnerRef) }
			ref={ listInnerRef }
		>
			<div className='my-picture'>
				<img src={ MyPicture } alt='Haris Pratama' />
			</div>
			{/* <div className="divider"></div> */ }
			<div className="biodata">
				<h5>HELLO, I'M</h5>
				<h1><span>HARIS</span> PRATAMA</h1>
				<h2>FULL-STACK DEVELOPER</h2>
				<p>PASSIONATE ABOUT WEB AND MOBILE APP TECHNOLOGIES. I LOVE WORKING AT THE INTERSECTION OF BACKEND AND FRONTEND SIDE. I CREATE MEMORABLE APP EXPERIENCES.</p>

				<div className="socmed">
					<a href="https://www.linkedin.com/in/haris-pratama-aa041b192/" target='_blank'>
						<img src={ linkedin } width="30px" />
					</a>
					<a href="https://www.instagram.com/harispra97/" target='_blank'>
						<img src={ instagram } width="30px" />
					</a>
					<a href="https://wa.me/%2B628118037449" target='_blank'>
						<img src={ whatsapp } width="30px" />
					</a>
				</div>

				<div className="btn-next">
					<button onClick={ () => setIndex(1) }>Next</button>
				</div>
			</div>
		</div>
	);
}

export default Introduction;
