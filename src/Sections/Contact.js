import React, { useState } from 'react';
import './Contact.css';

import EmailIcon from '../Assets/email-icon.svg';
import GithubIcon from '../Assets/github-icon-white.svg';
import InstagramIcon from '../Assets/instagram-icon.svg';
import LinkedinIcon from '../Assets/linkedin-icon.svg';


function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const subject = encodeURIComponent("Website Contact Form Submission: " + formData.name);
		const mailtoLink = `mailto:naumaansheikh02@gmail.com?subject=${subject}&body=${formData.message}&from=${formData.email}`;
		window.location.href = mailtoLink;
	};

	return (
		<div>
			<section id='contact' className='contact-section'>
				<div className='contact-brief'>
					<h2>Contact Me</h2>
					<p>Any projects? Business ideas? Questions? Feel free to reach out and I'll respond as soon as I can!</p>
					<p className='contact-info'>Call me at <a href="tel:+16477721412">(647) 772-1412</a> or shoot me an email at <a href="mailto:naumaansheikh02@gmail.com">naumaansheikh02@gmail.com</a></p>
				</div>
				<div className='contact-container'>
					<form onSubmit={handleSubmit} className='contact-form'>
						<div className='contact-field'>
							<label htmlFor='name' className='contact-field-label'>Name</label>
							<input
								type='text'
								id='name'
								name='name'
								value={formData.name}
								onChange={handleChange}
								className='contact-field-input'
								required
							/>
						</div>
						<div className='contact-field'>
							<label htmlFor='email' className='contact-field-label'>Email</label>
							<input
								type='email'
								id='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								className='contact-field-input'
								required
							/>
						</div>
						<div className='contact-field'>
							<label htmlFor='message' className='contact-field-label'>Message</label>
							<textarea
								id='message'
								name='message'
								value={formData.message}
								onChange={handleChange}
								className='contact-field-input contact-field-message'
								required
							/>
						</div>
						<button type='submit'>Send Message</button>
					</form>
				</div>
			</section>
			<div className='footer'>
				<ul className='footer-links'>
					<li> <a href='https://www.linkedin.com/in/naumaansheikh/'> 	<img src={LinkedinIcon} alt='LinkedIn' /> 	</a> </li>
					<li> <a href='https://github.com/NumWon'> 					<img src={GithubIcon} alt='GitHub' /> 		</a> </li>
					<li> <a href='mailto:naumaansheikh02@gmail.com'> 			<img src={EmailIcon} alt='Email' /> 		</a> </li>
					<li> <a href='https://www.instagram.com/sheikhnaumaan'> 	<img src={InstagramIcon} alt='Instagram' /> </a> </li>
				</ul>
			</div>
		</div>
	);
};

export default Contact;