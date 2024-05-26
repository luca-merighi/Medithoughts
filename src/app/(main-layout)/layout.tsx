import { ReactNode } from 'react'

import Header from '@/components/header'

interface MainLayout {
    children: ReactNode
}

export default function MainLayout({ children }: MainLayout) {
    return (
        <div className="bg-stone-50 h-screen">
            <Header />

            <main className="h-[calc(100%-80px)] w-full p-20 flex items-center justify-center">
                <div className="
                    h-full w-full p-4 max-w-5xl bg-stone-100
                    flex flex-col gap-8
                    border-2 border-stone-200 rounded-md">
                    {children}
                </div>
            </main>
        </div>
    )
}