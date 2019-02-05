import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import DChart from './DChart';
import Chart from './Chart';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={DChart} />
                        <Route exact path="/chart" component={Chart}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
