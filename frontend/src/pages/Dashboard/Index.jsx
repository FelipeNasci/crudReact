import React, { useState, useEffect, Component } from 'react';

import './style.css'

import CreateUsers from '../../components/Users/createUsers/Index'
import ListUsers from '../../components/Users/listUsers/Index';

const Dashboard = props => {

    return (
        <div className="create-user">

            <CreateUsers />
            <ListUsers />

        </div>
    );

}
export default Dashboard;