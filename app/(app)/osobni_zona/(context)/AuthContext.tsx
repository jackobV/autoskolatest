"use client"
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
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
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const pb = new PocketBase("https://pocketbase-production-5de6.up.railway.app");

    useEffect(() => {
        const initAuth = async () => {
            try {
                if (!pb.authStore.isValid) {
                    setUser(null);
                    router.push('/unauthorized');
                } else if (pb.authStore.model) {
                    setUser({
                        id: pb.authStore.model?.id,
                        email: pb.authStore.model?.email,
                        category: pb.authStore.model?.category
                    });
                }
            } catch (error) {
                console.error('Auth initialization error:', error);
                setUser(null);
                router.push('/unauthorized');
            } finally {
                setLoading(false);
            }
        };

        initAuth();
    }, [router]);

    const logout = async () => {
        try {
            pb.authStore.clear();
            setUser(null);
            router.push('/unauthorized');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    // Subscribe to auth state changes
    useEffect(() => {
        pb.authStore.onChange(() => {
            if (!pb.authStore.isValid) {
                setUser(null);
                router.push('/unauthorized');
            }
        });
    }, [router]);

    return (
        <AuthContext.Provider value={{ user, loading, setUser, logout }}>
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