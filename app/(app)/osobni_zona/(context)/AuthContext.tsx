"use client"
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import PocketBase from 'pocketbase';

interface User {
    id: string;
    email: string | undefined;
    category: string | undefined;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const pb = new PocketBase('https://admin.autoskolatest.cz');

    useEffect(() => {
        if (!pb.authStore.isValid) {
            console.log("user is not logged in ");
            setUser(null);
            setLoading(false);
        } else {
            setUser({
                // @ts-ignore
                id: pb.authStore.model?.id,
                email: pb.authStore.model?.email,
                category: pb.authStore.model?.category
            });
            setLoading(false);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
