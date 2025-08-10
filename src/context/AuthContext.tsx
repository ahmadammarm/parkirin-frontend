import { createContext, Dispatch, FC, ReactNode, SetStateAction, useEffect, useState } from "react";
import Cookies from "js-cookie"

interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!Cookies.get("token"));

    useEffect(() => {
        const handleChangeToken = () => {
            setIsAuthenticated(!!Cookies.get("token"));
        };

        window.addEventListener("storage", handleChangeToken);

        return () => {
            window.removeEventListener("storage", handleChangeToken);
        };
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}