import React from 'react'

import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import Dashboard from './pages/Dashboard/Index'
import DetailsUsers from './components/Users/detailUsers/index'

const Routes = () => (

    //BrowserRouter indica que utiliza as rotas através de um brouses
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route  path="/users/details/:id" component={DetailsUsers} />
            
        </Switch>
    </BrowserRouter>
)

export default Routes;