import React from 'react';
import { useState } from 'react';
import { isRegularExpressionLiteral } from 'typescript';
import Loader from '../components/Loader';
import axios from 'axios';
import config from '../config.json';
import Router from 'next/router';

const register = () => {

    
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(false);

    const handleSignin = async () =>{

        setLoading(true);

        if(!(lastname && firstname && email && password && confirm)){
            setError("Complétez tout les champs");
            setLoading(false);
            return;
        }


        if(password == confirm){

            const res = await axios.post(config.API_URL + "/user/", new URLSearchParams({
                lastname: lastname,
                firstname: firstname,
                email: email,
                password: password
            }));

            if(res.data.error){
                setError(res.data.error);
            }else{
                Router.push('/login');
            }

        }else{
            setError("Confirmez correctement votre mot de passe");
        }


        setLoading(false);

    }

    if(loading){
        return <Loader />
    }

    return (
        <div className="bg-white-500 w-full h-screen">
            
            <div className="w-3/4 mt-16 mx-auto">
                <h1 className="text-2xl text-indigo-500 text-center font-bold">Créez votre compte</h1>
                <p className="text-sm text-black text-center mt-8">Créez un compte et profitez de l'ensemmble des menus disponibles dans notre catalogue de restaurants</p>
            </div>

            { error && <p className="text-center text-md text-red-500 mt-4 font-semibold">{error}</p>}

            <form className="grid grid-cols-1 gap-5 w-3/4 mx-auto mt-12">

                <input onChange={(e) => { setLastname(e.target.value) }} value={lastname} className="text-center text-md px-8 py-3 border shadow-md rounded-full" type="text" placeholder="Nom" />
                <input onChange={(e) => { setFirstname(e.target.value) }} value={firstname} className="text-center text-md px-8 py-3 border shadow-md rounded-full" type="text" placeholder="Prénom" />
                <input onChange={(e) => { setEmail(e.target.value) }} value={email} className="text-center text-md px-8 py-3 border shadow-md rounded-full" type="email" placeholder="Adresse email" />
                <input onChange={(e) => { setPassword(e.target.value) }} value={password} className="text-center text-md px-8 py-3 border shadow-md rounded-full" type="password" placeholder="Mot de passe" />
                <input onChange={(e) => { setConfirm(e.target.value) }} value={confirm} className="text-center text-md px-8 py-3 border shadow-md rounded-full" type="password" placeholder="Confirmation du mot de passe" />
                
                
                <input onClick={handleSignin} className="bg-indigo-500 text-white text-center text-md px-8 py-4 border shadow-md rounded-full" type="input" value="Création du compte" />
                
                
            </form>

        </div>
    );
};

export default register;