import React, { useEffect } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { useState } from 'react';
import Loader from '../components/Loader';
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import Router from 'next/router';
import config from '../config.json';

const login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    
    const handleLogin = async () =>{

        setLoading(true);

        const res = await axios.post(config.API_URL + "/auth/", new URLSearchParams({
            email: email,
            password: password
        }));
        console.log(res.data.token);

        if(res.data.error){
            setError(res.data.error);
            setLoading(false);
            return;
        }

        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        localStorage.setItem('cart', JSON.stringify([]));

        console.log(localStorage.getItem('token'));

        setLoading(false);

    }

    useEffect(() =>{
        if(localStorage.getItem('token') && localStorage.getItem('user')){
            Router.push('/home');
        }
    })

    if(loading){
        return <Loader />
    }

    return (
        <div className="bg-white-500 w-full h-screen">
            
            

            <div className="w-3/4 mt-16 mx-auto">
                <h1 className="text-2xl text-indigo-500 text-center font-bold">Se connecter</h1>
                <p className="text-sm text-black text-center mt-8">Connectez vous à l'aide de votre compte reunivro pour accéder aux menus</p>
            </div>

            <form className="grid grid-cols-1 gap-5 w-3/4 mx-auto mt-12">

                {error && <p className="text-red-500 font-semibold text-md text-center">{error}</p>}

                <input onChange={(e) => { setEmail(e.target.value) }} value={email} className="text-center text-md px-8 py-3 border shadow-md rounded-full" type="email" placeholder="Ton adresse email" />
                <input onChange={(e) => { setPassword(e.target.value) }} value={password} className="text-center text-md px-8 py-3 border shadow-md rounded-full" type="password" placeholder="Ton mot de passe" />
                <input onClick={handleLogin} className="bg-indigo-500 text-white text-center text-md px-8 py-3 border shadow-md rounded-full" type="input" value="Connexion" />

                <p onClick={() => { alert("Bah tant pis, au pire refait un compte") }} className="text-sm text-indigo-300 text-center">Mot de passe oublié ?</p>

            </form>

            <div className="grid grid-cols-1 gap-5 w-3/4 mx-auto mt-12">

                <button onClick={() => { alert("Pas le temps") }} className="bg-red-500 text-white text-center text-md px-8 py-3 border shadow-md rounded-full flex flex-row items-center">
                    <FaGoogle className="mr-3" size={25} color="#FFFFFF" />
                    Connexion avec Google
                </button>

                <button onClick={() => { alert("Pas le temps") }} className="bg-blue-500 text-white text-center text-md px-8 py-3 border shadow-md rounded-full flex flex-row items-center">
                    <FaFacebook className="mr-3" size={25} color="#FFFFFF" />
                    Connexion avec Facebook
                </button>

            </div>


        </div>
    );
};

export default login;