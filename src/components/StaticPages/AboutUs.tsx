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
			<button
				id={"backButton"}
				type="button"> 
				<Link to='/'>Back</Link>
			</button>
 
		 
			{/* <div className={"title"}>
				<span id={"highlight"}>By developenrs, for developers</span>
			</div> */}
			<h2>Giving back to the community</h2>
			<p>
				Without Open Source Projects, many of the technologies we take for
				granted today would never have developed, or would be locked away behind
				patent law. The open source movement is the reason that technology has
				developed at such a breakneck pace for the past few decades.
			</p>
			<p>
				We created Revis, to contribute to the Open Source Community and for
				developers using Redis to be able to maximize its potential and to make
				more efficient and strategic decisions.
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
								window.open('https://www.linkedin.com/in/james-maguire-0b267812a/');
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
