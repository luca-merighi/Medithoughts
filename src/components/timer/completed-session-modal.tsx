'use client'

import Image from 'next/image'
import { useTheme } from '@/contexts/theme'
import { useSession } from '@/contexts/session'

import * as Dialog from '@radix-ui/react-dialog'

import CompletedSessionForm from './completed-session-form'

import { LuTrophy, LuX } from 'react-icons/lu'

export default function CompletedSessionModal() {
    const { theme } = useTheme()
    const { isCompletedSessionModalOpen, toggleCompletedSessionModal } = useSession()

    return (
        <Dialog.Root
            open={isCompletedSessionModalOpen}
            onOpenChange={toggleCompletedSessionModal}
            data-set={isCompletedSessionModalOpen === true ? 'open' : 'closed'}>
            <Dialog.Trigger asChild>
                <button
                    type="button"
                    className="
                        button-timer bg-emerald-500
                        border-transparent transition-colors
                        hover:bg-emerald-400 focus-visible:bg-emerald-400
                        focus-visible:border-stone-950 dark:focus-visible:border-stone-50">
                    Sessão Concluída
                    <LuTrophy size={18} />
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="
                    bg-stone-950/50 fixed inset-0
                    data-[state=open]:animate-overlayShow
                    data-[state=closed]:animate-overlayHide
                    outline-none" />
                <Dialog.Content className={`
                    fixed top-[50%] left-[50%]
                    translate-x-[-50%] translate-y-[-50%]
                    ${theme}
                    data-[state=open]:animate-contentShow
                    data-[state=closed]:animate-contentHide`}>
                    <div className="
                        flex gap-12
                        p-12 bg-stone-50 dark:bg-stone-900
                        border-2 border-stone-200 dark:border-stone-700 rounded-md
                        transition-colors">
                        <Dialog.Close asChild>
                            <button
                                type="button"
                                title="Fechar Formulário"
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

                        <section className="w-96 flex flex-col gap-4 items-center justify-center">
                            <figure className="a">
                                <Image
                                    width={240} height={240} quality={100}
                                    src="/meditation.svg" alt="Mulher em posição meditativa"
                                    className="w-60" />
                            </figure>

                            <div className="flex">
                                <strong className="text-2xl text-stone-800 dark:text-stone-200 font-bold text-center transition-colors">
                                    Sua sessão durou:
                                    <span className="text-blue-500 font-medium">
                                        &nbsp;2&nbsp;minutos
                                    </span>

                                </strong>
                            </div>
                        </section>

                        <div className="flex w-[2px] bg-stone-200 dark:bg-stone-700 transition-colors" />

                        <CompletedSessionForm />
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}