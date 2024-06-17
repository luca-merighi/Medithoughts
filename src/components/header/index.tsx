import Image from 'next/image'

import ListItem from './list-item'
import ChangeTheme from './change-theme'

export default function Header() {
    return (
        <header className="
            w-full h-20 bg-stone-200/50 dark:bg-stone-800/50
            flex items-center justify-center
            border-b-2 border-stone-200 dark:border-stone-700
            transition-colors">
            <nav className="w-full h-full max-w-7xl flex items-center justify-between">
                <div className="flex gap-2 items-center justify-center">
                    <Image
                        width={25} height={25} quality={100}
                        src="/icon.svg" alt="Homem em posição meditativa" />
                    <h1 className="text-3xl text-blue-500 font-bold">
                        Medi
                        <span className="text-stone-900 dark:text-white transition-colors">thoughts</span>
                    </h1>
                </div>

                <ul className="h-full flex flex-1 gap-4 items-center justify-center">
                    <ListItem url="/" text="Cronômetro" />
                    <ListItem url="/meditations" text="Meditações" />
                </ul>

                <ChangeTheme />
            </nav>
        </header>
    )
}