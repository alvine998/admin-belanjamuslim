import React from 'react'
import { CreditCardIcon, CubeIcon, HomeIcon, TicketIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'

export default function Sidebar() {
    const router = useRouter();
    let navigations: any[] = [
        {
            name: "Beranda",
            href: "/main/dashboard",
            current: router.pathname?.includes("/main/dashboard"),
            icon: <HomeIcon className='w-6' />
        },
        {
            name: "Produk",
            href: "/main/product",
            current: router.pathname?.includes("/main/product"),
            icon: <CubeIcon className='w-6' />
        },
        {
            name: "Reward",
            href: "/main/reward",
            current: router.pathname?.includes("/main/reward"),
            icon: <TicketIcon className='w-6' />
        },
        {
            name: "Pembayaran",
            href: "/main/payment",
            current: router.pathname?.includes("/main/payment"),
            icon: <CreditCardIcon className='w-6' />
        },
        {
            name: "Pengguna",
            href: "/main/user",
            current: router.pathname?.includes("/main/user"),
            icon: <UsersIcon className='w-6' />
        },
        {
            name: "Admin",
            href: "/main/admin",
            current: router.pathname?.includes("/main/admin"),
            icon: <UserCircleIcon className='w-6' />
        },
    ]
    return (
        <div className='bg-white'>
            <div className=''>
                {
                    navigations?.map((v: any) => (
                        <button
                            onClick={() => {
                                router.push(v?.href)
                            }}
                            className={`${v?.current ? "bg-blue-500 text-white" : "hover:bg-blue-500 text-black hover:text-white"} w-full text-left p-2  duration-300 transition-colors flex items-center gap-2 mt-1`}
                        >
                            {v?.icon} {v?.name}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}
