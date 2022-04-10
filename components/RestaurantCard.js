import Router from 'next/router';
import React from 'react';

const RestaurantCard = (props) => {

    const handleClick = () =>{

        if(!props.open){
            alert(props.title + " n'est pas ouvert pour le moment");
            return;
        }

        Router.push('/restaurant/' + props.title);

    }

    return (
        <div onClick={handleClick} className="relative bg-white w-full h-min pb-8 pt-3 px-4">

            { (!props.open) && <div className="bg-black opacity-60 absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <p className="text-3xl text-white text-center font-semibold">Fermé</p>
            </div> }
            
            <div className="w-full h-44 bg-cover rounded overflow-hidden">
                <img className="w-full h-full" src={props.cover} />
            </div>

            <h3 className="text-lg font-semibold text-left text-black pt-2">{props.title}</h3>

            <p className="text-sm text-left">Frais de livraison: 2.99€ • 20-30 min</p>

        </div>
    );
};

export default RestaurantCard;