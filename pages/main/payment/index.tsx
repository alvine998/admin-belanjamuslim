import Layout from '@/components/Layout'
import useModal from '@/components/Modal'
import { CustomTableStyle } from '@/styles/table'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

let data: any[] = [
    {
        name: "Bank BNI",
        type: "Bank",
        payment_no: "123456789",
        user_name: "Alvine Yoga P"
    }
]

export default function Payment() {
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
            name: "Nama Pembayaran",
            sortable: true,
            wrap: true,
            right: false,
            selector: (row: any) => row?.name
        },
        {
            name: "Tipe",
            sortable: true,
            wrap: true,
            right: false,
            selector: (row: any) => row?.type
        },
        {
            name: "No Rekening / ID",
            sortable: true,
            wrap: true,
            right: false,
            selector: (row: any) => row?.payment_no
        },
        {
            name: "Atas Nama",
            wrap: true,
            right: false,
            selector: (row: any) => row?.user_name
        },
        {
            name: "Aksi",
            wrap: true,
            right: false,
            selector: (row: any) => <>
                <button>
                    <PencilSquareIcon className='w-5 text-green-500' />
                </button>
                &nbsp;
                <button>
                    <TrashIcon className='w-5 text-red-500' />
                </button>
            </>
        },
    ]
    return (
        <div>
            <Layout title="Dashboard">
                <h1 className='font-semibold text-lg'>Pembayaran</h1>
                <div className='bg-white shadow-lg w-full p-4 h-auto mt-2 rounded-md'>
                    <div className='my-2 flex justify-between items-center'>
                        <div className='w-1/6'>
                            <button onClick={() => {
                                setModal({ ...modal, data: null, open: true, type: 'create' })
                            }} className='w-full bg-blue-500 h-auto p-1 text-white rounded-md hover:bg-blue-600 duration-150 transition'>
                                Tambah Data
                            </button>
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
