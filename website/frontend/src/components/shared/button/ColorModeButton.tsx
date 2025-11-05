'use client';

import Moon from '@/components/shared/icons/Moon';
import Sun from '@/components/shared/icons/Sun';
import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';

const ColorModeButton = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const toggleTheme = useCallback(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }, [theme, setTheme]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            type="button"
            className="cursor-pointer transition-transform hover:scale-105"
            aria-label="toggle theme"
            onClick={toggleTheme}
        >
            {theme === 'light' ? <Sun className="text-yellow-600" /> : <Moon />}
        </button>
    );
};

export default ColorModeButton;
