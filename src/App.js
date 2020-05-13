//Main component file (smth like contener)
import React, { Component } from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox';
//Destrukturyzacja
import { images } from './Gallery.js';

import './index.css';

//Klasa App zawiera konstruktor do tworzenia dwoch stanow: images, searchfield
//Stany sluza do renderowania komponentow 
//App wyszukuje zmian w SearchBox za pomoca onSearchChange
//App komunikuje sie z CardList w celu przefiltrowania wynikow wyszukwiania
//https://reactjs.org/docs/handling-events.html

class App extends Component {
    constructor() {
        super()
        this.state = {
            image: images,
            //image: [],
            searchField: ''
        }
    }

    //Aktualizacja stanu komponentu po aktualizacji DOM (cykl zycia komponentu)
    //componentDidMount() {
    //    fetch('https://jsonplaceholder.typicode.com/users')
    //        .then(response => {
    //            return response.json();
    //        })
    //        .then(users => {
    //            this.setState({ image: users })
    //        });
    //    //console.log('check');
    //}

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const filteredImages = this.state.image.filter(image => {
            return image.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (this.state.image.length === 0) {
            return <h1>Loading...</h1>
        } else {

            return (
                <div className='tc'>
                    <div className='galleryTitle'>Art Gallery</div>
                    <SearchBox searchChange={this.onSearchChange} />
                    <CardList images={filteredImages} />
                </div>
            );
        }
    }
}

export default App;