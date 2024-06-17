'use client'

import * as ScrollArea from '@radix-ui/react-scroll-area'

import Session from './session'

const sessions = [
    {
        id: '1',
        title: 'Título da Sessão',
        duration: '2',
        date: '22/05/2002'
    },
    {
        id: '2',
        title: 'Título da Sessão',
        duration: '4',
        date: '23/05/2002'
    },
]

export default function SessionsList() {
    return (
        <ScrollArea.Root className="
            overflow-hidden">
            <ScrollArea.Viewport className="w-full h-full">
                <ul className="
                    pr-4 flex flex-col">
                    {sessions.map(session => {
                        return (
                            <Session
                                key={session.id}
                                title={session.title}
                                sessionDuration={session.duration}
                                sessionDate={session.date} />
                        )
                    })}
                </ul>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
                orientation="vertical"
                className="
                    flex select-none touch-none p-0.5
                    transition-all
                    data-[orientation=vertical]:w-2.5
                    data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5">
                <ScrollArea.Thumb className="
                    flex-1 bg-stone-300 dark:bg-stone-700 rounded-[10px] cursor-pointer
                    relative before:content-[''] before:absolute before:top-1/2
                    before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2
                    before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]
                    transition-colors hover:bg-stone-400/50 dark:hover:bg-stone-600" />
            </ScrollArea.Scrollbar>
        </ScrollArea.Root>
    )
}