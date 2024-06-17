'use client'

import { useSession } from '@/contexts/session'

export default function Counter() {
    const { formattedMinutes, formattedSeconds } = useSession()

    return (
        <span className="text-[10rem] text-stone-800 font-mono dark:text-white font-bold">
            {formattedMinutes}:{formattedSeconds}
        </span>
    )
}