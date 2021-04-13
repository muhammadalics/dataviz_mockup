import React from 'react';
import Table from '../../components/table/table.component'
import './country_count_table.style.css'

class CountryCountTable extends React.Component {

  constructor() {
    super()
    const data = require('../../data/example_countries.json');
    this.state = {
      data: Object.values(data['country_counts']),
      countrydata: data['country_counts']
    }
  }

  render() {
    return (
      <div style={{ margin: 50 }}>

        <div className="text1">
          <h1>Country Count Table</h1>
          <p>
            This data table was made with material-table package. Tables like this one can be rendered along side visualizations or individually on a single page.
          Please notice the powerful features: <p style={{ color: 'red' }}>filter, search, data export, sort and more.</p></p>
          <br></br>

        </div>

        <br></br><br></br> <br></br>
        <Table title="" tabdata={this.state.countrydata} />
      </div>
    )
  }
}

export default CountryCountTable;

