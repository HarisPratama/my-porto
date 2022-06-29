import './styles.scss';

function Skills({ className }) {
	return (
		<div className={ className }>
			<div className="content">
				<div className="title">
					<h5>SKILLS</h5>
				</div>
				<div className='item'>
					<h1>Hacktiv8</h1>
					<h3>Full-stack Immersive Javascript</h3>
				</div>
				<div className='item'>
					<div style={ { marginTop: '40px' } }></div>
					<h1>High School</h1>
				</div>
			</div>
		</div>
	);
}

export default Skills;
