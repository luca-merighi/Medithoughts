import Image from 'next/image'

import ListItem from './list-item'

export default function Header() {
    return (
        <header className="
            w-full h-20 bg-stone-200/50
            flex items-center justify-center
            border-b-2 border-stone-200">
            <nav className="w-full h-full max-w-7xl flex items-center justify-between">
                <div className="flex gap-2 items-center justify-center">
                    <Image
                        width={25} height={25} quality={100}
                        src="/icon.svg" alt="Homem em posição meditativa" />
                    <h1 className="text-3xl text-blue-500 font-bold">
                        Medi
                        <span className="text-stone-900">thoughts</span>
                    </h1>
                </div>

                <ul className="h-full flex flex-1 gap-4 items-center justify-center">
                    <ListItem url="/" text="Cronômetro" />
                    <ListItem url="/meditations" text="Meditações" />
                </ul>

                {/* <figure className="w-10 h-10 rounded-full cursor-pointer">
                    <Image
                        width={100} height={100} quality={80}
                        src="https://github.com/luca-merighi.png" alt="Foto de Perfil"
                        className="rounded-full" />
                </figure> */}
            </nav>
        </header>
    )
}