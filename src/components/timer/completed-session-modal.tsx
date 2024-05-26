'use client'

import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import CompletedSessionForm from './completed-session-form'

import { LuTrophy, LuX } from 'react-icons/lu'
import Image from 'next/image'

interface CompletedSessionModalProps {
    onClick: () => void
}

export default function CompletedSessionModal({ onClick }: CompletedSessionModalProps) {
    const [isCompletedSessionModalOpen, setIsCompletedSessionModalOpen] = useState(false)

    function openCompletedSessionModal() {
        if(isCompletedSessionModalOpen === false) {
            setIsCompletedSessionModalOpen(true)
        } else {
            setIsCompletedSessionModalOpen(false)
        }
    }

    return (
        <Dialog.Root
            open={isCompletedSessionModalOpen}
            onOpenChange={openCompletedSessionModal}
            data-set={isCompletedSessionModalOpen === true ? 'open' : 'closed'}>
            <Dialog.Trigger asChild>
                <button
                    type="button"
                    className="
                        button-timer bg-emerald-500
                        border-emerald-500 hover:text-emerald-500
                        hover:bg-emerald-200/50 focus-visible:bg-emerald-200/50
                        focus-visible:text-emerald-500">
                    Sessão Concluída
                    <LuTrophy size={18} />
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="
                    bg-stone-950/25 fixed inset-0
                    data-[state=open]:animate-overlayShow
                    data-[state=closed]:animate-overlayHide" />
                <Dialog.Content className="
                    fixed top-[50%] left-[50%]
                    translate-x-[-50%] translate-y-[-50%]
                    flex gap-12
                    p-12 bg-stone-50
                    border-2 border-stone-200 rounded-md
                    data-[state=open]:animate-contentShow
                    data-[state=closed]:animate-contentHide">
                    <Dialog.Close asChild>
                        <button
                            type="button"
                            title="Fechar Formulário"
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

                    <section className="w-96 flex flex-col gap-4 items-center justify-center">
                        <figure className="a">
                            <Image
                                width={240} height={240} quality={100}
                                src="/meditation.svg" alt="Mulher em posição meditativa"
                                className="w-60" />
                        </figure>

                        <div className="flex">
                            <strong className="text-2xl text-stone-800 font-bold text-center">
                                Sua sessão durou:
                                <span className="text-blue-500 font-medium">
                                    &nbsp;2&nbsp;minutos
                                </span>

                            </strong>
                        </div>
                    </section>

                    <div className="flex w-[2px] bg-stone-200" />

                    <CompletedSessionForm />
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}