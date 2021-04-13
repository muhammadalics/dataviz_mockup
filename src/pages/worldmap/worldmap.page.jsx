import React from 'react';
import LocationsOnMap from '../../components/map/map.component'

class WorldMap extends React.Component {
      
    constructor() {
        super()   
        const data = require('../../data/example_countries.json');
        this.state = {
          locationdata: Object.values(data['last_hour_locations']),
        }
      }
           
    render() {
        return (
            <div>
                <center>
                <h1>Locations From Last Hour</h1>
                <div>Red points mark the locations. The data for locations was taken from example_countries.json</div><br></br>
                <LocationsOnMap data={this.state.locationdata} />
                <div id="location"></div>
                </center>
            </div>
        )
    }
}

export default WorldMap;

