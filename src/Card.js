import React from 'react';
import './card.css';

//destructuring - ({name, author, id})
const Card = ({ nameCard, authorCard, idCard }) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='image' src={`https://www.galeriaperspektywa.pl/images/${idCard}`} />
			<div>
				<h2>{nameCard}</h2>
				<p>{authorCard}</p>
			</div>
		</div>
	);
}

export default Card;