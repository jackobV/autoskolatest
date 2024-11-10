"use client"
import { Fragment, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Dialog, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon, PencilSquareIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import logo from "./logoiconlg.png"
import Image from "next/image";
import {SettingsIcon} from "lucide-react";


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Shell({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [navigation,setNavigation] = useState([
        { name: 'Osobní zóna', href: '/osobni_zona', icon: HomeIcon, current: false },
        { name: 'Test', href: '/osobni_zona/test', icon: PencilSquareIcon, current: false },
        { name: 'Nastavení', href: '/osobni_zona/nastaveni', icon: SettingsIcon, current: false },

    ])
    const pathname = usePathname()

    // Update navigation current status based on the current pathname
    useEffect(() => {
        setNavigation(prevNavigation =>
            prevNavigation.map(item => ({
                ...item,
                current: item.href === pathname
            }))
        )
    }, [pathname])

    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                            <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>

                                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                                        <div className="flex h-16 shrink-0 items-center">
                                            <Image src={logo} alt={"logo autoškola"} className="w-8 h-8" />
                                        </div>
                                        <nav className="flex flex-1 flex-col">
                                            <ul role="list" className="-mx-2 flex-1 space-y-1">
                                                {navigation.map((item) => (
                                                    <li key={item.name}>
                                                        <a
                                                            href={item.href}
                                                            className={classNames(
                                                                item.current
                                                                    ? 'bg-gray-800 text-white'
                                                                    : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                            )}
                                                        >
                                                            <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20 lg:overflow-y-auto lg:bg-gray-900 lg:pb-4">
                    <div className="flex h-16 shrink-0 items-center justify-center">
                        <Image src={logo} alt={"logo autoškola"} className="w-8 h-8" />

                    </div>
                    <nav className="mt-8">
                        <ul role="list" className="flex flex-col items-center space-y-1">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                            'group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold'
                                        )}
                                    >
                                        <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                        <span className="sr-only">{item.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
                    <button type="button" className="-m-2.5 p-2.5 text-gray-400 lg:hidden" onClick={() => setSidebarOpen(true)}>
                        <span className="sr-only">Otevřít side menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="flex-1 text-sm font-semibold leading-6 text-white">Osobní zóna</div>
                </div>

                <main className="lg:pl-20">
                    <div className="">
                        <div className="">{children}</div>
                    </div>
                </main>
            </div>
        </>
    )
}
