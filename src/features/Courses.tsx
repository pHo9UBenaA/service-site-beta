import { CourseCard } from 'src/components/CourseCard';
import { Section } from 'src/components/Section';
import { CardDescription, CardTitle } from 'src/components/ui/card';

function CourseImage({ src, alt }: { src: string; alt: string }) {
	return (
		<div className='h-64'>
			<img
				loading='lazy'
				src={src || '/placeholder.svg'}
				alt={alt}
				width={0}
				height={0}
				className='object-cover w-full h-full dark:brightness-80'
			/>
		</div>
	);
}

function CourseTitle({ title }: { title: string }) {
	return <CardTitle>{title}</CardTitle>;
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

function CourseDescription({ description }: { description: string }) {
	return <CardDescription>{description}</CardDescription>;
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
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				{courses.map((course) => (
					<CourseCard
						imageSlot={<CourseImage src={course.imageSrc} alt={course.title} />}
						titleSlot={<CourseTitle title={course.title} />}
						tableSlot={
							<CourseTable period={course.period} price={course.price} />
						}
						descriptionSlot={
							<CourseDescription description={course.description} />
						}
						key={course.title}
					/>
				))}
			</div>
		</Section>
	);
}
