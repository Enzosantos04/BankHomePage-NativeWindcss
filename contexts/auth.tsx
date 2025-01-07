import { createContext, useState } from "react";

type AuthContextType= null | string;
export const AuthContenxt = createContext<AuthContextType>(null)

type Props={
    children: React.ReactNode;
 
}
export const AuthProvider = ({children}: Props) =>{

    const [data,setData] = useState("neymar")
    return(
        <AuthContenxt.Provider value={data}>
           {children}
        </AuthContenxt.Provider>
    )
}
