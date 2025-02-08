import type { PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

import useScrollDirection from 'src/hooks/useScrollDirection';

import { cn } from 'src/lib/utils';
import { Animation, Gap, Padding, TextNeutral } from 'src/styles/constant';

export function Section({
	title,
	children,
}: PropsWithChildren<{ title: string }>) {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});

	const scrollDirection = useScrollDirection();

	const mdSlideInAnimation =
		scrollDirection === 'down'
			? Animation.mdSlideInFromBottom_800
			: Animation.mdSlideInFromTop_800;

	return (
		<section
			ref={ref}
			className={cn(
				Gap['7_5-12_5'],
				Padding.x['7-13-20'],
				inView
					? `${Animation.slideInFromLeft_800} ${mdSlideInAnimation}`
					: 'opacity-0',
				'grid grid-cols-1',
			)}
		>
			<h2
				className={cn(TextNeutral[700], 'tracking-wide')}
			>{`( ${title} )`}</h2>
			{children}
		</section>
	);
}
