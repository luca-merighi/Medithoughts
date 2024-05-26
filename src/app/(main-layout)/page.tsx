import React from 'react'

import Timer from '@/components/timer'

import { LuClock } from 'react-icons/lu'

export default function Home() {
    return (
        <React.Fragment>
            <header className="
                pt-2 pb-4 flex gap-2 items-center
                border-b-2 border-stone-200">
                <LuClock className="text-3xl text-blue-500" />

                <strong className="text-2xl text-stone-800 font-bold">
                    Faça uma meditação e anote seus pensamentos
                </strong>
            </header>

            <Timer />
        </React.Fragment>
    )
}