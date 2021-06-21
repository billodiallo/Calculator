import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import Quote from './components/Quote';
import Navbar from './components/Navbar';

const Routes = () => (
    <BrowserRouter>
    <Navbar/>
    <Switch>
        <Route path= "/calculator" component={App}></Route>
        <Route  path = "/quote" component = {Quote}> </Route>
        <Route path = "/" component = {Home} ></Route>
    </Switch>
    </BrowserRouter>

);

export default Routes;

