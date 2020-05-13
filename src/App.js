//Main component file (smth like contener)
import React, { Component } from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox';
//Destrukturyzacja
import { images } from './Gallery.js';

//Klasa App zawiera konstruktor do tworzenia dwoch stanow: images, searchfield
//Stany sluza do renderowania komponentow 
//App wyszukuje zmian w SearchBox za pomoca onSearchChange
//App komunikuje sie z CardList w celu przefiltrowania wynikow wyszukwiania

class App extends Component {
    constructor() {
        super()
        this.state = {
            image: images,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const filteredImages = this.state.image.filter(image => {
            return image.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className='tc' >
                <h1>Art Gallery</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList images={filteredImages} />
            </div>
        );
    }
}

export default App;