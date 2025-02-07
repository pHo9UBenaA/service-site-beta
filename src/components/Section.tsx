import { cn } from 'src/lib/utils';
import { TextGray } from 'src/styles/constant';

export function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section className='grid grid-cols-1 gap-8 px-10 md:gap-12 md:px-15'>
			<h2 className={cn(TextGray[700], 'tracking-wide')}>{`( ${title} )`}</h2>
			{children}
		</section>
	);
}
