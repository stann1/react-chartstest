import React, { Component } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineMarkSeries, XAxis, YAxis, HorizontalGridLines, VerticalGridLines} from 'react-vis';
import data from '../data/mockData';

export class ReactVis extends Component {

    render() {
        return (
            <div style={{width: '800px', height: '400px'}}>
                <XYPlot xType="time" width={800} height={400} getX={d => new Date(d.date).getTime()} getY={d => d.vote}>
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <XAxis title="X Axis" />
                    <YAxis title="Y Axis" />
                    <LineMarkSeries
                        data={data}
                    />
                </XYPlot>
            </div>
        )
    }
}

export default ReactVis;