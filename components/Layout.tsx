import React from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Head from 'next/head'

export default function Layout({ children, title }: any) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <div>
                <Topbar />
                <div className='flex'>
                    <div className='w-1/6'>
                        <Sidebar />
                    </div>
                    <div className='w-full py-3 px-7'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
