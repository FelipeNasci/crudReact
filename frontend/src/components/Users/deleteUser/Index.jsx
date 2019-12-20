//Botão para deletar usuário

import React, { useEffect } from 'react'

//import api from '../../../services/api'

const DeleteUser = (props) => {

    useEffect(() => {

        function f() {
            alert('ola mundo cruel')
        }
        f();
        //props.history.push('/')
    }, [])


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