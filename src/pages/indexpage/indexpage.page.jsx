import React from 'react';
import {Link} from 'react-router-dom';
import './indexpage.style.css'

class Index extends React.Component {
    render() {
        return (

            <div className="indexpage1">
                <center>
                <h1>Sample Components using Kolibri Telemetry Datasets</h1>
                </center>
                <div className="indexpage">
                <span>Please click on links below to see examples of how telemetry data could be visualized and tabulated. </span>
                <span>Routing of this single page app is done using react-router-dom.</span>
                
                <br></br>                                         
                <ul>
                    <li><Link to="/locations">Locations on Map</Link></li>
                    <li><Link to="/countrycountchart">Horizontal Bar Chart for Country Count</Link></li>
                    <li><Link to="/countrycounttable">Data Table</Link></li>
                </ul>
                <p>Source Code: <a href="https://github.com/muhammadalics/dataviz_mockup">GitHub repo</a> </p>
                </div>
            </div>
        )
    }
}

export default Index;