import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

function ThemeContextProvider(props) {

    const [automaticTheme, setAutomaticTheme] = useState(true);
    const [theme, setTheme] = useState('light');

    const initTheme = (theme) => {
        if (theme === 'dark') {
            setTheme('dark');
            document.body.classList.remove('light');
            document.body.classList.add('dark');

        } else if (theme === 'light') {
            setTheme('light');
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        }
    }

    const toggleTheme = (theme) => {
        if (theme === 'dark') {
            setTheme('dark');
            setAutomaticTheme(false);
            document.body.classList.remove('light');
            document.body.classList.add('dark');

        } else if (theme === 'light') {
            setTheme('light');
            setAutomaticTheme(false);
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        }
    }

    return (
        <ThemeContext.Provider value={{ automaticTheme, setAutomaticTheme, toggleTheme, initTheme, theme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
