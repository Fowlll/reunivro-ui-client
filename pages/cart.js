import React, { useState } from 'react';
import MenuItem from '../components/MenuItem';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import Router from 'next/router';
import axios from 'axios';
import config from '../config.json';

const cart = () => {

    const [cart, setCart] = useState([]);
    const [user, setUser] = useState([]);

    const handleShop = async () =>{
        setCart(JSON.parse(localStorage.getItem('cart')));
        

        const res = await axios.post(config.API_URL + "/command/", new URLSearchParams({
            email: user.email,
            cart: cart
        }));

        localStorage.setItem('cart', JSON.stringify([]));
        setCart(JSON.parse(localStorage.getItem('cart')));

        console.log(res.data);

    }

    useEffect(async () =>{

        
        setCart(JSON.parse(localStorage.getItem('cart')));
        setUser(JSON.parse(localStorage.getItem('user')));

        if(!localStorage.getItem('token') || !localStorage.getItem('user')){
            Router.push('/login');
        }

        // setUser(localStorage.getItem('user'));

        

    }, [])


    // const cart = [
    //     {title: "Un truc bon", desc: "Wep c'est bon ça"},
    //     {title: "Un truc bon", desc: "Wep c'est bon ça"},
    //     {title: "Un truc bon", desc: "Wep c'est bon ça"},
    //     {title: "Un truc bon", desc: "Wep c'est bon ça"},
    // ]

    

    return (
        <div className="bg-white w-full h-screen flex flex-col">

            <Navbar />
            
            <h1 className="text-2xl text-left text-indigo-500 font-bold px-5 mt-8">Mon panier</h1>

            <div className="grid grid-cols-1 mt-4">

                
                
                { cart.map((item) =>{
                    return <MenuItem title={item.title} desc={item.desc} />
                })}

            </div>

            {(cart.length > 0) && <button onClick={handleShop} className="bg-indigo-500 px-8 py-4 text-center text-white rounded-full w-4/5 mx-auto">Commander</button>}

        </div>
    );
};

export default cart;