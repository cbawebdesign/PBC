import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Features = (props) => {
    return (
        <section id="features" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Pups Baseball Club</h3>
							<p>Test Content</p>
						</div>
						
					</Col>
				</Row>
			
				<Row className="d-flex align-items-center">
					
					{/* <!-- Left --> */}
					<Col className="col-12 col-md-6 col-lg-4"> 				
						
						<ul className="features-item">
							
							{/* <!-- Feature box --> */}
							<li> 
								<div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>
									
									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-flag1"></div>
									</div>
									
									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Test Content</h4>
										<p>Test Content
</p>
									</div>
									
								</div>
							</li>
							
							{/* <!-- Feature box --> */}
							<li> 
								<div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>
									
									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-flag1"></div>
									</div>
									
									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Test Content</h4>
										<p>Test Content
</p>
									</div>
									
								</div>
							</li>
							
							{/* <!-- Feature box --> */}
							<li> 
								<div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>
									
									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-flag1"></div>
									</div>
									
									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Test Content</h4>
										<p>Test Content
</p>
									</div>
									
								</div>
							</li>
							
						</ul>
					</Col>
					
					{/* <!-- Center --> */}
					<Col className="col-12 col-lg-4 d-none d-lg-block"> 
						<div className="features-thumb text-center">
							<img src="/images/banner/ic8.jpeg" alt="" />
						</div>
					</Col>
					
					{/* <!-- Right --> */}
					<Col className="col-12 col-md-6 col-lg-4"> 
						
						<ul className="features-item">
							
							{/* <!-- Feature box --> */}
							<li> 
								<div className="feature-box d-flex"> 
									
									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-flag1"></div>
									</div>
									
									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Test Content</h4>
										<p> Test Content
</p>
									</div>
									
								</div>
							</li>
							
							{/* <!-- Feature box --> */}
							<li> 
								<div className="feature-box d-flex"> 
									
									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-flag1"></div>
									</div>
									
									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Test Content</h4>
										<p>Test Content</p>
									</div>
									
								</div>
							</li>
							
							{/* <!-- Feature box --> */}
							<li> 
								<div className="feature-box d-flex"> 
									
									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-flag1"></div>
									</div>
									
									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Test Content</h4>
										<p>Test Content
</p>
									</div>
									
								</div>
							</li>
							
						</ul>
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Features;