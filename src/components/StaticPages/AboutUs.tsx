import React from 'react';
import NavBarLandingPage from './NavBarLandingPage';
import {Link, Navigate} from 'react-router-dom';
import Linkedin from '../../assets/LinkedIn.png';
import Github from '../../assets/Github.png'
import Adam from '../../assets/Profile_Adam.png'
import Alex from '../../assets/Profile_Alex.png'
import James from '../../assets/Profile_James.png'
import Mark from '../../assets/Profile_Mark.png'



// import styles from '../../styles/LandingPage.module.scss'

// import router from 'next/router';
// import styles from '../../styles/StaticPages.module.scss';

function AboutUs() {

	return (
		
    <div className={"aboutUsWrapper"}> 

			<Link to='/'>
        <button
					className={"neon-button"}
          type="button"> 
					<Link to='/'>Back</Link>
        </button>
       </Link>
		 
			{/* <div className={"title"}>
				<span id={"highlight"}>By developenrs, for developers</span>
			</div> */}
			<h2>Proud to be part of the Open Source Community</h2>
			<p>
				As software developers who have been deeply inspired by other Open Source projects, 
				we are extremely excited to contribute back to the Community with Mariposa. We hope 
				this product will serve developers well and look forward to expanding its potential.
			</p>
				Meet our team

			{/* <h1 id={"theTeam"}>Mariposa Team</h1> */}
			<div className={"team"}>
				<div className={"imageDiv"}>
					<img id={"profilePic"} src={Adam} />
					<p>Adam Berri</p>
					<div className={"contactIcons"}>
						<button
							type="button"
							onClick={() => {
								window.open('https://www.linkedin.com/in/adam-berri-606782144/');
							}}
							id={"linkedin"}
						>
																					<img id={"linkedin"} src={Linkedin} />

						</button>
						<button
							type="button"
							onClick={() => {
								window.open('https://github.com/AdamBerri');
							}}
							id={"github"}
						>
														<img id={"github"} src={Github} />

						</button>
					</div>
				</div>
				<div className={"imageDiv"}>
				<img id={"profilePic"} src={Alex} />
					<p>Alex Barbazan</p>
					<div className={"contactIcons"}>
						<button
							type="button"
							onClick={() => {
								window.open('https://www.linkedin.com/in/alexander-barbazan-b1041662/');
							}}
							id={"linkedin"}
							>
							<img id={"linkedin"} src={Linkedin} />
						
							{' '}
						</button>
						<button
							type="button"
							onClick={() => {
								window.open('https://github.com/agbarbazan');
							}}
							id={"linkedin"}
						>
							<img id={"github"} src={Github} />

						</button>
					</div>
				</div>
				<div className={"imageDiv"}>
				<img id={"profilePic"} src={James} />

					<p>James Maguire</p>
					<div className={"contactIcons"}>
						<button
							type="button"
							onClick={() => {
								window.open('https://www.linkedin.com/in/james-maguire-0b267812a/');
							}}
							id={"linkedin"}
						>
														<img id={"linkedin"} src={Linkedin} />

						</button>
						<button
							type="button"
							onClick={() => {
								window.open('https://github.com/jwmaguire15');
							}}
							id={"github"}
						>
														<img id={"github"} src={Github} />

						</button>
					</div>
				</div>
				<div className={"imageDiv"}>
				<img id={"profilePic"} src={Mark} />
					<p>Mark Dolan</p>
					<div className={"contactIcons"}>
						<button
							type="button"
							onClick={() => {
								window.open('https://www.linkedin.com/in/mark-dolan-86459819/');
							}}
							id={"linkedin"}
						>
																					<img id={"linkedin"} src={Linkedin} />

						</button>
						<button
							type="button"
							onClick={() => {
								window.open('https://github.com/markdolan1');
							}}
							id={"github"}
						>
														<img id={"github"} src={Github} />

							{' '}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default AboutUs;
