import React from 'react';
import './search.css';

var userlist = [
    {
        name: 'Pratham',
        email: 'pverma@gmail.com'
    },
    {
        name: 'Jatin',
        email: 'jgoyal@gmail.com'
    },
];

const Card = (name, email) => {
    return(
      <div>
          <center>
              Name : {name}
              <br/>
              Email : {email}
          </center>
      </div>  
    );
}


export default Card;