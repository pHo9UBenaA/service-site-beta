import ImageBase from 'src/components/ImageBase';
import { Section } from 'src/components/Section';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from 'src/components/ui/card';

import { cn } from 'src/lib/utils';
import { Gap } from 'src/styles/constant';

function NewsImage({ src, alt }: { src: string; alt: string }) {
	return (
		<div className='h-32'>
			<ImageBase src={src} alt={alt} className='object-cover' />
		</div>
	);
}

export default function News() {
	const courses = [
		{
			key: '1',
			description:
				'初心者向けの基礎講座です。ドローンの仕組みから基本的な操縦技術まで学びます。',
			imageSrc:
				'https://64.media.tumblr.com/76e0830e214ebdef7cead2769697035e/tumblr_nsoc5ikBbb1qfirfao1_1280.jpg',
		},
		{
			key: '2',
			description:
				'美しい空撮映像を撮影するためのテクニックを学ぶ中級者向けコースです。',
			imageSrc:
				'https://64.media.tumblr.com/bd52bc6811c23836b64bbf96b64ce5d7/tumblr_nsoavu8uyV1qfirfao1_1280.jpg',
		},
		{
			key: '3',
			description:
				'測量、点検、農業など、産業分野でのドローン活用方法を学ぶ上級者向けコースです。',
			imageSrc:
				'https://64.media.tumblr.com/a4e8abfbb1a0be769bc06aa2a61eeff7/tumblr_nsoart1B4L1qfirfao1_1280.jpg',
		},
	];

	return (
		<Section title='NEWS'>
			<div className={cn(Gap['6-10'], 'grid grid-cols-1 md:grid-cols-3')}>
				{courses.map((course) => (
					<Card className='overflow-hidden' key={course.key}>
						{/* <NewsImage src={course.imageSrc} alt={course.key} /> */}
						<CardHeader>
							<ImageBase
								src={course.imageSrc}
								alt={course.key}
								className='max-h-32 object-cover'
							/>
						</CardHeader>
						<CardContent>
							<CardDescription>{course.description}</CardDescription>
						</CardContent>
					</Card>
				))}
			</div>
		</Section>
	);
}
