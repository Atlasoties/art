import React from 'react';
import './Home.css';
//import NavBar from '../Components/NavBar.jsx';
import Footer from '../Components/Footer';
import PictureCard from '../Components/PictureCard';
import pic1 from "../asset/img/undraw_blog_post_re_fy5x.svg";
import pic2 from "../asset/img/undraw_enter_uhqk-removebg-preview_auto_x2-removebg-preview.png";
import pic3 from "../asset/img/undraw_events_re_98ue (1).svg";
import pic4 from "../asset/img/cartoon-g845ac8b26_1920.jpg"
import LoginLogout from '../Components/links/link.component';
let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corrupti impedit laborum accusantium culpa optio unde aliquid accusamus maxime quos sunt eligendi quidem quisquam ut ipsa repellat porro voluptas aliquam necessitatibus quod, quasi labore possimus obcaecati asperiores? Dolores eum necessitatibus reiciendis quod dolor beatae assumenda sed, nemo at. Repellat, quibusdam!";

class Home extends React.Component {

	constructor() {
		super()
		this.state = {
			pages: [
				{
					linkPlace: '/register',
					linkName: 'Register',
					id: 1
				},
				{
					linkPlace: '/login',
					linkName: 'Login',
					id: 2
				},

			]
		};
	}

	render() {
		return (
			<div>

				<section>

					<header className="heading">
						{/* <div className='forNavbar'>
							<NavBar />
						</div> */}
						<div className='fortitles'>
							<h1>Welcome To Your Life</h1>
							<h4>Pan Art will save Your Job, Join US</h4>
						</div>
						<div className='forlinks'>
							{this.state.pages.map(pages => <LoginLogout place={pages.linkPlace} placeName={pages.linkName} />)}
						</div>
					</header>

					<div className="welcome">


						<figure className=" wrap">
							<PictureCard text={text} title="Title" id="img2" url={pic2} />
							<PictureCard text={text} title="Event Advertising" id="img3" url={pic3} />
							<PictureCard text={text} title="Posting Blog" id="img1" url={pic1} />

						</figure>
					</div>
				</section>
				<div id="flip">
					<img src={pic4} alt="" />
				</div>
				<Footer />
			</div>
		);
	}
}

export default Home;