import React from 'react';
import './Intro.css';
import ScrollIcon from '../Assets/down-icon.svg';

function Intro() {
	const handleScroll = () => {
		const nextSection = document.getElementById('about');
		if (nextSection) {
			nextSection.scrollIntoView({behavior: 'smooth'});
		}
	};

	return (
		<section id='intro' className='intro-section'>
			<div className='intro-container'>
				<h2>Hey, this is Naumaan...</h2>
				<p className='intro-paragraph'>I'm an aspiring Software Engineer, currently pursuing a bachelor's degreee in Computer Engineering at the University of Waterloo.</p>
				<p className='intro-paragraph'>Let's start scrolling to learn more about me.</p>
				<div className='button-container'>
					<button onClick={handleScroll} className='scroll-button'>Start Scrolling</button>
					<img src={ScrollIcon} alt='Scroll Down' className='scroll-icon' />
				</div>
			</div>
		</section>
	);
};

export default Intro;