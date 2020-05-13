//Main component file (smth like contener)
import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
//Destrukturyzacja
import { images } from '../Gallery.js';

import '../index.css';

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
        const { image, searchField } = this.state;
        const filteredImages = image.filter(image => {
            return image.name.toLowerCase().includes(searchField.toLowerCase());
        })
        //if (this.state.image.length === 0) {
        return !image.length ?
            <h1>Loading...</h1> :
            (
                <div className='tc'>
                    <div className='galleryTitle'>Art Gallery</div>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList images={filteredImages} />
                    </Scroll>
                </div>
            );
    }
}


export default App;