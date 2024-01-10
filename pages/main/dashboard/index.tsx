import Layout from '@/components/Layout'
import React from 'react'
import Chart from 'react-google-charts'

export default function Dashboard() {
    return (
        <div>
            <Layout title="Dashboard">
                <h1 className='font-semibold text-lg'>Dashboard</h1>
                <div className='bg-green-500 shadow-lg w-full p-4 h-auto mt-2 rounded-md'>
                    <h5 className='text-white'>Assalamualaikum, Selamat Datang di Web Admin BelanjaMuslim</h5>
                </div>
                <div className='flex gap-2'>
                    <div className='w-full'>
                        <Chart
                            chartType='PieChart'
                            data={
                                [
                                    ['Category', 'Value'],
                                    ['Pembersih', 50],
                                    ['Elektronik', 30]
                                ]
                            }
                            width={'100%'}
                            height={'300px'}
                            legendToggle
                        />
                    </div>
                    <div className='w-full'>
                        <Chart
                            chartType='PieChart'
                            data={
                                [
                                    ['Category', 'Value'],
                                    ['Pembersih', 50],
                                    ['Elektronik', 30]
                                ]
                            }
                            width={'100%'}
                            height={'300px'}
                            legendToggle
                        />
                    </div>
                </div>
            </Layout>
        </div>
    )
}
