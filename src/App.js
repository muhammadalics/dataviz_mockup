import React from 'react';
import './App.css';
import LocationsMap from './pages/worldmap/worldmap.page'
import CountryTable from './pages/country_count_table/country_count_table.page'
import CountryChart from './pages/country_count_chart/country_count_chart.page'
import IndexPage from './pages/indexpage/indexpage.page'
import {Switch, Route} from 'react-router-dom';


class App extends React.Component {

  constructor() {
    super()
    const data = require('./data/example_countries.json');
    // console.log(data);
    // console.log(data['country_counts']);
    // console.log(Object.values(data['country_counts']).slice(1, 10));

    this.state = {
      data: Object.values(data['country_counts']),
      width: 1000,
      height: 600,
      id: "barchart",
      countrydata: data['country_counts']

    }
  }


  render() {
    return (


      <div className="App">

        <Switch>
          <Route exact path='/' component={IndexPage} />
          <Route exact path='/countrycounttable' component={CountryTable} />
          <Route exact path='/countrycountchart' component={CountryChart} />
          <Route exact path='/locations' component={LocationsMap} />
        </Switch>

      </div>
    )
  }
}



export default App;
