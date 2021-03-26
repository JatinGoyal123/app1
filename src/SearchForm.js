import React from 'react';
import './search.css';

const SearchForm = ({namechange,emailchange,btnclick}) =>{
    return(
        <div className='search'>
            <center><label>Name</label><br/><br/>
            <input type='text' onChange={namechange}/>
            <br/>
            <label>Email</label><br/><br/>
            <input type='text' onChange={emailchange} /><br/><br/><br/>
            <button type="button" onClick={btnclick}>Submit</button>
            </center>
        </div>
    );
}

export default SearchForm;