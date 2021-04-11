import React from 'react';
import './App.css';
import CountryData from './data/example_countries.json';
import BarChart from './components/barchart/barchart.component'
import LocationsOnMap from './components/map/map.component'
import Table from './components/table/table.component'





class App extends React.Component {


  constructor(){
    super()

    const data = require('./data/example_countries.json');
    console.log(data);
    console.log(data['country_counts']);
    console.log(Object.values(data['country_counts']).slice(1,10));

    this.state = {
      // data: [12, 5, 6, 6, 9, 10],
      data: Object.values(data['country_counts']),
      width: 1000,
      height: 600,
      id: "barchart",
      locationdata: Object.values(data['last_hour_locations']),
      countrydata: data['country_counts']

    }


  
  }

  

  render() {
    return(

    
    <div className="App">

    {/* <BarChart id= {this.state.id} data={this.state.data} width={this.state.width} height={this.state.height} /> */}  
    {/* <div id="barchart"></div> */}   
    {/* <LocationsOnMap data={this.state.locationdata}/> */}
    {/* <div id="location"></div> */}

      <Table title="A table" tabdata={this.state.countrydata}  />

  </div>
    )
  }
}



export default App;
