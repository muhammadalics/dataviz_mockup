import React from 'react';
import BarChart from '../../components/barchart/barchart.component'


class CountryCountChart extends React.Component {
  
  constructor() {
    super()
  
    const data = require('../../data/example_countries.json');
    // console.log(data);
    // console.log(data['country_counts']);
    // console.log(Object.values(data['country_counts']).slice(1, 10));
  
    this.state = {
      data: Object.values(data['country_counts']).slice(0,50),
      tickers: Object.keys(data['country_counts']).slice(0,50),
      width: 1000,
      height: 1000,
      id: "barchart",
      countrydata: data['country_counts']
  
    }
   
  
  }

   
  
  render() {
    return (

      <div>
        <h1>Country Count Chart</h1>

        <BarChart id= {this.state.id} data={this.state.data} tickers={this.state.tickers} width={this.state.width} height={this.state.height} />
        <div id="barchart"></div>
      </div>


    )

  }
}



export default CountryCountChart;

