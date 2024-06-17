'use client'

import { ReactNode } from 'react'

import { useTheme } from '@/contexts/theme'

import Header from '@/components/header'

interface MainLayout {
    children: ReactNode
}

export default function MainLayout({ children }: MainLayout) {
    const { theme } = useTheme()

    return (
        <div className={`${theme}`}>
            <div className="h-screen  bg-stone-50 dark:bg-stone-950 transition-colors">

            <Header />

            <main className="h-[calc(100%-80px)] w-full p-20 flex items-center justify-center">
                <div className="
                    h-full w-full p-4 max-w-5xl bg-stone-100 dark:bg-stone-900
                    flex flex-col gap-8
                    border-2 border-stone-200 dark:border-stone-700 rounded-md
                    transition-colors">
                    {children}
                </div>
            </main>
            </div>
        </div>
    )
}