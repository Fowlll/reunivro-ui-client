import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

let UserContext = createContext();

let UserProvider = ({ children }) => {
    const [token, setToken] = useState("test");

    
    

    return(
        
        <UserContext.Provider value={token}>

            { children }

        </UserContext.Provider>

    )

}

export { UserContext, UserProvider };