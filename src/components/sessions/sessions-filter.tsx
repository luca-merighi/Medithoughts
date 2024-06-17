'use client'

import { useState } from 'react'

import { LuSearch } from 'react-icons/lu'

const filters = [
    {
        id: 'newest',
        text: 'Mais Recentes'
    },
    {
        id: 'oldest',
        text: 'Mais Antigos'
    }
]

export default function SessionsFilter() {
    const [selectedFilter, setSelectedFilter] = useState('')

    function toggleSelectedFilter(filter: string) {
        if(selectedFilter === '' || selectedFilter !== filter) {
            setSelectedFilter(filter)
        } else if(selectedFilter === filter) {
            setSelectedFilter('')
        }
    }

    return (
        <div className="flex gap-2">
            {filters.map(filter => {
                return (
                    <button
                        key={filter.id}
                        type="button"
                        data-set={selectedFilter === filter.id ? 'selected' : 'not-selected'}
                        onClick={() => toggleSelectedFilter(filter.id)}
                        className="
                            px-3 bg-stone-50 dark:bg-stone-900
                            text-sm text-stone-700 dark:text-stone-300
                            border border-stone-300 dark:border-stone-700 rounded-full
                            transition-colors focus:outline-none
                            focus-visible:border-blue-300 dark:focus-visible:border-blue-300
                            hover:text-blue-300 hover:border-blue-300
                            dark:hover:text-blue-300 dark:hover:border-blue-300
                            data-[set=selected]:bg-white
                            data-[set=selected]:text-blue-400 data-[set=selected]:border-blue-400
                            dark:data-[set=selected]:text-blue-400 dark:data-[set=selected]:border-blue-400">
                        {filter.text}
                    </button>
                )
            })}

            <div className="relative flex items-center justify-center">
                <input
                    type="text"
                    placeholder="Faça sua pesquisa"
                    className="
                        w-72 py-1 px-3 bg-stone-50 dark:bg-stone-900
                        text-stone-700 dark:text-stone-300 placeholder:text-stone-500
                        border border-stone-300 dark:border-stone-700 rounded-full
                        transition-colors focus:outline-none
                        focus-visible:bg-white focus-visible:border-blue-400
                        dark:focus-visible:border-blue-400" />

                <button
                    type="submit"
                    title="Pesquisar"
                    className="
                        absolute right-4
                        bg-transparent text-stone-500
                        transition-colors hover:text-stone-600 dark:hover:text-stone-400
                        focus:outline-none focus-visible:text-stone-700 dark:focus-visible:text-stone-400">
                    <LuSearch />
                </button>
            </div>
        </div>
    )
}