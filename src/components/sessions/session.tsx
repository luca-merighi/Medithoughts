'use client'

import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { LuX, LuClock, LuCalendar } from 'react-icons/lu'

interface SessionProps {
    title: string,
    sessionDuration: string,
    sessionDate: string
}

export default function Session({ title, sessionDuration, sessionDate }: SessionProps) {
    const [isSessionModalOpen, setSessionModalOpen] = useState(false)

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
                    cursor-pointer hover:bg-stone-200/50">
                    <strong className="text-lg text-stone-800 font-semibold">
                        {title}
                    </strong>

                    <div className="flex gap-3 items-center justify-center">
                        <span className="text-sm text-stone-600">
                            {sessionDuration} minutos
                        </span>

                        <time className="text-sm text-stone-600">
                            {sessionDate}
                        </time>
                    </div>
                </li>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="
                    bg-stone-950/25 fixed inset-0
                    data-[state=open]:animate-overlayShow
                    data-[state=closed]:animate-overlayHide" />
                <Dialog.Content className="
                    fixed top-[50%] left-[50%]
                    translate-x-[-50%] translate-y-[-50%]
                    w-[40rem] flex gap-12
                    p-12 bg-stone-50
                    border-2 border-stone-200 rounded-md
                    data-[state=open]:animate-contentShow
                    data-[state=closed]:animate-contentHide">
                    <Dialog.Close asChild>
                        <button
                            type="button"
                            title="Fechar Modal"
                            className="
                                absolute top-4 right-4 bg-transparent
                                p-1
                                text-xl text-stone-500
                                border-2 border-transparent rounded-md
                                transition-colors hover:bg-stone-200/50
                                focus:outline-none focus-visible:bg-stone-200/50
                                focus-visible:border-stone-400">
                            <LuX />
                        </button>
                    </Dialog.Close>

                    <header className="w-full flex flex-col gap-4">
                        <strong className="text-3xl text-stone-800 font-semibold">
                            {title}
                        </strong>

                        <div className="pb-2 flex gap-3 items-center justify-between border-b border-stone-300">
                            <div className="flex gap-2 items-center justify-center text-lg text-stone-500">
                                <LuClock />

                                <span>
                                    {sessionDuration} minutos
                                </span>
                            </div>

                            <div className="flex gap-2 items-center justify-center text-lg text-stone-500">
                                <LuCalendar />

                                <time>
                                    {sessionDate}
                                </time>
                            </div>
                        </div>
                    </header>

                    <div>

                    </div>

                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}