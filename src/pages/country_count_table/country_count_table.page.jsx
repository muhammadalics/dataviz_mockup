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
      <div style={{margin: 50}}>
        
        <div className="text1">
        <h1>Country Count Table</h1>
          <p>
            This data table was made with material-table package. Tables like this one can be rendered along side visualizations or individually on a single page.
          Please notice the powerful features: <p style={{color:'red'}}>filter, search, data export, sort and more.</p></p>
          <br></br>

          {/* <div className="featurelist">
            <dl>
              <dt>Search</dt>
              <dd>- Entire table can be searched by using the search box on top right.</dd>
              <dt>Column Filters</dt>
              <dd>- The rows can be filtered by values in column. </dd>
              <dt>Sorting</dt>
              <dd>- Columns can be sorted in ascending or descending order. Please hover mouse by the right side of column names and click on the arrow that appears.  </dd>
              <dt>Table Download</dt>
              <dd>- Table can be downloaded in csv or pdf format by clicking the download button at the top right corner of the table.  </dd>
              <dt>Table Download</dt>
              <dd>- Table can be downloaded in csv or pdf format by clicking the download button at the top right corner of the table.  </dd>
              <dt>Row visibility</dt>
              <dd>- The number of rows visible can be chosen with the help of drop down menu at the bottom of the table.  </dd>
            </dl>
          </div> */}
        </div>

        <br></br><br></br> <br></br>
        <Table title="" tabdata={this.state.countrydata} />
      </div>
    )
  }
}

export default CountryCountTable;

