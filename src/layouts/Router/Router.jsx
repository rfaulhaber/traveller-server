import React, {Component} from "react";
import CharacterCreation from '../CharacterCreation/CharacterCreation';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

// const AuthRoute = ({component, ...rest}) => (
//     <Route {...rest} render={props => (
//         User.isLoggedIn ? (
//             React.createElement(component, props)
//         ) : (
//             <Redirect to="/login"/>
//         )
//     )}/>
// );

// should this be a higher order component?
// const TemplateWrapper = ({location}) => {
//     return <Template file={location.state.file}/>
// };

export default class Router extends Component {
    render() {
        return (
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
        );
    }
}