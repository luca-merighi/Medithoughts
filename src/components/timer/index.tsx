'use client'

import { useState } from 'react'

import { LuPlay, LuPause } from 'react-icons/lu'
import CompletedSessionModal from './completed-session-modal'

export default function Timer() {
    const [isTimerRunning, setTimerRunning] = useState(false)

    function startTimer() {
        setTimerRunning(true)
    }

    function finishTimer() {

    }

    function resetTimer() {
        setTimerRunning(false)
    }

    return (
        <div className="h-full flex flex-col gap-8 items-center justify-center">
            <span className="text-[10rem] text-stone-800 font-bold">
                00:00
            </span>

            {isTimerRunning === false ? (
                <button
                    type="button"
                    onClick={startTimer}
                    className="
                        button-timer bg-blue-500
                        border-blue-500 hover:text-blue-500
                        hover:bg-blue-200/50 focus-visible:bg-blue-200/50
                        focus-visible:text-blue-500">
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
                            border-red-500 hover:text-red-500
                            hover:bg-red-200/50 focus-visible:bg-red-200/50
                            focus-visible:text-red-500">
                        Zerar Cronômetro
                        <LuPause size={18} />
                    </button>

                    <CompletedSessionModal onClick={finishTimer} />
                </div>
            )}
        </div>
    )
}