import React from 'react';
import Table from '../../components/table/table.component'

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
      <div>
        <h1>Country Count Table</h1>
        <Table title="A table" tabdata={this.state.countrydata} />
      </div>
    )
  }
}

export default CountryCountTable;

