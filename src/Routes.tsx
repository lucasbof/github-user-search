import Header from 'core/components/Header';
import Home from 'pages/Home';
import UserSearch from 'pages/UserSearch';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const Routes = () => (
   <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/search">
                <UserSearch />
            </Route>
        </Switch>
   </BrowserRouter> 
);

export default Routes;