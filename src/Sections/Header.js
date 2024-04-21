import React, { useEffect, useState } from 'react';
import './Header.css';

function Header() {
	const [activeSection, setActiveSection] = useState('');

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll('section[id]');
			sections.forEach(section => {
				const top = section.offsetTop - 50;
				const bottom = top + section.offsetHeight;
				const scrollPosition = window.scrollY;

				if(scrollPosition >= top && scrollPosition < bottom) {
					setActiveSection(section.id);
				}
			});
		};
		
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [activeSection]);

	return(
		<header className='header-container'>
			<nav>
				<ul className='header-list'>
					<li><a href='#intro'  className={activeSection === 'intro' ? 'active' : ''}>Intro</a></li>
					<li><a href='#about' className={activeSection === 'about' ? 'active' : ''}>About</a></li>
					<li><a href='#resume' className={activeSection === 'resume' ? 'active' : ''}>Resume</a></li>
					<li><a href='#contact' className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;