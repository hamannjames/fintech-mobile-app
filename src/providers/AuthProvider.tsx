import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter, useSegments } from 'expo-router';
import { IUser } from '@/types';
import { AUTH_ROUTES } from "@/consts/routes";

type UserType = {
    user: IUser | null
}

const AuthContext = createContext<UserType | null>(null);

export function useAuth() {
    return useContext(AuthContext);
}

function useProtectedRoute(user: IUser | null) {
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        const inAuthGroup = segments[0] === '(auth)';

        if (!user && !inAuthGroup) {
            router.replace(AUTH_ROUTES.signup);
            //router.replace(AUTH.SANDBOX);
        } else if (user && inAuthGroup) {
            router.replace('/');
            //router.replace(MAIN.DASHBOARD)
        }
    }, [user, segments])
}

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [user, setAuth] = useState<IUser | null>(null);

    const logout = () => {
        setAuth(null);
    }

    useProtectedRoute(user);

    return (
        <AuthContext.Provider
            value={{user}}
        >
            {children}
        </AuthContext.Provider>
    )
}