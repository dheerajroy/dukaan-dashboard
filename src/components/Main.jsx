import React from 'react'
import TopBar from './TopBar'
import Overview from './Overview'
import Transactions from './Transactions'

export default function Main() {
    return (
        <>
            <TopBar />
            <div className="ml-[256px] mr-[32px] mt-[96px] w-full">
                <Overview />
                <Transactions />
            </div>
        </>
    )
}
