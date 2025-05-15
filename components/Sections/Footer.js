import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Footer extends Component {

	componentDidMount() {
		if(typeof window !== 'undefined') {
			window.WOW = require('wowjs/dist/wow.js');	
		}
	
		new WOW.WOW().init();
	}

	render() {
		return (
			<footer>
				
				{/* <!-- Widgets --> */}
				<div className="footer-widgets">
					<Container>
						
						<Row>
							
							{/* <!-- Footer logo --> */}
							<Col className="col-12 col-md-6 col-lg-3 res-margin">
								<div className="widget">
									<p className="footer-logo">
										<img src="/images/logo-white.png" alt="Naxos" data-rjs="2" />
									</p>
									<p>
										
									</p>
									
									{/* <!-- Social links --> */}
									<div className="footer-social">
										<a href="#" title="Twitter"><i className="fab fa-twitter fa-fw"></i></a>
										<a href="#" title="Facebook"><i className="fab fa-facebook-f fa-fw"></i></a>
										<a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
										<a href="#" title="Dribbble"><i className="fab fa-dribbble"></i></a>
										<a href="#" title="Pinterest"><i className="fab fa-pinterest fa-fw"></i></a>
									</div>
								</div>
							</Col>
							
							{/* <!-- Useful links --> */}
							<Col className="col-12 col-md-6 col-lg-2 offset-lg-1 res-margin">
								<div className="widget">
									
									
									
								</div>
							</Col>
							
							{/* <!-- Product help --> */}
							<Col className="col-12 col-md-6 col-lg-3 res-margin">
								<div className="widget">
									
								
									
								</div>
							</Col>
							
							{/* <!-- Download --> */}
							<Col className="col-12 col-md-6 col-lg-3">
								<div className="widget">
									
								
									
								</div>
							</Col>
							
						</Row>
						
					</Container>
				</div>
				
				{/* <!-- Copyright --> */}
				<div className="footer-copyright">				
					<Container>
						
						<Row>						
							<Col className="col-12">
								
								{/* <!-- Text --> */}
								<p className="copyright text-center">
									Copyright © 2025 <a href="#" target="_blank">Pups Baseball Club</a>. All Rights Reserved.
								</p>
								
							</Col>
						</Row>
						
					</Container>				
				</div>
				
			</footer>
		);
	}

}