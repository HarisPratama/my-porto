import React, { useEffect, useRef, useState } from 'react';

import './App.scss';
import Education from './sections/educations';
import Introduction from './sections/introductions';
import Skills from './sections/skills';

function App() {

	const [index, setIndex] = useState(0);

	const onScroll = (listInnerRef) => {
		if (listInnerRef.current) {
			const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
			if (scrollTop == 0 && index > 0) {
				setIndex(index - 1);
			}
			if (scrollTop + clientHeight === scrollHeight) {
				setIndex(index + 1);
			}

		}
	};

	return (
		<div
			className='App'
		>
			<Introduction
				className={ index == 0 ? 'Introduction' : 'Introduction-out' }
				setIndex={ setIndex }
				onScroll={ onScroll }
			/>
			<Education
				className={ index == 1 ? 'Projects' : 'Projects-out' }
				setIndex={ setIndex }
				onScroll={ onScroll }
			/>
			{/* <Skills
				className={ index == 2 ? 'Education' : 'Education-out' }
				setIndex={ setIndex }
				onScroll={ onScroll }
			/> */}
		</div>
	);
}

export default App;
