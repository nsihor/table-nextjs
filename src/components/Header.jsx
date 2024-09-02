'use client'
import useTheme from "@/hooks/useTheme";
import Btn from "@/components/Btn/Btn"

export default function Header () {
    const toggleTheme = useTheme();

    return (
        <header className='flex items-center justify-between px-4 py-3'>
            <h1 className='font-bold text-3xl'>Table</h1>
            <Btn text='Theme toggle' onClick={toggleTheme}/>
        </header>
    )
}
