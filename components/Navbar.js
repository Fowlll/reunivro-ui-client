import React from 'react';
import { FaHome, FaShoppingCart, FaUser } from 'react-icons/fa';
import Router from 'next/router';

const Navbar = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-2xl grid grid-cols-3 h-20 z-50">

            <div onClick={() =>{ Router.push('/home') }} className="flex flex-col justify-center items-center">

                <FaHome size={30} color="#000000" />
                <p className="text-sm text-black text-center">Accueil</p>

            </div>

            <div onClick={() =>{ Router.push('/cart') }} className="flex flex-col justify-center items-center">

                <FaShoppingCart size={30} color="#000000" />
                <p className="text-sm text-black text-center">Panier</p>

            </div>

            <div onClick={() =>{ Router.push('/home') }} className="flex flex-col justify-center items-center">

                <FaUser size={30} color="#000000" />
                <p className="text-sm text-black text-center">Compte</p>

            </div>
            
        </div>
    );
};

export default Navbar;