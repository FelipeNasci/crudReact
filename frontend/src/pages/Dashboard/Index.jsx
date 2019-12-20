import React, { useState, useEffect, Component } from 'react';

import './style.css'

import CreateUsers from '../../components/Users/createUsers/Index'
import ListUsers from '../../components/Users/listUsers/Index';

const Dashboard = () => {

    const [update, setUpdate] = useState(0);

    const refresh = (value) => {
        setUpdate(value);
    }

    return (
        <div className="create-user">

            <CreateUsers update={refresh} />
            <ListUsers update={update} />

        </div>
    );

}
export default Dashboard;