import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import RestaurantCard from '../components/RestaurantCard';
import Navbar from '../components/Navbar';
import Router from 'next/router';

const home = () => {

    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState({});

    const firstname = "Dawson";

    useEffect(async () =>{

        setUser(JSON.parse(localStorage.getItem('user')));

        setLoading(true);

        

        if(!localStorage.getItem('token') || !localStorage.getItem('user')){
            Router.push('/login');
        }
        

        console.log(localStorage.getItem('user'));

        setLoading(false);

    }, [])

    if(loading) return <Loader />

    return (
        <div className="bg-white w-full h-screen">

            <Navbar />
            
            <div className="flex flex-row justify-between w-full px-6 mt-8 mx-auto">

                <h1 className="text-xl text-indigo-500 font-semibold text-left">Bonjour { user.firstname }</h1>

                <FaShoppingCart size={25} color="#6366F1" />

            </div>

            {/* <div className="flex flex-col w-4/5 mx-auto my-5">
                <p className="text-sm text-left text-black">Position</p>
                <p className="text-lg text-left text-black">IUT de la Réunion</p>
            </div> */}

            {/* <div className="relative w-5/6 mx-auto mt-8 flex items-center">

                <FaSearch className="absolute left-6" size={20} color="#000000" />
                <input className="w-full pl-16 py-3 text-left border shadow-lg rounded-full" type="search" placeholder="Rechercher un plat" />

            </div> */}

            <div className="grid grid-cols-2 gap-5 h-24 w-full mx-auto px-3 mt-12">

                <div className="bg-gray-200 flex justify-center items-center rounded-lg">
                    <p className="text-md text-center text-black font-semibold">Restaurants</p>
                </div>

                <div className="bg-gray-200 flex justify-center items-center rounded-lg">
                    <p className="text-md text-center text-black font-semibold">Epicerie</p>
                </div>

            </div>


            <div className="flex flex-col w-full mt-8">

                <h2 className="text-xl text-left text-black font-bold px-4">Restaurants populaires</h2>

                <div className="grid grid-cols-1 mt-8 mb-32">

                    <RestaurantCard title="CROUS" cover={"/img/restaurants/crous.jpg"} open={true} />
                    <RestaurantCard title="O'Tacos" cover={"/img/restaurants/tacos.jpg"} open={false} />
                    <RestaurantCard title="McDonalds Saint-Pierre" cover={"/img/restaurants/mcdo.jpg"} open={true} />

                </div>

            </div>

        </div>
    );
};

export default home;