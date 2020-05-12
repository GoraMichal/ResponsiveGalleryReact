import React from 'react';
import Card from './Card';

//const CardList = ({ images }) => {
//    const cardComponent = images.map((user, i) => {
//        return (
//            <Card
//                key={i}
//                id={images[i].id}
//                name={images[i].name}
//                author={images[i].author}
//            />
//        );
//    })

//    return (
//        <div>
//            {cardComponent}
//        </div>
//    );
//}

const CardList = ({ images }) => {
    return (
        <div>
            {
                images.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={images[i].id}
                            name={images[i].name}
                            author={images[i].author}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;