'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

interface ListItemProps {
    url: string,
    text: string
}

export default function ListItem({ url, text }: ListItemProps) {
    const router = usePathname()

    const isLinkActive = router === url ? 'true' : 'false'

    return (
        <li
            data-set={isLinkActive}
            className="
                relative h-full flex items-center justify-center
                group
                text-stone-700 dark:text-stone-200
                data-[set=true]:text-blue-500 dark:data-[set=true]:text-blue-500 data-[set=true]:pointer-events-none">
            <Link
                href={url}
                className="
                    h-full flex items-center justify-center
                    text-lg  font-medium
                    border-2 border-transparent rounded-md
                    transition-colors group-hover:text-blue-400
                    focus:outline-none focus-visible:text-blue-400">
                {text}
            </Link>

            {isLinkActive === 'true' && (
                <motion.div
                    layoutId="activeTab"
                    className="
                        absolute bottom-0
                        h-1 w-full bg-blue-500
                        rounded-t-md" />
            )}
        </li>
    )
}