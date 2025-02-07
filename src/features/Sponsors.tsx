import astroLogo from 'src/assets/astro.svg';
import ImageBase from 'src/components/ImageBase';
import { Section } from 'src/components/Section';

import { cn } from 'src/lib/utils';
import { Gap } from 'src/styles/constant';

export default function Sponsors() {
	const sponsorCount = 10;

	return (
		<Section title='SPONSORS'>
			<div
				className={cn(
					Gap['7_5-12_5'],
					'grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] place-items-center',
				)}
			>
				{Array.from({ length: sponsorCount }).map((_, index) => (
					<ImageBase
						key={`sponsor-${index + 1}`}
						src={astroLogo.src}
						alt={`sponsor-${index + 1}`}
						className='max-h-16 object-contain'
					/>
				))}
			</div>
		</Section>
	);
}
