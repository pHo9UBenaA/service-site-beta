import { CourseCard } from 'src/components/CourseCard';
import { Section } from 'src/components/Section';

export default function Courses() {
	const courses = [
		{
			title: 'ドローン操縦基礎',
			description:
				'初心者向けの基礎講座です。ドローンの仕組みから基本的な操縦技術まで学びます。',
			imageSrc:
				'https://64.media.tumblr.com/76e0830e214ebdef7cead2769697035e/tumblr_nsoc5ikBbb1qfirfao1_1280.jpg',
		},
		{
			title: '空撮テクニック',
			description:
				'美しい空撮映像を撮影するためのテクニックを学ぶ中級者向けコースです。',
			imageSrc:
				'https://64.media.tumblr.com/bd52bc6811c23836b64bbf96b64ce5d7/tumblr_nsoavu8uyV1qfirfao1_1280.jpg',
		},
		{
			title: '産業用ドローン活用',
			description:
				'測量、点検、農業など、産業分野でのドローン活用方法を学ぶ上級者向けコースです。',
			imageSrc:
				'https://64.media.tumblr.com/a4e8abfbb1a0be769bc06aa2a61eeff7/tumblr_nsoart1B4L1qfirfao1_1280.jpg',
		},
	];

	return (
		<Section title='COURSES'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{courses.map((course) => (
					<CourseCard
						key={course.title}
						title={course.title}
						description={course.description}
						imageSrc={course.imageSrc}
					/>
				))}
			</div>
			</Section>
	);
}
