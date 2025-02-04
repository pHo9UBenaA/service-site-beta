import { Fragment } from 'react/jsx-runtime';
import { QualificationCard } from 'src/components/QualificationCard';
import { Section } from 'src/components/Section';
import { CardDescription, CardTitle } from 'src/components/ui/card';
import { cn } from 'src/lib/utils';

function QualificationTitle({
	title,
	subTitle,
}: { title: string; subTitle?: string }) {
	return (
		<Fragment>
			<CardTitle>{title}</CardTitle>
			{subTitle && <CardDescription>{subTitle}</CardDescription>}
		</Fragment>
	);
}

function QualificationImage({
	src,
	alt,
	className,
}: { src: string; alt: string; className?: string }) {
	return (
		<img
			loading='lazy'
			src={src || '/placeholder.svg'}
			alt={alt}
			width={0}
			height={0}
			className={cn('h-auto w-full bg-black dark:brightness-80', className)}
		/>
	);
}

function QualificationDescription({ description }: { description: string }) {
	return <CardDescription>{description}</CardDescription>;
}

export default function Qualifications() {
	const courses = [
		{
			title: '一等資格（国家資格）',
			subTitle: '国家資格試験時に実地試験免除',
			description: `
                レベル4飛行（目視外飛行、補助者無飛行、有人地帯で飛行させる）に該当する飛行が可能。国家試験時に実地試験免除。
                ※国家資格によりレベル3飛行までの国土交通省への申請が不要となります（機体認証されている機体に限る）
            `,
			imageSrc:
				'https://ds-chiba-tbt.jp/wp-content/uploads/%E7%84%A1%E4%BA%BA%E8%88%AA%E7%A9%BA%E6%A9%9F%E6%93%8D%E7%B8%A6%E8%80%85%E6%8A%80%E8%83%BD%E8%A8%BC%E6%98%8E%E6%9B%B8.png',
		},
		{
			title: '二等資格（国家資格）',
			subTitle: '国家資格試験時に実地試験免除',
			description: `
                人口集中地区（DID）・夜間飛行・人・物件30ｍ未満・目視外飛行の許可・承認が不要。空港周辺・高度150ｍ以上・イベント上空・危険物輸送・物件投下・一定の重量以上は許可、承認が必要ですが、審査が一部省略されます。国家試験時に実地試験免除。
                ※国家資格によりレベル3飛行までの国土交通省への申請が不要となります（機体認証されている機体に限る）
            `,
			imageSrc:
				'https://ds-chiba-tbt.jp/wp-content/uploads/%E7%84%A1%E4%BA%BA%E8%88%AA%E7%A9%BA%E6%A9%9F%E6%93%8D%E7%B8%A6%E8%80%85%E6%8A%80%E8%83%BD%E8%A8%BC%E6%98%8E%E6%9B%B8.png',
		},
		{
			title: 'JUIDA・JUAVAC（民間資格）',
			description: `
                人口集中地区（DID）・夜間飛行・人・物件30ｍ未満・目視外飛行の許可・承認が必要。
                空港周辺・高度151ｍ以上・イベント上空・危険物輸送・物件投下・一定の重量以上は許可、承認が必要ですが、審査が一部省略されます。
            `,
			imageSrc:
				'https://ds-chiba-tbt.jp/wp-content/uploads/%E7%84%A1%E4%BA%BA%E8%88%AA%E7%A9%BA%E6%A9%9F%E6%93%8D%E7%B8%A6%E8%80%85%E6%8A%80%E8%83%BD%E8%A8%BC%E6%98%8E%E6%9B%B8.png',
		},
	];

	return (
		<Section title='COURSES'>
			<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
				{courses.map((course, index) =>
					courses.length - 1 !== index ? (
						<QualificationCard
							headerSlot={
								<QualificationTitle
									title={course.title}
									subTitle={course.subTitle}
								/>
							}
							imageSlot={
								<QualificationImage src={course.imageSrc} alt={course.title} />
							}
							descriptionSlot={
								<QualificationDescription description={course.description} />
							}
							key={course.title}
						/>
					) : (
						<div className='md:col-span-2' key={course.title}>
							<QualificationCard
								headerSlot={<QualificationTitle title={course.title} />}
								imageSlot={
									<div className='flex flex-col gap-4 md:flex-row'>
										<QualificationImage
											src={course.imageSrc}
											alt={`${course.title} 1`}
											className='md:w-1/2'
										/>
										<QualificationImage
											src={course.imageSrc}
											alt={`${course.title} 2`}
											className='md:w-1/2'
										/>
									</div>
								}
								descriptionSlot={
									<QualificationDescription description={course.description} />
								}
							/>
						</div>
					),
				)}
			</div>
		</Section>
	);
}
