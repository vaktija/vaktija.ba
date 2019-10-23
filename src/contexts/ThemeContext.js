import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        automaticTheme: true
    }

    initTheme = (theme) => {
        console.log("hajde ba init", theme);

        if (theme === 'dark') {
            this.setState({ theme: 'dark' });
            document.body.classList.remove('light');
            document.body.classList.add('dark');

        } else if (theme === 'light') {
            this.setState({ theme: 'light' });
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        }
    }

    toggleTheme = (theme) => {

        console.log("hajde ba toggle", theme);

        if (theme === 'dark') {
            this.setState({ theme: 'dark', automaticTheme: false });
            document.body.classList.remove('light');
            document.body.classList.add('dark');

        } else if (theme === 'light') {
            this.setState({ theme: 'light', automaticTheme: false });
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        }
    }

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme, initTheme: this.initTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;
