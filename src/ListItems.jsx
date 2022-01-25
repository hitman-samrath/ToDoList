import React from 'react';

const ListItems = (props) => {
    return ( 
    <div className='listdiv'>
    <button className='deleteb' 
    onClick={() => {
        props.onSelect(props.id)
    }} > x </button>
    <li>{props.text}</li>
    </div>
    );
};

export default ListItems;