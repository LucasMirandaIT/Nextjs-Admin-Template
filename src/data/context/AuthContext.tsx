import User from "@/model/User";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

import firebase from "../../firebase/config";

import Cookies from 'js-cookie';

interface IAuthContext {
    user?: User,
    loading?: boolean;
    login: (email, password) => Promise<void>,
    signUp: (email, password) => Promise<void>,
    loginGoogle?: () => Promise<void>,
    logout?: () => Promise<void>,
}

const AuthContext = createContext<IAuthContext>({});

async function normalizedUser(firebaseUser: firebase.User): Promise<User> {
    const token = await firebaseUser.getIdToken()

    return {
        uid: firebaseUser.uid,
        name: firebaseUser.displayName ?? '',
        email: firebaseUser.email ?? '',
        token,
        provider: firebaseUser.providerData[0]?.providerId ?? 'firebase',
        imageURL: firebaseUser.photoURL ?? ''
    };
}

export function AuthProvider({ children }: { children: any }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | undefined>();
    const route = useRouter();

    const configureSession = async (firebaseUser) => {
        if (firebaseUser?.email) {
            const user = await normalizedUser(firebaseUser);
            setUser(user);
            manageCookie(true);
            setLoading(false);
        } else {
            setUser(null);
            manageCookie(false);
            setLoading(false);
        }
    };

    const login = async (email: string, password: string) => {
        try {
            setLoading(true);
            const response = await firebase.auth().signInWithEmailAndPassword(email, password);

            configureSession(response.user);
            route.push('/');
        } catch {
            console.error('Erro');
        } finally {
            setLoading(false);
        }
    };

    const signUp = async (email: string, password: string) => {
        try {
            setLoading(true);
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password);

            configureSession(response.user);
            route.push('/');
        } catch {
            console.error('Erro');
        } finally {
            setLoading(false);
        }
    };

    const loginGoogle = async () => {
        try {
            setLoading(true);
            const response = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            );

            if (response.user?.email) {
                // const user = await normalizedUser(response.user);

                configureSession(response.user);
                route.push('/');
            }
        } catch {
            console.error('Erro');
        } finally {
            setLoading(false);
        }
    }

    const manageCookie = (logged: boolean) => {
        if (logged) {
            Cookies.set('admin-template-auth', logged, {
                expires: 7 // Days qtty to expire
            })
        } else {
            Cookies.remove('admin-template-auth')
        }
    };

    const logout = async () => {
        try {
            setLoading(true);
            await firebase.auth().signOut();
            await configureSession(null);
            route.push('/login')
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (Cookies.get('admin-template-auth')) {
            const cancelPromise = firebase.auth().onIdTokenChanged(configureSession);
            return () => cancelPromise();
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, login, signUp, loginGoogle, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;