'use client'

import { useForm, Controller, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import Tiptap from '../tiptap'

import { LuArrowRight } from 'react-icons/lu'

const formSchema = zod.object({
    title: zod.string().min(1).max(50),
    description: zod.string().trim()
})

type FormInputs = zod.infer<typeof formSchema>

export default function CompletedSessionForm() {
    const form = useForm<FormInputs>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
            description: ''
        }
    })

    const { control, handleSubmit, watch, register } = form

    const title = watch('title')
    const isFormEmpty = !title

    function handleCreateNewSession() {

    }

    return (
        <form
            onSubmit={handleSubmit(handleCreateNewSession)}
            className="w-[30rem] flex flex-col gap-2">
            <strong
                className="text-2xl text-stone-800 font-bold dark:text-white transition-colors">
                Anote como foi sua sessão!
            </strong>

            <input
                type="text"
                {...register('title')}
                placeholder="Título para sua sessão"
                className="
                    mt-4 p-2 bg-stone-200/50 dark:bg-stone-800
                    text-base text-stone-800 dark:text-stone-100 font-medium placeholder:text-stone-500 dark:placeholder:text-stone-500
                    border-2 border-stone-200 dark:border-stone-700 rounded-md
                    transition-colors focus:outline-none
                    focus-visible:border-blue-500 dark:focus-visible:border-blue-500" />

            <FormProvider {...form}>
                <Controller
                    control={control}
                    name="description"
                    render={({ field }) => {
                        return (
                            <Tiptap
                                description={field.value}
                                onChange={field.onChange} />
                        )
                    }} />
            </FormProvider>

            {/* <textarea
                name="textarea"
                id="textarea"
                placeholder="Descreva seus pensamentos relevantes aqui"
                className="
                    h-80 p-2 bg-stone-200/50 dark:bg-stone-800
                    text-base text-stone-700 dark:text-stone-200 placeholder:text-stone-500 dark:placeholder:text-stone-500
                    border-2 border-stone-200 dark:border-stone-700 rounded-md resize-none
                    transition-colors focus:outline-none
                    focus-visible:border-blue-500
                    dark:focus-visible:border-blue-500" /> */}

            <button
                type="submit"
                data-set={isFormEmpty}
                disabled={isFormEmpty}
                className="
                    flex gap-1 items-center justify-center
                    w-full py-4 bg-stone-200/50 dark:bg-stone-800
                    text-lg text-stone-700 dark:text-stone-200 font-medium
                    border-2 border-stone-200 dark:border-stone-700 rounded-md
                    transition-colors enabled:hover:bg-blue-100/50 dark:enabled:hover:bg-stone-800
                    enabled:hover:text-blue-500 enabled:hover:border-blue-500
                    enabled:focus:outline-none enabled:focus-visible:bg-blue-100/50 dark:enabled:focus-visible:bg-stone-800
                    enabled:focus-visible:text-blue-500 enabled:focus-visible:border-blue-500
                    data-[set=true]:opacity-75 data-[set=true]:cursor-not-allowed">
                Enviar
                <LuArrowRight />
            </button>
        </form>
    )
}