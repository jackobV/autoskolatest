// app/profile/page.tsx
'use client';

import { useEffect, useState } from 'react';
import PocketBase from 'pocketbase';
import { useRouter } from 'next/navigation';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {useToast} from "@/hooks/use-toast";

const pb = new PocketBase('https://pocketbase-production-5de6.up.railway.app');

// Form validation schemas
const profileFormSchema = z.object({
    name: z.string().min(2, {
        message: "Jméno musí mít alespoň 2 znaky.",
    }),
});

const passwordFormSchema = z.object({
    oldPassword: z.string().min(8, {
        message: "Heslo musí mít alespoň 8 znaků.",
    }),
    password: z.string().min(8, {
        message: "Heslo musí mít alespoň 8 znaků.",
    }),
    passwordConfirm: z.string().min(8, {
        message: "Heslo musí mít alespoň 8 znaků.",
    }),
}).refine((data) => data.password === data.passwordConfirm, {
    message: "Hesla se neshodují",
    path: ["passwordConfirm"],
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;
type PasswordFormValues = z.infer<typeof passwordFormSchema>;

export default function FormNastaveni() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState<any>(null);
    const { toast } = useToast();
    // Initialize profile form
    const profileForm = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
        defaultValues: {
            name: "",
        },
    });

    // Initialize password form
    const passwordForm = useForm<PasswordFormValues>({
        resolver: zodResolver(passwordFormSchema),
        defaultValues: {
            oldPassword: "",
            password: "",
            passwordConfirm: "",
        },
    });

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const authData = pb.authStore.model;
                if (!authData) {
                    router.push('/unauthorized');
                    return;
                }

                setUser(authData);
                profileForm.setValue('name', authData.name);
            } catch (error) {
                console.error('Error loading user data:', error);
                toast({
                    variant: "destructive",
                    title: "Chyba",
                    description: "Nepodařilo se načíst uživatelská data",
                });
            }
        };

        loadUserData();
    }, [profileForm, router]);

    const onProfileSubmit = async (data: ProfileFormValues) => {
        setIsLoading(true);
        try {
            await pb.collection('users').update(user.id, {
                name: data.name,
            });

            toast({
                title: "Profil aktualizován",
                description: "Váš profil byl úspěšně aktualizován.",
            });
        } catch (error) {
            console.error('Error updating profile:', error);
            toast({
                variant: "destructive",
                title: "Chyba",
                description: "Nepodařilo se aktualizovat profil",
            });
        }
        setIsLoading(false);
    };

    const onPasswordSubmit = async (data: PasswordFormValues) => {
        setIsLoading(true);
        try {
            await pb.collection('users').update(user.id, {
                oldPassword: data.oldPassword,
                password: data.password,
                passwordConfirm: data.passwordConfirm,
            });

            toast({
                title: "Heslo změněno",
                description: "Vaše heslo bylo úspěšně změněno.",
            });

            // Reset password form
            passwordForm.reset();
        } catch (error) {
            console.error('Error changing password:', error);
            toast({
                variant: "destructive",
                title: "Chyba",
                description: "Nepodařilo se změnit heslo. Zkontrolujte prosím současné heslo.",
            });
        }
        setIsLoading(false);
    };

    const handleBillingPortal = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/create-billing-portal-session', {
                method: 'POST',
            });
            const { url } = await response.json();
            window.location.href = url;
        } catch (error) {
            console.error('Error accessing billing portal:', error);
            toast({
                variant: "destructive",
                title: "Chyba",
                description: "Nepodařilo se přistoupit k nastavení předplatného",
            });
        }
        setIsLoading(false);
    };

    if (!user) {
        return null;
    }

    return (
        <div className="container mx-auto py-10 dark:bg-dark-tremor-background-subtle">
            <div className="max-w-2xl mx-auto space-y-8">
                <Card className="rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
                    <CardHeader>
                        <CardTitle>Nastavení profilu</CardTitle>
                        <CardDescription>
                            Spravujte své osobní údaje
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...profileForm}>
                            <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-6">
                                <FormField
                                    control={profileForm.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Jméno</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Zadejte své jméno" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" disabled={isLoading}>
                                    {isLoading ? "Ukládání..." : "Uložit změny"}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>

                <Card className="rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
                    <CardHeader>
                        <CardTitle>Změna hesla</CardTitle>
                        <CardDescription>
                            Aktualizujte své přihlašovací údaje
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...passwordForm}>
                            <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-6">
                                <FormField
                                    control={passwordForm.control}
                                    name="oldPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Současné heslo</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="Zadejte současné heslo"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={passwordForm.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nové heslo</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="Zadejte nové heslo"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={passwordForm.control}
                                    name="passwordConfirm"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Potvrzení nového hesla</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="Zadejte nové heslo znovu"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" disabled={isLoading}>
                                    {isLoading ? "Měním heslo..." : "Změnit heslo"}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>

                <Card className="rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
                    <CardHeader>
                        <CardTitle>Správa předplatného</CardTitle>
                        <CardDescription>
                            Spravujte své předplatné a fakturační údaje
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <a href={"https://billing.stripe.com/p/login/dR6aG2dVY1WdfwQ6oo"}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-block"
                        >
                            <Button
                                onClick={handleBillingPortal}
                                disabled={isLoading}
                                variant="outline"
                                className="w-full sm:w-auto"
                            >
                                {isLoading ? "Načítání..." : "Spravovat předplatné"}
                            </Button>
                        </a>

                    </CardContent>
                </Card>
            </div>
        </div>
    );
}