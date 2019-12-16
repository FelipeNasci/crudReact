//Botão para deletar usuário

import React, { Component, useEffect } from 'react'

import { Redirect } from 'react-router-dom';

import api from '../../../services/api'
import Dashboard from '../../../pages/Dashboard/Index';

const DeleteUser = (props) => {

        useEffect(() => {

            function f(){
                alert('ola mundo cruel')   
            }
            f();
            //props.history.push('/')
        }, [])
     

    const renderRedirect = () => {
        return (<Redirect to="/" />)
    }

    const deleteUser = async () => {
        //const { id } = props.match.params;
       // await api.delete("/user/delete/" + id);
    }


    return (
        <div>
            <h1>{deleteUser}</h1>
        </div>
    )

}

export default DeleteUser;