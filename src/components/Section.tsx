import { cn } from 'src/lib/utils';
import { Gap, Padding, TextNeutral } from 'src/styles/constant';

export function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section
			className={cn(Gap['7_5-12_5'], Padding.x['7-13-20'], 'grid grid-cols-1')}
		>
			<h2
				className={cn(TextNeutral[700], 'tracking-wide')}
			>{`( ${title} )`}</h2>
			{children}
		</section>
	);
}
