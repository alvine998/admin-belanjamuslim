import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Fragment } from 'react'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Login</title>
      </Head>
      <div className='flex justify-center items-center h-[100vh] md:px-0 px-2'>
        <div className='md:w-1/4 w-full bg-slate-200 border border-slate-300 shadow-full px-2 py-6 rounded-lg h-auto'>
          <h1 className='text-center text-2xl font-semibold'>LOGIN</h1>
          <form className='mt-4'>
            <input type="email" placeholder='Email' className='w-full p-2 focus:outline-blue-300 border border-blue-200 rounded-lg' />
            <input type="password" placeholder='Password' className='w-full p-2 focus:outline-blue-300 border border-blue-200 rounded-lg mt-2' />
            <div className='mt-4'>
              <button className='w-full bg-blue-500 h-auto p-2 text-white rounded-md hover:bg-blue-600 duration-150 transition'>
                Masuk
              </button>
            </div>
          </form>
        </div>
      </div>

    </Fragment>
  )
}
