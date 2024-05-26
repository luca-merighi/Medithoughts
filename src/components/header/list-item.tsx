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

    // data-[set=true]:before:absolute data-[set=true]:before:bottom-0
    // data-[set=true]:before:h-1 data-[set=true]:before:w-full data-[set=true]:before:bg-blue-500
    // data-[set=true]:before:rounded-t-md text-stone-700 data-[set=true]:text-blue-500

    return (
        <li
            data-set={isLinkActive}
            className="
                relative h-full flex items-center justify-center
                transition-all group
                text-stone-700 data-[set=true]:text-blue-500">
            <Link
                href={url}
                className="
                    h-full flex items-center justify-center
                    text-lg  font-medium
                    border-2 border-transparent rounded-md
                    transition-colors group-hover:text-blue-400">
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