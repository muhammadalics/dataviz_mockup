import React from 'react';
import './App.css';
import CountryData from './data/example_countries.json';





class App extends React.Component {


  constructor(){
    super()

    // data = CountryData.json();
    const data = require('./data/example_countries.json');
    console.log(data);
  
  }

  

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}



export default App;
