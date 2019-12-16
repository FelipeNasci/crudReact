import React, { useEffect, useState } from 'react'

import './style.css'

import api from '../../../services/api'

const DetailUser = (props) => {


    const [user, setUser] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {

        const { id } = props.match.params;

        const response = await api.get("/user/read/" + id);
        setUser(response.data.user);
        console.log(response.data.user);

    }

    const handleButtonBack = () => {
        props.history.push('/')
    }

    return (

        <div className="details-user">

            <div id="container">
                <span> <h1>DetailS</h1> </span>

                <article>
                    <h2> Name: {user.name} </h2>
                    <p> Email: {user.email} </p>
                </article>

            </div>
            <div id="button-back" onClick={handleButtonBack}> Voltar </div>

        </div>
    )
}
export default DetailUser;  