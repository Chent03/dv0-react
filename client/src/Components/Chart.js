import React, { Component, Fragment } from 'react';
import axios from 'axios';
import ScatPlot from '../ui/scatPlot';
class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    async componentDidMount() {
        let res = await axios.get('/api/dvo/loan')
        let m = res.data.map(obj => {
            return {x: parseFloat(obj.IntRate), y:  parseInt(obj.AnnualInc)}
        })
        this.setState({data: m})
    }
    render() {
        return (
            <Fragment>
            <ScatPlot 
                data={this.state.data}
                label={'Anuual Income vs Interest Rate'}
            />
            </Fragment>
        )
    }
}

export default Chart;