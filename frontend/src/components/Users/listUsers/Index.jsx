//O componente lista todos os usuários contidos no database

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

import api from '../../../services/api'

const ListUsers = (props) => {

    const [users, setUsers] = useState([]);
    const [length, setLength] = useState(0);

    useEffect(() => {

        fetchUser();

    }, [length, props.update]);

    async function fetchUser() {

        const response = await api.get('/user/list');
        setUsers(response.data);
        setLength(response.data.length);

    }

    const deleteUser = async (id) => {

        await api.delete("/user/delete/" + id);
        setLength(length - 1);

    }

    const list = () => {

        return (

            <div className="list-users">

                {users.map(user => (
                    <div id="container-users" key={user.id}>

                        <article>
                            <Link to={`/users/details/${user.id}`}>
                                {user.name}
                            </Link>
                        </article>

                        <div id="button-delete" onClick={() => deleteUser(user.id)}> Delete </div>

                        {/** <Link to={`/users/delete/${user.id}`}> </Link> */}
                    </div>

                ))
                }

            </div >
        )
    }

    return (
        <div className="list-users">

            {list()}

        </div>
    )
}

export default ListUsers;