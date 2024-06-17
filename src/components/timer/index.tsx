'use client'

import { useSession } from '@/contexts/session'

import Counter from './counter'
import CompletedSessionModal from './completed-session-modal'

import { LuPlay, LuPause } from 'react-icons/lu'

export default function Timer() {
    const { isTimerRunning, startTimer, resetTimer } = useSession()

    return (
        <div className="h-full flex flex-col gap-8 items-center justify-center">
            <Counter />

            {isTimerRunning === false ? (
                <button
                    type="button"
                    onClick={startTimer}
                    className="
                        button-timer bg-blue-500
                        border-transparent
                        hover:bg-blue-400 focus-visible:bg-blue-400
                        focus-visible:border-stone-950 dark:focus-visible:border-stone-50">
                    Iniciar Cronômetro
                    <LuPlay size={18} />
                </button>
            ) : (
                <div className="flex gap-2 items-center justify-center">
                    <button
                        type="button"
                        onClick={resetTimer}
                        className="
                            button-timer bg-red-500
                            border-transparent
                            hover:bg-red-400 focus-visible:bg-red-400
                            focus-visible:border-stone-950 dark:focus-visible:border-stone-50">
                        Zerar Cronômetro
                        <LuPause size={18} />
                    </button>

                    <CompletedSessionModal />
                </div>
            )}
        </div>
    )
}