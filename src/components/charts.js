import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import {chartjsData as data} from '../data/mockData';

export default class Charts extends Component {
    render() {

        const options = {
            fill: false,
            responsive: true,
            scales: {
                xAxes: [{
                    type: 'time',
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: "Date",
                    },
                    time: {
                        unit: 'month'
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    },
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: "Votes",
                    }
                }]
            }
        };

        return (
            <div style={{width: '800px', height: '400px'}}>
                <Line data={data} options={options}/>
            </div>
        )
    }
}
