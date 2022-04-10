import { NextPage } from 'next';
import { BiLogIn } from 'react-icons/bi';
import { MdOutlineAccountBox } from 'react-icons/md';

const index = () => {
  
  return (
    <div className="bg-white-500 sm:w-full h-screen flex flex-col">

      <div className="relative z-0 bg-indigo-500 w-full h-1/4 rounded-b-3xl shadow-2xl flex flex-col items-center">
        <div className="absolute -bottom-16 bg-white w-44 h44 px-2 py-2 z-10 rounded-[200px] mx-auto">
          <img className="w-full h-full z-10" src="/img/island.svg" />
        </div>
      </div>

      <div className="w-3/5 mx-auto mt-20">

        <h1 className="text-3xl font-bold text-center text-indigo-500 mb-8">Reunivro</h1>
        <p className="text-md text-center">Retrouvez les meilleurs plats de la réunion devant votre porte</p>

      </div>

      <div className="grid grid-cols-1 gap-5 w-3/4 mx-auto mt-16">

          <a href="/login" className="bg-indigo-500 px-8 py-4 text-white text-md text-center font-semibold rounded-full flex flex-row items-center justify-center">
            <BiLogIn className="mr-3" size={25} color="#FFFFFF" />
            Se connecter
          </a>

          <a href="/register" className="bg-gray-500 px-8 py-4 text-white text-md text-center font-semibold rounded-full flex flex-row items-center justify-center">
            <MdOutlineAccountBox className="mr-3" size={25} color="#FFFFFF" />
            Créer un compte
          </a>
          
      </div>


      
    </div>
  );
};

export default index;