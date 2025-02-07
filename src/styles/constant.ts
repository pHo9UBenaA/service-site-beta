// とりあえずだから場所を移動する

import { cn } from 'src/lib/utils';

const TextGray = {
	700: 'text-gray-700 dark:text-gray-300',
	800: 'text-gray-800 dark:text-gray-200',
	900: 'text-gray-900 dark:text-gray-100',
};

const TextGrayWithHover = {
	700: cn(
		TextGray[700],
		'underline hover:text-gray-800 dark:hover:text-gray-200',
	),
	800: cn(
		TextGray[800],
		'underline hover:text-gray-900 dark:hover:text-gray-100',
	),
};

const BorderGray = {
	200: 'border-gray-200 dark:border-gray-800',
};

export { TextGray, TextGrayWithHover, BorderGray };
