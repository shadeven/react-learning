import React, { Component } from 'react';
import 'react-datasheet/lib/react-datasheet.css';
import ReactDataSheet from 'react-datasheet';

export default class Application extends Component {

    state = {
        grid: [
            [
                {readOnly: true, value: ''},
                {value: 'A', readOnly: true},
                {value: 'B', readOnly: true},
                {value: 'C', readOnly: true},
                {value: 'D', readOnly: true}
            ],
            [{readOnly: true, value: 1}, {value: 1}, {value: 3}, {value: 3}, {value: 3}],
            [{readOnly: true, value: 2}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
            [{readOnly: true, value: 3}, {value: 1}, {value: 3}, {value: 3}, {value: 3}],
            [{readOnly: true, value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}]
        ]
    }

    render () {
        return (
            <ReactDataSheet
                data={this.state.grid}
                valueRenderer={(cell) => cell.value}
                onChange={(modifiedCell, colI, rowJ, value) =>
                    this.setState({
                        grid: this.state.grid.map((row) =>
                            row.map((cell) =>
                                (cell === modifiedCell) ? ({value: value}) : cell
                            )
                        )
                    })
                }
            />
        )
    }
}
