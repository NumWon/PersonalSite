import React from 'react';
import BootstrapIcon from '../Assets/bootstrap-icon.svg';
import PythonIcon from '../Assets/python-icon.svg';
import CSharpIcon from '../Assets/c-sharp-icon.svg';
import CPPIcon from '../Assets/cpp-icon.svg';
import DjangoIcon from '../Assets/django-icon.svg';
import DotNetIcon from '../Assets/dotnet-icon.svg';
import ExcelIcon from '../Assets/excel-icon.svg';
import FirebaseIcon from '../Assets/firebase-icon.svg';
import MatlabIcon from '../Assets/matlab-icon.svg';
import MicrosoftOfficeIcon from '../Assets/microsoft-office-icon.svg';
import PostgreSQLIcon from '../Assets/postgresql-icon.svg';
import ReactIcon from '../Assets/react-icon.svg';
import SwiftIcon from '../Assets/swift-icon.svg';
import './Resume.css';

function Resume() {
	return(
		<section id='resume' className='resume-container'>
			<div className='resume-title'>
				<h2>My Resume</h2>
			</div>
			
			{/* Education */}
			<div className='resume-section'>
				<h3 className='resume-section-title'>Education</h3>
				
				<div className='resume-section-group'>
					<div className='resume-group-header'>
						<p className='resume-group-title'>University of Waterloo</p>
					</div>

					<div className='resume-group-sub-header'>
						<p className='resume-group-sub-header-title'>Bachelor's of Computer Engineering</p>
						<p className='resume-group-sub-header-date'>April 2025</p>
					</div>
					<ul className='resume-group-description'>
						<li>
						Relevant Courses: Algorithms & Data Structures, Real-time OS, Compilers, Network Systems, Database Systems, Computer Security
						</li>
					</ul>
				</div>
			</div>

			{/* Work Experience */}
			<div className='resume-section'>
				<h3 className='resume-section-title'>Work Experience</h3>
				
				<div className='resume-section-list'>
					<div className='resume-section-group'>
						<div className='resume-group-header'>
							<p className='resume-group-title'>Software Engineer Intern</p>
							<ul className='resume-icon-list'>
								<li><img alt='Bootstrap' className='resume-icon' src={BootstrapIcon}/></li>
								<li><img alt='React' className='resume-icon' src={ReactIcon}/></li>
								<li><img alt='PostgreSQL' className='resume-icon' src={PostgreSQLIcon}/></li>
								<li><img alt='Django' className='resume-icon' src={DjangoIcon}/></li>
								<li><img alt='Python' className='resume-icon' src={PythonIcon}/></li>
							</ul>
						</div>
						<div className='resume-group-sub-header'>
							<p className='resume-group-sub-header-title'>Kinectrics Inc.</p>
							<p className='resume-group-sub-header-date'>Jan 2024 - Apr 2024</p>
						</div>
						<ul className='resume-group-description'>
							<li>
							Developed a comprehensive cable ageing management tool for energy plants, streamlining data storage and accessibility for low and medium-voltage cables, resulting in a 400% increase in operational efficiency
							</li>
							<li>
							Engineered a complex PostgreSQL database with 25+ tables to store cable construction, routing, and testing information, boosting data organization and retrieval efficiency by over 700%
							</li>
							<li>
							Spearheaded the design and implementation of a full-stack web application using React and Bootstrap front-end with Django backend, facilitating intuitive navigation and seamless interaction, resulting in 100% user satisfaction
							</li>
							<li>
							Standardized cable testing procedures and documentation, enabling easy identification and resolution of cable issues, thereby reducing workload and downtime by 250% and enhancing overall plant reliability
							</li>
						</ul>
					</div>
					<div className='resume-section-group'>
						<div className='resume-group-header'>
							<p className='resume-group-title'>Technical Project Manager Intern</p>
							<ul className='resume-icon-list'>
								<li><img className='resume-icon' src={ExcelIcon}/></li>
								<li><img className='resume-icon' src={MicrosoftOfficeIcon}/></li>
							</ul>
						</div>
						<div className='resume-group-sub-header'>
							<p className='resume-group-sub-header-title'>4393627 Ontario Inc.</p>
							<p className='resume-group-sub-header-date'>May 2023 - Aug 2023</p>
						</div>
						<ul className='resume-group-description'>
							<li>
							Composed comprehensive project plans and outlines by collaborating with internal stakeholders and cross-functional teams to understand project requirements, boosting project efficiency by 150%						</li>
							<li>
							Directed project progress by tracking over 20 milestones and deadlines while addressing potential risks and benefits, reducing project completion time by over 30%
							</li>
							<li>
							Streamlined operations by delivering expert technical guidance and support by automating email services, updating forms to be digital, and organizing project data to reduce manual workload by over 8 hours per week						</li>
						</ul>
					</div>
					<div className='resume-section-group'>
						<div className='resume-group-header'>
							<p className='resume-group-title'>Medical Device Developer Intern</p>
							<ul className='resume-icon-list'>
								<li><img alt='C++' className='resume-icon' src={CPPIcon}/></li>
								<li><img alt='MATLAB' className='resume-icon' src={MatlabIcon}/></li>
								<li><img alt='Swift' className='resume-icon' src={SwiftIcon}/></li>
							</ul>
						</div>
						<div className='resume-group-sub-header'>
							<p className='resume-group-sub-header-title'>Intellijoint Surgical</p>
							<p className='resume-group-sub-header-date'>Sept 2022 - Dec 2022</p>
						</div>
						<ul className='resume-group-description'>
							<li>
							Engineered and deployed multi-threaded client application with multiple sockets for asynchronous data polling, leveraging Swift, RxSwift, Obj-C, C++, and MATLAB technologies to drive potential 25% increase in company revenue
							</li>
							<li>
							Implemented TCP server integration into the existing tracker library, incorporating asynchronous and reactive functions for seamless real-time data polling to achieve less than 0.4% error rate and optimized latency, overhead, and throughput
							</li>
						</ul>
					</div>
					<div className='resume-section-group'>
						<div className='resume-group-header'>
							<p className='resume-group-title'>Software Developer Intern</p>
							<ul className='resume-icon-list'>
								<li><img alt='C++' className='resume-icon' src={CPPIcon}/></li>
								<li><img alt='C#' className='resume-icon' src={CSharpIcon}/></li>
								<li><img alt='.NET' className='resume-icon' src={DotNetIcon}/></li>
							</ul>
						</div>
						<div className='resume-group-sub-header'>
							<p className='resume-group-sub-header-title'>Niscon Inc.</p>
							<p className='resume-group-sub-header-date'>Jan 2022 - Apr 2022</p>
						</div>
						<ul className='resume-group-description'>
							<li>
							Created a standalone log viewer desktop application, employing parsing and ordering techniques using C#/C++ MFC Library, leading to an 800% increase in company-wide productivity
							</li>
							<li>
							Employed advanced debugging and testing techniques to optimize software development process, prioritizing high-impact issues, resulting in a 50% reduction in delay times and ensuring on-time project delivery
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Projects */}
			<div className='resume-section'>
				<h3 className='resume-section-title'>Projects</h3>
				
				<div className='resume-section-group'>
				<div className='resume-group-header'>
						<p className='resume-group-title'>Real-Time OS</p>
						<ul className='resume-icon-list'>
							{/* <li><img /></li>*/}
						</ul>
					</div>
					<ul className='resume-group-description'>
						<li>
						Implemented a first-fit memory allocation scheme, including heap initialization and memory management functions, tracking memory ownership to ensure safe and 100% complete memory deallocation
						</li>
						<li>
						Developed a priority-based, preemptive multi-tasked kernel by utilizing system calls for task creation, termination, priority management, and task information retrieval using arrays and linked lists, reducing memory usage by 30%
						</li>
					</ul>
				</div>
				<div className='resume-section-group'>
				<div className='resume-group-header'>
						<p className='resume-group-title'>ChatApp iOS</p>
						<ul className='resume-icon-list'>
							<li><img alt='Firebase' className='resume-icon' src={FirebaseIcon}/></li>
							<li><img alt='Swift' className='resume-icon' src={SwiftIcon}/></li>
						</ul>
					</div>
					<ul className='resume-group-description'>
						<li>
						Created an iOS real-time messaging application featuring robust contact management, cloud storage, intuitive user-interface, and quick responsiveness for seamless user experience
						</li>
						<li>
						Executed the implementation Firebase Firestore database to enhance user authentication, securely store data, optimize user query efficiency, and protect user credentials, resulting in a 50% improvement in data synchronization
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Resume;