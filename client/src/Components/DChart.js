import React, { Component } from 'react';
import * as d3 from 'd3';
import data from './loanstats.csv';

class DChart extends Component {
    componentDidMount() {
        this.drawChart();
    }
    
    drawChart() {
        d3.csv(data, (d) => {
            return {
                x: parseFloat(d.int_rate),
                y: parseInt(d.annual_inc)
            }
        }).then((dataset) => {
            const height = 500,
                width= 700,
                margins = {top: 20, right: 100, bottom: 50, left: 100};

            const chart = d3.select('.chart')
                .attr('width', width + margins.left + margins.right)
                .attr('height', height + margins.top + margins.bottom)
                .append('g')
                .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');
            
            const xScale = d3.scaleLinear()
                .range([width, 0])
                .domain([d3.max(dataset, d => d.x), 0])
            
            const yScale = d3.scaleLinear()
                .range([0, height])
                .domain([d3.max(dataset, d => d.y), 0 ])
            
            chart.selectAll('dot')
                .data(dataset)
                .enter().append('circle')
                .attr('r', 1)
                .attr('cx', d => xScale(d.x))
                .attr('cy', d => yScale(d.y))
                .style('fill', d => 'indianred')

            chart.append('g')
                .attr('transform', 'translate(0, '+ height + ')')
                .call(d3.axisBottom(xScale));
            
            chart.append('g')
                .call(d3.axisLeft(yScale))
            
            chart.append('text')
                .style('font-size', '14px')
                .style('text-anchor', 'middle')
                .attr('x', height / -2)
                .attr('y', -50)
                .attr('transform', 'rotate(-90)')
                .text('Annual Income')
            
            chart.append('text')
                .style('font-size', '14px')
                .style('text-anchor', 'middle')
                .attr('x', width /2)
                .attr('y', height + 50)
                .text('Interest Rate')
        })
    }
    
    render() {
        return (
            <div className="container">
                <svg className="chart"></svg>
            </div>
        )
    }
}

export default DChart;