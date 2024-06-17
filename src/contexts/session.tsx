'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { formatDistanceToNow, differenceInMinutes } from 'date-fns'

interface SessionContextProps {
    isTimerRunning: boolean,
    formattedMinutes: string,
    formattedSeconds: string,
    activeSession: ActiveSession | null,
    isCompletedSessionModalOpen: boolean,
    toggleCompletedSessionModal: () => void,
    startTimer: () => void,
    finishTimer: () => void,
    resetTimer: () => void
}

interface SessionProviderProps {
    children: ReactNode
}

interface ActiveSession {
    id: string,
    startDate: Date,
    duration?: number
}

interface FinishedSession {
    id: string,
    title: string,
    description?: string,
    startDate: Date
}

export const SessionContext = createContext({} as SessionContextProps)

export function SessionProvider({ children }: SessionProviderProps) {
    const [isCompletedSessionModalOpen, setIsCompletedSessionModalOpen] = useState(false)

    const [isTimerRunning, setTimerRunning] = useState(false)
    const [time, setTime] = useState(0)
    const [activeSession, setActiveSession] = useState<ActiveSession | null>(null)

    const [sessions, setSessions] = useState<FinishedSession[]>([])

    const formattedMinutes = formatTimeUnit(getMinutes(time))
    const formattedSeconds = formatTimeUnit(getSeconds(time))

    function toggleCompletedSessionModal() {
        if(isCompletedSessionModalOpen === false) {
            setIsCompletedSessionModalOpen(true)
        } else {
            setIsCompletedSessionModalOpen(false)
            finishTimer()
        }
    }

    function startTimer() {
        setTimerRunning(true)

        const newSession: ActiveSession = {
            id: String(new Date().getTime()),
            startDate: new Date()
        }

        setActiveSession(newSession)
    }

    function finishTimer() {
        setTimerRunning(false)
        setTime(0)

        if(activeSession) {
            const newSession: ActiveSession = {
                ...activeSession,
                duration: new Date().getTime()
            }

            console.log(differenceInMinutes(newSession.duration!, name))
        }
    }

    function resetTimer() {
        setTimerRunning(false)
        setTime(0)
    }

    function getMinutes(seconds: number) {
        return Math.floor(seconds / 60)
    }

      function getSeconds(seconds: number) {
        return seconds % 60
    }

      function formatTimeUnit(unit: number) {
        return String(unit).padStart(2, '0')
    }

    useEffect(() => {
        let interval: number

        if(isTimerRunning) {
            interval = window.setInterval(() => {
                setTime(prevTime => prevTime + 1)

                if(!isTimerRunning && time !== 0) {
                    clearInterval(interval)
                }
            }, 1000)
        }

        return () => clearInterval(interval)
    }, [isTimerRunning, time])

    return (
        <SessionContext.Provider value={{
            isTimerRunning,
            activeSession,
            formattedMinutes,
            formattedSeconds,
            isCompletedSessionModalOpen,
            toggleCompletedSessionModal,
            startTimer,
            finishTimer,
            resetTimer
        }}>
            {children}
        </SessionContext.Provider>
    )
}

export const useSession = () => useContext(SessionContext)