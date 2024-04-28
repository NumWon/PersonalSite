import React from "react";
import './AboutMe.css';
import Portrait from '../Assets/portrait.jpg';

function AboutMe() {
	return (
		<section id='about' className="about-section">
			<div className="about-image-container">
				<img alt='self portrait' src={Portrait} className='portrait-image' />
			</div>
			<div className="about-container">
				<h2>About Me</h2>
				<p className='about-paragraph'>
				I am a motivated and enthusiastic software developer with a strong work ethic, a passion for tackling complex challenges, and a commitment to learning anywhere and everywhere I am able to. I love seeking new business opportunities, working on large-scale projects, and meeting interesting people.<br/><br/>My skills and motivation have helped me gain a lot of success in my short yet continuing career which fuels me to work harder and achieve more.
				</p>
			</div>
		</section>
	);
};

export default AboutMe;