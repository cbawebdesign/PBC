import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';

const Counters = () => {
    const parallax = useRef(null);

    useEffect(() => {
        if (parallax.current) {
            parallax.current.style.backgroundImage = `url(${parallax.current.getAttribute('data-image')})`;
        }
    }, [parallax]);

    const [counter, setCounter] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            const counterId = document.querySelector('#counters');
            const pos = window.scrollY;
      
            if (counterId) {
                if (counterId.offsetTop - 150 <= pos && counterId.offsetTop + counterId.clientHeight >= pos) {
                    setCounter(true);
                }
            }
        };

        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    });

    return (
        <section id="counters" className="parallax" data-image="/images/parallax/counters.jpg" ref={parallax}>
			
			{/* <!-- Overlay --> */}
			<div className="overlay"></div>	
			
			{/* <!-- Container --> */}
			<Container>


                    {/* <!-- Counter 1 --> */}
                   

            </Container>
				
		</section>
    );
}

export default Counters;