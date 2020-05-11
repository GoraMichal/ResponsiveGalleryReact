//import React from 'react';

//function Galeria() {
//    return (
//        <div>
//            <h1>Moja galeria</h1>
//            <h2>Witaj</h2>
//        </div>
//    );
//}

//export default Galeria;

import React, { Component } from 'react';
import './gallery.css';

//className - JSX

//class Galeria extends Component {
//    render() {
//        return (
//            <div className='f1 tc'>
//                <h1>Moja galeria</h1>
//                <h2>{this.props.something}</h2>
//            </div>
//        );
//    }
//}

const Galeria = (props) => {
    return (
        <div className='f1 tc'>
            <h1>Moja galeria</h1>
            <h2>{props.something}</h2>
        </div>
    );
}

export default Galeria;