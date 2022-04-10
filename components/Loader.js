import Image from 'next/image';
import React from 'react';

const Loader = () => {
    return (
        <div className="absolute top-0 left-0  z-100 bg-indigo-500 w-full h-screen flex justify-center items-center">
            
            <Image width={150} height={150} src="/img/loading.gif" />

        </div>
    );
};

export default Loader;