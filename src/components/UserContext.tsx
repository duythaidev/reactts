import React, { createContext, useEffect, useState } from 'react';
import { IUser } from '../types/types';
import { refreshAccount } from '../api/api';

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
    useEffect(() => {
        // refresh()
        // console.log(account)
    }, [])

    const refresh = async () => {
        try {
            const data = await refreshAccount()
            console.log(data)
            // setAccount(data)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <UserContext.Provider value={{ account, changeAccount }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContextProvider, UserContext }