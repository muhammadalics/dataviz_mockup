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

  }

  render() {
    return (


      <div className="App">

        <Switch>
          <Route exact path='/' component={IndexPage} /> 
          <Route exact path='/countrycounttable/' component={CountryTable} />
          <Route exact path='/countrycountchart' component={CountryChart} />
          <Route exact path='/locations' component={LocationsMap} />
        </Switch>

      </div>
    )
  }
}



export default App;
