import React from 'react';
import MenuItem from '../../components/MenuItem';
import { FaArrowLeft } from 'react-icons/fa';
import Router from 'next/router';

const name = (props) => {
    return (
        <div className="bg-white w-full h-screen">

            <div onClick={() => { Router.push('/home') }} className="absolute top-5 left-5 rounded-full px-3 py-3 bg-indigo-500 flex items-center justify-center">
                <FaArrowLeft size={25} color="#FFFFFF" />
            </div>

            <div className={"bg-indigo-500 h-1/4 w-full rounded-b-3xl bg-[url('/img/restaurants/mcdo.jpg')] bg-cover"}></div>

            <h1 className="text-3xl font-semibold text-left px-3 mt-8">Menu</h1>

            <div className="grid grid-cols-1 w-full">

                <MenuItem clickable={true} title="McChicken" desc="Burger poulet, servis avec accompagnement et boissons" />
                <MenuItem clickable={true} title="Wrap Poulet" desc="Wrap poulet, sauces, servis avec frites et boissons" />
                <MenuItem clickable={true} title="Salade Mou'rad" desc="Salade de saison accompagnées de ses assortiments de SD-WAN" />
                <MenuItem clickable={true} title="Le Faucon" desc="Assietes de volailles, sauces, frites, signaux, filtres passe-bas" />

            </div>
            
        </div>
    );
};

export default name;