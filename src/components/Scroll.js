import React from 'react';

const Scroll = (props) => {
    return (
        <div className='pa1' style={{ overflow: 'scroll', border: '1px solid black', height: '800px', behavior: "smooth"  }} >
            {props.children}
        </div>
    )
};

export default Scroll;