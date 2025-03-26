import { Button } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping, } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import videoSrc from '../../public/videos/video-2.webm';

const HeroSection = () => {
	return (
		<div className='hero-container'>
			<video src={videoSrc}
				   autoPlay
				   loop
				   muted
				   playsInline
			/>
			<h1>BETTER POINT</h1>
			<p>Conectando tu negocio con el futuro digital</p>
			<div className='hero-btns'>
				<Button
					className='btns'
					buttonStyle='btn--outline'
					buttonSize='btn--large'
				>
					NUESTROS PRODUCTOS
				</Button>

                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    <FontAwesomeIcon icon={faCartShopping} />
                </Button>
			</div>
		</div>

	)
}

export default HeroSection;