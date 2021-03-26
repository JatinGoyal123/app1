import React from 'react';
import './search.css';
import Card from './Card';

const CardFrom = () => {
    return (
        <div>
            userslist.map((users) => {return(<Card name={users.name} email={users.email}></Card>)});
        </div>
    );
}

export default CardFrom;