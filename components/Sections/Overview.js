import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Overview = (props) => {
    return (
        <section id="overview" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Track time --> */}
				<Row>
					
					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-6 offset-lg-1 order-lg-last res-margin">
							
						{/* <!-- Section title --> */}
						<div className="section-title text-center text-lg-start">
							<h3>Select Your Packaging Preferences</h3>
							<p> Select Your Packaging Preferences: We've simplified the process to make it easy for you to choose. Pick from a range of shipping boxes and food containers, available in different sizes to suit your needs. With iCrave, packaging your homemade delights has never been easier </p>
						</div>

						{/* <!-- Items --> */}
						<div className="overview-item">

							{/* <!-- Item 1 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-compass"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Choose Your Shipping Boxes</h6>
									<p>Select the ideal-sized shipping box to accommodate your iCrave package</p>
								</div>

							</div>

							{/* <!-- Item 2 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-helm"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Pick Your Food Containers</h6>
									<p>Explore our range of food containers, available in various sizes to suit your dish portions</p>
								</div>

							</div>

							{/* <!-- Item 3 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-link"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Customize Your Order</h6>
									<p>Tailor your packaging preferences to fit your specific needs and ensure your iCrave package arrives safely and securely</p>
								</div>

							</div>

						</div>
							
					</Col>
					
					{/* <!-- Image --> */}
					<Col className="col-12 col-lg-5 order-lg-first text-sm-center">
						<img src="/images/banner/ic5.png" alt="" />
					</Col>
					
				</Row>
				
				<div className="empty-100"></div>
				
				{/* <!-- Daily schedule --> */}
				<Row>
					
					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-6 res-margin">
							
						{/* <!-- Section title --> */}
						<div className="section-title text-center text-lg-start">
							<h3>My Bitez</h3>
							<p>My Bitez / Connect, share, and indulge in a world of culinary delights with My Bitez. </p>
						</div>

						{/* <!-- List --> */}
						<ul className="overview-list">

							<li>
								<p><i className="fa-li fas fa-check"></i> Connect with Loved Ones: Seamlessly link with family and friends who send or receive iCrave packages. Your connections are just a tap away.</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> Share the Joy: Capture the essence of your iCrave experience by sharing photos, stories, and the sheer delight of enjoying a cherished meal.
</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> Create and Discover: Explore a treasure trove of recipes, culinary secrets, and food experiences shared by our vibrant iCrave community.
</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> Stay Connected: Keep the conversation going through our integrated chat feature. Share messages, thoughts, and smiles, no matter the distance.
</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> Join the Foodie Community: Dive into a world of culinary enthusiasts, fellow food lovers, and passionate home cooks. Exchange ideas, recipes, and the pure joy of food.
</p>
							</li>

						</ul>

						{/* <!-- Button --> */}
						<p className="text-center text-lg-start">
							<a href="#" className="btn">Learn More</a>
						</p>
					
					</Col>
					
					{/* <!-- Image --> */}
					<Col className="col-12 col-lg-5 offset-lg-1 text-sm-center">
						<img src="/images/banner/ic4.jpg" alt="" />
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Overview;