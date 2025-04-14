import React, { createContext, useRef, useState } from 'react';
import { IUser } from '../types/types';

interface IUserContext {
    account: IUser,
    changeAccount: (account: IUser) => void
}

const UserContext = createContext<IUserContext>({} as IUserContext);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [account, setAccount] = useState<IUser>({} as IUser);

    const changeAccount = (account: IUser) => {
        setAccount(account);
    };

    return (
        <UserContext.Provider value={{ account, changeAccount }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContextProvider, UserContext }