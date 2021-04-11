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
                <h1>Locations From Last Hour</h1>
                <LocationsOnMap data={this.state.locationdata} />
                <div id="location"></div>
            </div>
        )
    }
}

export default WorldMap;

