'use client'

import { useEffect } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function useTheme() {
    const [theme, setTheme] = useLocalStorage('theme','light');

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return toggleTheme;
}
