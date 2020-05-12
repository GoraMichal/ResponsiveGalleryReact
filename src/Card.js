import React from 'react';
import './card.css';

//destructoring - ({name, author, id})
const Card = ({ name, author, id }) => {
	return (
		//tachyons className
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='image' src={`https://www.galeriaperspektywa.pl/images/${id}`} />
			<div>
				<h2>{name}</h2>
				<p>{author}</p>
			</div>
		</div>
	);
}

export default Card;