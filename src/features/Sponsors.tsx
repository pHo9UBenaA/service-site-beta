import astroLogo from 'src/assets/astro.svg';
import { Section } from 'src/components/Section';

export default function Sponsors() {
	return (
		<Section title='SPONSORS'>
			<div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 place-items-center gap-10 min-h-18 h-auto w-auto'>
				{Array.from({ length: 10 }).map((_, index) => (
					<img
						key={`sponsor-${index + 1}`}
						loading='lazy'
						src={astroLogo.src}
						alt={`sponsor-${index + 1}`}
						className='h-full w-auto dark:brightness-80'
						width={0}
						height={0}
					/>
				))}
			</div>
		</Section>
	);
}
