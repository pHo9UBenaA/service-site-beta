import { useLayoutEffect, useState } from 'react';

export function useDarkMode() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useLayoutEffect(() => {
		const storedPreference = localStorage.getItem('darkMode');
		const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

		const darkModePreference = storedPreference !== null
			? storedPreference === 'dark'
			: prefersDarkScheme;

		setIsDarkMode(darkModePreference);
		document.documentElement.classList.toggle('dark', darkModePreference);
	}, []);

	const toggleDarkMode = () => {
		const newMode = !isDarkMode;
		setIsDarkMode(newMode);
		localStorage.setItem('darkMode', newMode ? 'dark' : 'light');
		document.documentElement.classList.toggle('dark', newMode);
	};

	return { isDarkMode, toggleDarkMode };
}
