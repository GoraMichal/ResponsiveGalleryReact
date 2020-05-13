import React from 'react';

//destructuring - ({name, author, id})
const Card = ({ nameCard, authorCard, idCard }) => {
	return (
		//tachyon
		<div className='tc bg-washed-red dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='image' src={`https://www.galeriaperspektywa.pl/images/${idCard}`} />
			<div>
				<h2>{nameCard}</h2>
				<p>{authorCard}</p>
			</div>
		</div>
	);
}

export default Card;