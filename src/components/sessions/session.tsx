'use client'

import { useState } from 'react'
import { useTheme } from '@/contexts/theme'

import * as Dialog from '@radix-ui/react-dialog'

import { LuX, LuClock, LuCalendar } from 'react-icons/lu'

interface SessionProps {
    title: string,
    sessionDuration: string,
    sessionDate: string
}

export default function Session({ title, sessionDuration, sessionDate }: SessionProps) {
    const [isSessionModalOpen, setSessionModalOpen] = useState(false)
    const { theme } = useTheme()

    function openSessionModal() {
        if(isSessionModalOpen === false) {
            setSessionModalOpen(true)
        } else {
            setSessionModalOpen(false)
        }
    }

    return (
        <Dialog.Root
            open={isSessionModalOpen}
            onOpenChange={openSessionModal}
            data-set={isSessionModalOpen === true ? 'open' : 'closed'}>
            <Dialog.Trigger asChild>
                <li className="
                    p-2 flex items-center justify-between
                    cursor-pointer transition-colors
                    hover:bg-stone-200/50 dark:hover:bg-stone-800">
                    <strong className="text-lg text-stone-800 dark:text-stone-200 font-semibold transition-colors">
                        {title}
                    </strong>

                    <div className="flex gap-3 items-center justify-center">
                        <span className="text-sm text-stone-600 dark:text-stone-400 transition-colors">
                            {sessionDuration} minutos
                        </span>

                        <time className="text-sm text-stone-600 dark:text-stone-400 transition-colors">
                            {sessionDate}
                        </time>
                    </div>
                </li>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="
                    bg-stone-950/50 fixed inset-0
                    data-[state=open]:animate-overlayShow
                    data-[state=closed]:animate-overlayHide
                    outline-nonet" />
                <Dialog.Content className={`
                    ${theme}
                    fixed top-[50%] left-[50%]
                    translate-x-[-50%] translate-y-[-50%]
                    data-[state=open]:animate-contentShow
                    data-[state=closed]:animate-contentHide`}>
                    <div className="
                        w-[40rem] flex gap-12
                        p-12 bg-stone-50 dark:bg-stone-900
                        border-2 border-stone-200 dark:border-stone-700
                        rounded-md transition-colors">
                        <Dialog.Close asChild>
                            <button
                                type="button"
                                title="Fechar Sessão"
                                className="
                                    absolute top-4 right-4 bg-transparent
                                    p-1
                                    text-xl text-stone-500
                                    border-2 border-transparent rounded-md
                                    transition-colors hover:bg-stone-200/50 dark:hover:bg-stone-700/50
                                    focus:outline-none focus-visible:bg-stone-200/50 dark:focus-visible:bg-stone-700/50
                                    focus-visible:border-stone-400 dark:focus-visible:border-stone-700">
                                <LuX />
                            </button>
                        </Dialog.Close>

                        <header className="w-full flex flex-col gap-4">
                            <strong className="text-3xl text-stone-800 dark:text-white font-semibold transition-colors">
                                {title}
                            </strong>

                            <div className="
                                pb-2 flex gap-3 items-center justify-between
                                text-lg text-stone-500 dark:text-stone-400
                                border-b border-stone-300 dark:border-stone-700 transition-colors">
                                <div className="flex gap-2 items-center justify-center">
                                    <LuClock />

                                    <span>
                                        {sessionDuration} minutos
                                    </span>
                                </div>

                                <div className="flex gap-2 items-center justify-center">
                                    <LuCalendar />

                                    <time>
                                        {sessionDate}
                                    </time>
                                </div>
                            </div>
                        </header>

                        <div>

                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}