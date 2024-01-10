import Layout from '@/components/Layout'
import useModal from '@/components/Modal'
import { CustomTableStyle } from '@/styles/table'
import { CheckCircleIcon, PencilSquareIcon, TrashIcon, XCircleIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

let data: any[] = [
    {
        name: "alvin",
        phone: "085703049632",
        email: "alvine@gmail.com",
        address: "Jl. Batununggal RT.04 RW.04",
        seller: 1
    }
]

export default function User() {
    const [modal, setModal] = useModal()
    const [loading, setLoading] = useState<boolean>(true)
    const [rows, setRows] = useState<any[]>([])

    useEffect(() => {
        let timeout = setTimeout(() => {
            setRows(data)
            setLoading(false)
        }, 2000);
        return () => clearTimeout(timeout)
    }, [])
    let column: any[] = [
        {
            name: "Nama",
            sortable: true,
            wrap: true,
            right: false,
            selector: (row: any) => row?.name
        },
        {
            name: "No HP",
            sortable: true,
            wrap: true,
            right: false,
            selector: (row: any) => row?.phone
        },
        {
            name: "Email",
            sortable: true,
            wrap: true,
            right: false,
            selector: (row: any) => row?.email
        },
        {
            name: "Alamat",
            wrap: true,
            right: false,
            selector: (row: any) => row?.address
        },
        {
            name: "Penjual",
            wrap: true,
            right: false,
            selector: (row: any) => row?.seller == 1 ? <CheckCircleIcon className='text-green-500 w-5' /> : <XCircleIcon className='text-red-500 w-5' />
        },
        {
            name: "Aksi",
            wrap: true,
            right: false,
            selector: (row: any) => <>
                <button>
                    <PencilSquareIcon className='w-5 text-green-500' />
                </button>
            </>
        },
    ]
    return (
        <div>
            <Layout title="Dashboard">
                <h1 className='font-semibold text-lg'>Pengguna</h1>
                <div className='bg-white shadow-lg w-full p-4 h-auto mt-2 rounded-md'>
                    <div className='my-2 flex justify-between items-center'>
                        <div className='w-1/6'>
                            {/* <button onClick={() => {
                                setModal({ ...modal, data: null, open: true, type: 'create' })
                            }} className='w-full bg-blue-500 h-auto p-1 text-white rounded-md hover:bg-blue-600 duration-150 transition'>
                                Tambah Data
                            </button> */}
                        </div>
                        <div className='w-1/5'>
                            <input type="search" placeholder='Cari disini' className='w-full p-2 focus:outline-blue-300 border border-blue-200 rounded-lg' />
                        </div>
                    </div>
                    <DataTable
                        columns={column}
                        data={rows}
                        customStyles={CustomTableStyle}
                        progressPending={loading}
                        responsive
                        highlightOnHover
                        pagination
                    />
                </div>
            </Layout>
        </div>
    )
}
