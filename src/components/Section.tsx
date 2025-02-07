import { cn } from 'src/lib/utils';
import { Gap, TextNeutral } from 'src/styles/constant';

export function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		// <section className='grid grid-cols-1 gap-8 px-8 md:gap-12.5 md:px-30'>
		<section className={cn(Gap.section, 'grid grid-cols-1 px-8 md:px-15 lg:px-30')}>
			<h2
				className={cn(TextNeutral[700], 'tracking-wide')}
			>{`( ${title} )`}</h2>
			{children}
		</section>
	);
}
