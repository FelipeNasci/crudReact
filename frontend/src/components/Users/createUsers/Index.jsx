import React, { useState } from 'react';

import api from '../../../services/api';

import './style.css';

const CreateUser = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const buttonAdd = async (event) => {
        event.preventDefault();

        try {

            const response = await api.post('/user/store', {
                name,
                email
            })

            const {error} = response.data;
            
            if(error) alert(error);

        } catch (error) { console.log('deu ruim' + error) }
    }

    return (
        <div className="create-user">

            <div>

                <form onSubmit={buttonAdd} >

                    <div id="container-input">
                        <input
                            placeholder="Nome"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type="text"
                        />

                        <input
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type="text"
                        />
                    </div>

                    <button>+</button>

                </form>

            </div>

        </div>
    );
}
export default CreateUser;