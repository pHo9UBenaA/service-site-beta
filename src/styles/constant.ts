// とりあえずだから場所を移動する

import { cn } from 'src/lib/utils';

const TextNeutral = {
	700: 'text-neutral-700 dark:text-neutral-300',
	800: 'text-neutral-800 dark:text-neutral-200',
	900: 'text-neutral-900 dark:text-neutral-100',
	950: 'text-neutral-950 dark:text-neutral-50',
};

const TextNeutralWithHover = {
	700: cn(
		TextNeutral[700],
		'underline hover:text-neutral-800 dark:hover:text-neutral-200',
	),
	800: cn(
		TextNeutral[800],
		'underline hover:text-neutral-900 dark:hover:text-neutral-100',
	),
};

const BorderNeutral = {
	200: 'border-neutral-200 dark:border-neutral-800',
};

/** ---------------------------------- */

const generateSpacingObject = (
	spacingObject: Record<string, number>,
	factor: number,
) => {
	return Object.fromEntries(
		Object.entries(spacingObject).map(([key, value]) => [key, value / factor]),
	);
};

const spacingToClass = (
	spacingObject: Record<string, number>,
	classPrefix: string,
) => {
	return Object.entries(spacingObject)
		.map(([key, value]) => {
			if (key === 'MOBILE') {
				return `${classPrefix}-${value}`;
			}
			return `md:${classPrefix}-${value}`;
		})
		.join(' ');
};

const mainContentGapNumber = {
	MOBILE: 15,
	DESKTOP: 25,
};

const mainContentPaddingNumber = {
	MOBILE: 10,
	DESKTOP: 20,
};

const gapSpacing = {
	mainContent: mainContentGapNumber,
	section: generateSpacingObject(mainContentGapNumber, 2),
	about: generateSpacingObject(mainContentGapNumber, 2),
	aboutLeftColumn: generateSpacingObject(mainContentGapNumber, 2.5),
};

const paddingSpacing = {
	mainContent: mainContentPaddingNumber,
	// section: generateSpacingObject(mainContentPaddingNumber, 1), // 結構例外的かも
};

const Gap = {
	mainContent: spacingToClass(gapSpacing.mainContent, 'gap'),
	section: spacingToClass(gapSpacing.section, 'gap'),
	about: spacingToClass(gapSpacing.about, 'gap'),
	aboutLeftColumn: spacingToClass(gapSpacing.aboutLeftColumn, 'gap'),
};

const Padding = {
	mainContent: spacingToClass(paddingSpacing.mainContent, 'py'),
	// section: spacingToClass(paddingSpacing.section, 'py'),  // pyでもない
};

export { TextNeutral, TextNeutralWithHover, BorderNeutral, Gap, Padding };
