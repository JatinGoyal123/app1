import React,{Component} from 'react';
import SearchForm from './SearchForm';
import CardFrom from './CardFrom';
import userslist from './users';

class App extends Component{
  constructor(){
    super();
    this.state={
      name: '',
      email: '',   
    }
  }
  btnclick=(event)=>{
    console.log('btn',event.target.value)
  }
  namechange=(event)=>{
    console.log('name',event.target.value)
  }
  emailchange=(event)=>{
    console.log('email',event.target.value)
  }
  render(){
    return (    
    <div>
      <SearchForm namechange={this.namechange} emailchange={this.emailchange} btnclick={this.btnclick}/>
      <CardFrom userslist = {userslist}/>
        </div>
    );
  }
}

export default App;