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
import NextjsIcon from '../Assets/nextjs-icon.svg';
import FlaskIcon from '../Assets/flask-icon.svg';
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
						<p className='resume-group-sub-header-title'>Honours Bachelor of Computer Engineering</p>
						<p className='resume-group-sub-header-date'>April 2025</p>
					</div>
					<ul className='resume-group-description'>
						<li>
						Relevant Courses: Algorithms & Data Structures, Real-time OS, Compilers, Network Systems, Database Systems, Computer Security
						</li>
					</ul>
				</div>
			</div>
			<hr className='resume-section-divider' />

			{/* Work Experience */}
			<div className='resume-section'>
				<h3 className='resume-section-title'>Experience</h3>
				
				<div className='resume-section-list'>
				<div className='resume-section-group'>
						<div className='resume-group-header'>
							<p className='resume-group-title'>SYNC Software Developer Intern</p>
						</div>
						<div className='resume-group-sub-header'>
							<p className='resume-group-sub-header-title'>Ford Motor Company</p>
							<p className='resume-group-sub-header-date'>Sep 2024 - Dec 2024</p>
						</div>
						<ul className='resume-group-description'>
							<li>
							Developed unit and functional tests in Java for automotive Android software to validate API functionality
							</li>
							<li>
							Executed tests on a hardware bench via Android Studio to ensure seamless hardware-software integration
							</li>
						</ul>
					</div>
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
							<p className='resume-group-sub-header-title'>Kinectrics</p>
							<p className='resume-group-sub-header-date'>Jan 2024 - Apr 2024</p>
						</div>
						<ul className='resume-group-description'>
							<li>
							Designed and implemented a complex relational database with 25+ tables in PostgreSQL, optimizing data organization and minimizing retrieval time via indexing and query optimization							</li>
							<li>
							Engineered an industrial full-stack web app from scratch using Node.js, React, Bootstrap, and Django to modernize cable testing data management							</li>
							<li>
							Created database diagrams, wireframes, and technical documentation to streamline project development and effectively communicate design decisions with stakeholders							</li>
							<li>
							Standardized cable testing procedures and documentation, enabling easy identification and resolution of cable issues, thereby reducing workload and downtime by 250% and enhancing overall plant reliability
							</li>
						</ul>
					</div>
					<div className='resume-section-group'>
						<div className='resume-group-header'>
							<p className='resume-group-title'>Technical Project Manager Intern</p>
							<ul className='resume-icon-list'>
								<li><img alt='Excel' className='resume-icon' src={ExcelIcon}/></li>
								<li><img alt='Microsoft Office' className='resume-icon' src={MicrosoftOfficeIcon}/></li>
							</ul>
						</div>
						<div className='resume-group-sub-header'>
							<p className='resume-group-sub-header-title'>HUNTS Group of Companies</p>
							<p className='resume-group-sub-header-date'>May 2023 - Aug 2023</p>
						</div>
						<ul className='resume-group-description'>
							<li>
							Led the management of franchise-related projects, including contract negotiations, documentation, and categorization of commercial listings, improving organization and accelerating project completion						</li>
							<li>
							Collaborated with stakeholders to refine business models, propose strategies, and advance franchise development
							</li>
							<li>
							Automated workflows, digitized forms, and restructured data management to reduce workload by 8+ hours weekly
							</li>
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
							Engineered a multi-threaded client-server system utilizing TCP sockets and asynchronous data polling using Swift, RxSwift, Obj-C, C++, and MATLAB, establishing a new revenue stream to increase company profits by 25%
							</li>
							<li>
							Designed a cross-platform client app using C++ Boost ASIO, leveraging OOP principles to streamline data management and minimize feature development time
							</li>
							<li>
							Integrated TCP server into the tracker library using Apple Network framework, implementing data organization and compression techniques to minimize latency, overhead, and throughput for data polling with ≤0.4% error rate
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
							<p className='resume-group-sub-header-title'>Niscon</p>
							<p className='resume-group-sub-header-date'>Jan 2022 - Apr 2022</p>
						</div>
						<ul className='resume-group-description'>
							<li>
							Created a standalone log viewer desktop app using parsing and file exploration techniques with C# and C++ MFC Library, reducing company-wide troubleshooting time by 3 hours per day
							</li>
							<li>
							Optimized software development by employing advanced debugging techniques, prioritizing high-impact issues to reduce delays by 50%, ensuring timely project delivery
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr className='resume-section-divider' />

			{/* Projects */}
			<div className='resume-section'>
				<h3 className='resume-section-title'>Projects</h3>
				<div className='resume-section-list'>
					<div className='resume-section-group'>
						<div className='resume-group-header'>
								<p className='resume-group-title'>Fleet Vision</p>
								<ul className='resume-icon-list'>
									<li><img alt='Python' className='resume-icon' src={PythonIcon}/></li>
									<li><img alt='C++' className='resume-icon' src={CPPIcon}/></li>
									<li><img alt='Firebase' className='resume-icon' src={FirebaseIcon}/></li>
									<li><img alt='Next.js' className='resume-icon' src={NextjsIcon}/></li>
									<li><img alt='Flask' className='resume-icon' src={FlaskIcon}/></li>
								</ul>
							</div>
							<ul className='resume-group-description'>
								<li>
								Engineered an IoT-based driver monitoring system using ESP32 cameras and OBD-II data for real-time analysis
								</li>
								<li>
								Implemented CLIP-based machine learning models for facial and posture recognition, detecting drowsiness and distracted driving in real-time, with an accuracy 95% at a rate of 30 fps
								</li>
								<li>
								Built a Next.js web app with Firebase integration for real-time data visualization along with cloud-based historical analysis of driver safety
								</li>
							</ul>
						</div>
					<div className='resume-section-group'>
						<div className='resume-group-header'>
								<p className='resume-group-title'>TripLinker Android</p>
								<ul className='resume-icon-list'>
									{/*icons */}
								</ul>
							</div>
							<ul className='resume-group-description'>
								<li>
								Developed a multi-page Android native app with Kotlin and Jetpack Compose, integrating Google Maps, TripAdvisor, Flight Tracker, Geolocation, and News APIs
								</li>
								<li>
								Effectively integrated features such as flight tracking, multi-user itinerary management, group expense tracking, and nearby attractions using Firebase and local storage for offline capabilities
								</li>
							</ul>
						</div>
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
			</div>
		</section>
	);
};

export default Resume;