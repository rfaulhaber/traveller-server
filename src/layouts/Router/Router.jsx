import React, {Component} from "react";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from '../../reducers/index';
import CharacterCreation from '../CharacterCreation/CharacterCreation';
import {BrowserRouter, Route, Switch} from "react-router-dom";

let store = createStore(reducers);

export default class Router extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/create" component={CharacterCreation}/>
                        <Route exact path="/" render={() => (
                            <div>
                                <p>This is the main page.</p>
                                <a href="/create">Go to character creation</a>
                            </div>
                        )}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}