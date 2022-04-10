import React from 'react';
import Router from 'next/router';

const MenuItem = (props) => {

    const randomNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);

    const handleClick = () =>{

        let cart = JSON.parse(localStorage.getItem('cart'));

        cart.push({
            title: props.title,
            desc: props.desc
        });

        localStorage.setItem('cart', JSON.stringify(cart));

        console.log(localStorage.getItem('cart'));

        Router.push('/cart');

    }

    return (
        <div onClick={props.clickable ? handleClick : ()=>{}} className="bg-white w-full h-32 px-5 flex flex-row items-center">

            <img className="rounded-lg w-32 mr-3" src={"/img/menu/" + randomNumber + ".jpg"} />

            <div className="flex flex-col">

                <p className="font-semibold text-lg text-left">{props.title}</p>
                <p className="text-sm text-left">{props.desc}</p>

            </div>
            
        </div>
    );
};

export default MenuItem;