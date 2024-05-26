'use client'

import { useState } from 'react'

import { LuArrowRight } from 'react-icons/lu'

export default function CompletedSessionForm() {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const isFormEmpty = text.length === 0 || title.length === 0 ? true : false

    return (
        <form
            className="w-[30rem] flex flex-col gap-2">
            <strong
                className="text-2xl text-stone-800 font-bold">
                Anote como foi sua sessão!
            </strong>

            <input
                type="text"
                name="title"
                id="title"
                placeholder="Título para sua sessão"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="
                    mt-4 p-2 bg-stone-200/50
                    text-base text-stone-800 font-medium placeholder:text-stone-500
                    border-2 border-stone-200 rounded-md
                    transition-colors focus:outline-none
                    focus-visible:border-blue-500" />

            <textarea
                name="textarea"
                id="textarea"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Descreva seus pensamentos relevantes aqui"
                className="
                    h-80 p-2 bg-stone-200/50
                    text-base text-stone-700 placeholder:text-stone-400
                    border-2 border-stone-200 rounded-md
                    resize-none
                    transition-colors focus:outline-none
                    focus-visible:border-blue-500" />

            <button
                type="submit"
                data-set={isFormEmpty}
                disabled={isFormEmpty}
                className="
                    flex gap-1 items-center justify-center
                    w-full py-4 bg-stone-200/50
                    text-lg text-stone-700 font-medium
                    border-2 border-stone-200 rounded-md
                    transition-colors enabled:hover:bg-blue-100/50
                    enabled:hover:text-blue-500 enabled:hover:border-blue-500
                    enabled:focus:outline-none enabled:focus-visible:bg-blue-100/50
                    enabled:focus-visible:text-blue-500 enabled:focus-visible:border-blue-500
                    data-[set=true]:opacity-75 data-[set=true]:cursor-not-allowed">
                Enviar
                <LuArrowRight />
            </button>
        </form>
    )
}