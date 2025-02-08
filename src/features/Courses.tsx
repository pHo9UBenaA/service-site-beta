import ImageBase from 'src/components/ImageBase';
import { Section } from 'src/components/Section';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from 'src/components/ui/card';

import { cn } from 'src/lib/utils';
import { Gap } from 'src/styles/constant';

function CourseImage({ src, alt }: { src: string; alt: string }) {
	return (
		<div className='h-64'>
			<ImageBase src={src} alt={alt} className='object-cover' />
		</div>
	);
}

function CourseTable({ period, price }: { period: string; price: string }) {
	return (
		<table className='border-separate border-spacing-x-2'>
			<tbody>
				<tr>
					<td className='font-bold tracking-wide'>期間</td>
					<td>{period}</td>
				</tr>
				<tr>
					<td className='font-bold tracking-wide'>料金</td>
					<td>{price}</td>
				</tr>
			</tbody>
		</table>
	);
}

export default function Courses() {
	const courses = [
		{
			title: 'ドローン操縦基礎',
			period: '2025/02/02 ~ 2025/02/03',
			price: '10,000円',
			description:
				'初心者向けの基礎講座です。ドローンの仕組みから基本的な操縦技術まで学びます。'.repeat(
					5,
				),
			imageSrc:
				'https://64.media.tumblr.com/76e0830e214ebdef7cead2769697035e/tumblr_nsoc5ikBbb1qfirfao1_1280.jpg',
		},
		{
			title: '空撮テクニック',
			period: '2025/02/02 ~ 2025/02/03',
			price: '10,000円',
			description:
				'美しい空撮映像を撮影するためのテクニックを学ぶ中級者向けコースです。'.repeat(
					5,
				),
			imageSrc:
				'https://64.media.tumblr.com/bd52bc6811c23836b64bbf96b64ce5d7/tumblr_nsoavu8uyV1qfirfao1_1280.jpg',
		},
		{
			title: '産業用ドローン活用',
			period: '2025/02/02 ~ 2025/02/03',
			price: '10,000円',
			description:
				'測量、点検、農業など、産業分野でのドローン活用方法を学ぶ上級者向けコースです。'.repeat(
					5,
				),
			imageSrc:
				'https://64.media.tumblr.com/a4e8abfbb1a0be769bc06aa2a61eeff7/tumblr_nsoart1B4L1qfirfao1_1280.jpg',
		},
	];

	return (
		<Section title='COURSES'>
			<div className={cn(Gap['7_5-12_5'], 'grid grid-cols-1 md:grid-cols-2')}>
				{courses.map((course) => (
					<Card className='overflow-hidden' key={course.title}>
						<CourseImage src={course.imageSrc} alt={course.title} />
						<CardHeader>
							<CardTitle>{course.title}</CardTitle>
						</CardHeader>
						<CardContent>
							<CourseTable period={course.period} price={course.price} />
						</CardContent>
						<CardContent>
							<CardDescription>{course.description}</CardDescription>
						</CardContent>
					</Card>
				))}
			</div>
		</Section>
	);
}
