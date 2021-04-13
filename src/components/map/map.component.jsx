import React from 'react';
import * as d3 from "d3";
import * as topojson from "topojson-client";
import { feature } from 'topojson-client';

class LocMap extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.createMap();
    }

    createMap = () => {
        const svg = d3.select("#location").append("svg")
            .attr("width", 1000)
            .attr("height", 1000)
            .attr("viewBox", [0, 0, 1000, 1000]);

        const projection = d3.geoNaturalEarth1();
        const pathGenerator = d3.geoPath().projection(projection);

        svg.append('path')
            .attr('class', 'sphere')

        d3.json('https://unpkg.com/world-atlas@1.1.4/world/110m.json')
            .then(data => {
                const countries = feature(data, data.objects.countries);
                svg.selectAll('path').data(countries.features)
                    .enter().append('path')
                    .attr('class', 'country')
                    .attr('d', pathGenerator);

                const circles = svg.selectAll('g')
                    .data(this.props.data)
                    .join('g');

                circles.append('g')
                    .attr('transform', ({ long, lat }) => `translate(${projection([long, lat]).join(",")})`)
                    .append('circle')
                    .attr('r', 2)
                    .attr('fill', 'red');
            });

    }

    render() {
        return <div id={"#" + "location"}></div>;
    }
}

export default LocMap;



