import astroLogo from 'src/assets/astro.svg';
import ImageBase from 'src/components/ImageBase';
import { Section } from 'src/components/Section';

export default function Sponsors() {
	const sponsorCount = 10;

	return (
		<Section title='SPONSORS'>
			<div className='grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] place-items-center gap-10'>
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
