// import React, { Component } from 'react';
// import * as d3 from "d3";

// class BarChart extends React.Component {

//     constructor(props) {
//         super(props)
//     }

//     componentDidMount() {
//         this.createChart();
//     }

//     createChart = () => {

//         const margin = { top: 50, bottom: 50, left: 50, right: 50 }
//         const data = this.props.data

//         const svg = d3.select("#barchart").append("svg")
//             .attr("width", this.props.width)
//             .attr("height", this.props.height)
//             .attr("viewBox", [0, 0, this.props.width, this.props.height])


//         const x = d3.scaleBand()
//             .domain(d3.range(data.length))
//             .range([0, this.props.width])

//         const y = d3.scaleLinear()
//             .domain([0, 25000])
//             .range([this.props.height, 0])


//         const h = this.props.height;

//         svg
//             .selectAll("rect")
//             .data(data)
//             .enter()
//             .append("rect")
//             .attr("x", (d, i) => x(i))
//             .attr("y", (d, i) => y(d))
//             .attr("width", x.bandwidth)
//             .attr("height", d=> y(0) - y(d))
//             .attr("fill", "green")

//         svg.node();

//     }

//     render() {
//         return <div id={"#" + this.props.id}></div>;
//     }
// }

// export default BarChart;



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

        const margin = { top: 100, bottom: 100, left: 100, right: 1 }
        const data = this.props.data
        const tickers = this.props.tickers

        console.log(data)

        const svg = d3.select("#barchart").append("svg")
            .attr("width", this.props.width)
            .attr("height", this.props.height)
            .attr("viewBox", [0, 0, this.props.width, this.props.height])


        const y = d3.scaleBand()
                
            .domain(d3.range(data.length))
            // .range([0, this.props.width])
            .rangeRound([margin.top, this.props.height - margin.bottom])

        const x = d3.scaleLinear()
            .domain([0, d3.max(data, d => d)])    
            // .domain([25000, 0])
            .range([margin.left, this.props.width - margin.right])
            //.range([margin.left, this.props.width - margin.right])

        var xAxis = g => g
            .attr("transform", `translate(0,${margin.top})`)
            .call(d3.axisTop(x).ticks(this.props.width / 80, data.format))
            .call(g => g.select(".domain").remove())

        var yAxis = g => g
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y).tickFormat(i => tickers[i]).tickSizeOuter(0))

        var format = x.tickFormat(20, data.format)

        const h = this.props.height;

        svg
            .selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("y", (d, i) => y(i))
            .attr("x", x(0))
            // .attr("x", (d, i) => x(d))
            .attr("height", y.bandwidth)
            .attr("width", d => x(d) - x(0))
            // .attr("width", d => x(0) - x(d))
            .attr("fill", "green")

        svg.append("g")
            .call(xAxis);
        svg.append("g")
            .call(yAxis);

        svg.append("g")
            .attr("fill", "white")
            .attr("text-anchor", "end")
            .attr("font-family", "sans-serif")
            .attr("font-size", 12)
            .selectAll("text")
            .data(data)
            .join("text")
            // .attr("x", 0)
            .attr("x", d => x(d))
            //.attr("x", x(0))
            .attr("y", (d, i) => y(i) + y.bandwidth() / 2)
            .attr("dy", "0.35em")
            .attr("dx", -4)
            .text(d => format(d))
            .call(text => text.filter(d => x(d) - x(0) < 600) // short bars
                .attr("dx", +4)
                .attr("fill", "black")
                .attr("text-anchor", "start"));



        svg.node();

    }

    render() {
        return <div id={"#" + this.props.id}></div>;
    }
}

export default BarChart;