import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundSlider from 'react-background-slider';

const SingleImage = () => {
    return (
		<>
		<style>
		@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
            </style>
        <section id="home" className="banner image-bg">
            <BackgroundSlider
                duration={100000}
                transition={0.75}
                className="image-bg"
                images={['/images/banner/single-image.jpg']}
            />

            {/* <!-- Container --> */}
            <Container>
                <Row className="align-items-center">

                    {/* <!-- Content --> */}
                    <Col className="col-12 col-lg-6 res-margin">

                        {/* <!-- Banner text --> */}
                        <div className="banner-text">
<br>
</br>
<br>
</br>
<br>
</br>
<br>
</br>						<h1 className="wow fadeInUp" style={{fontFamily: 'Fredoka One, cursive'}} data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0s">
   <br></br>                             Pups Baseall Club<br />Oro Valley, AZ
                                <br>
</br>	                     </h1>
                            
                            <p className="wow fadeInUp" style={{fontFamily: 'Pacifico, cursive'}} data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
                            <br>
</br>	                    </p>

                            <div className="button-store wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s">
                                <a href="#" className="custom-btn d-inline-flex align-items-center m-2 m-sm-0 me-sm-3">
                                    <i className="fab "></i><p><span>Contact Us</span></p>
                                </a>
                                
                                <a href="#" className="custom-btn d-inline-flex align-items-center m-2 m-sm-0">
                                    <i className="fab "></i><p><span>About Us</span></p>
                                </a>
                            </div>

                        </div>
                    </Col>

                    {/* <!-- Image --> */}
                    <Col className="col-12 col-lg-6" style={{position: 'relative', top: '-30px'}}>
                        <div className="banner-image wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
                            <img className="bounce-effect" src="images/banner/ic3.png" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* <!-- Wave effect --> */}
            <div className="wave-effect wave-anim">
                <div className="waves-shape shape-one">
                    <div className="wave wave-one"></div>
                </div>
                
                <div className="waves-shape shape-two">
                    <div className="wave wave-two"></div>
                </div>
                
                <div className="waves-shape shape-three">
                    <div className="wave wave-three"></div>
                </div>
            </div>
        </section>
		</>
    );
}

export default SingleImage;