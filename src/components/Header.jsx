'use client'
import useTheme from "@/hooks/useTheme";

export default function Header () {
    const toggleTheme = useTheme();

    return (
        <header className='flex items-center justify-between px-4 py-3'>
            <h1 className='font-bold text-3xl'>Table</h1>
            <button className='p-2 bg-accent text-lg text-text_light rounded-lg' onClick={toggleTheme}>Theme toggle</button>
        </header>
    )
}
