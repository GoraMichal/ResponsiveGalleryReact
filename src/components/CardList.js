import React from 'react';
import Card from './Card';

//const CardList = ({ images }) => {
//    const cardComponent = images.map((user, i) => {
//        return (
//            <Card
//                key={i}
//                idCard={images[i].id}
//                nameCard={images[i].name}
//                authorCard={images[i].author}
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
                            idCard={images[i].id}
                            nameCard={images[i].name}
                            authorCard={images[i].author}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;