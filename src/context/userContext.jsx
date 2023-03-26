import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext(null);

export function UserProvider({ val, children }) {
    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={[val ? val : user, setUser]}>
            {children}
        </UserContext.Provider>
    )
}

export function UseUser() {
    return useContext(UserContext);
}