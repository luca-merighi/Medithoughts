import { useTheme } from '@/contexts/theme'

import * as Switch from '@radix-ui/react-switch'

export default function ChangeTheme() {
    const { toggleTheme } = useTheme()

    return (
        <Switch.Root
            onCheckedChange={toggleTheme}
            className="
                relative
                w-[42px] h-[25px] bg-stone-950
                cursor-pointer
                rounded-full transition-colors outline-none
                 shadow-stone-300 dark:shadow-stone-900">
            <Switch.Thumb
                className="
                    block w-[21px] h-[21px] bg-stone-100
                    rounded-full transition-all translate-x-0.5
                    will-change-transform data-[state=checked]:translate-x-[19px]
                    data-[state=checked]:bg-amber-500 shadow-stone-500" />
      </Switch.Root>
    )
}