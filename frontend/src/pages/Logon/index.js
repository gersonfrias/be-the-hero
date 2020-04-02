import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import '../../services/api';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Logon() {

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        
        try{
            const response = await api.post('sessions', { id });
            // Salvar esse dado para toda a aplicação pois é o usuário logado
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            // redireciona a rota profile
            history.push('/profile');
        } catch (err) {
            alert('Falha no Login, tente novamente');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={ logoImg } alt="Be The Hero" />
                <form onSubmit={ handleLogin }>
                        <h1>Faça seu Logon</h1>
                        <input 
                            placeholder="Sua ID" 
                            value={id}
                            onChange={e => setId(e.target.value)}    
                        />
                        <button className="button" type="submit">Entrar</button>
                        <Link className="back-link" to="/register">
                            <FiLogIn size={16} color="#e02041" />
                            Não tenho Cadastro
                        </Link>
                </form>
            </section>
            <img src={ heroesImg }  alt="Heroes" />
        </div>
    );
}