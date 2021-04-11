import React, { Component } from 'react';
import * as d3 from "d3";



class BarChart extends React.Component {

    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.createChart();
    }


    createChart = () => {

        const margin = { top: 50, bottom: 50, left: 50, right: 50 }
        const data = this.props.data

        const svg = d3.select("#barchart").append("svg")
            .attr("width", this.props.width)
            .attr("height", this.props.height)
            .attr("viewBox", [0, 0, this.props.width, this.props.height])


        const x = d3.scaleBand()
            .domain(d3.range(data.length))
            .range([0, this.props.width])

        const y = d3.scaleLinear()
            .domain([0, 25000])
            .range([this.props.height, 0])


        const h = this.props.height;

        svg
            .selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => x(i))
            .attr("y", (d, i) => y(d))
            .attr("width", x.bandwidth)
            .attr("height", d=> y(0) - y(d))
            .attr("fill", "green")

        svg.node();

    }



    render() {
        return <div id={"#" + this.props.id}></div>;
    }
}




export default BarChart;



