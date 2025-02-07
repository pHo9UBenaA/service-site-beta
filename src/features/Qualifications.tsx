import ImageBase from 'src/components/ImageBase';
import { QualificationCard } from 'src/components/QualificationCard';
import { Section } from 'src/components/Section';
import { CardDescription, CardTitle } from 'src/components/ui/card';

function QualificationTitle({
	title,
	subTitle,
}: { title: string; subTitle?: string }) {
	return (
		<>
			<CardTitle>{title}</CardTitle>
			{subTitle && <CardDescription>{subTitle}</CardDescription>}
		</>
	);
}

function QualificationImage({ src, alt }: { src: string; alt: string }) {
	return <ImageBase src={src || '/placeholder.svg'} alt={alt} />;
}

function QualificationDescription({ description }: { description: string }) {
	return <CardDescription>{description}</CardDescription>;
}

export default function Qualifications() {
	const singleColumnQualifications = [
		{
			title: '一等資格（国家資格）',
			subTitle: '国家資格試験時に実地試験免除',
			description: `
                レベル4飛行（目視外飛行、補助者無飛行、有人地帯で飛行させる）に該当する飛行が可能。国家試験時に実地試験免除。
                ※国家資格によりレベル3飛行までの国土交通省への申請が不要となります（機体認証されている機体に限る）
            `,
			imageSrc:
				'https://64.media.tumblr.com/e746384d214dcc8240d5e898ce871db8/tumblr_ng37kbjFNO1qfirfao1_1280.jpg',
		},
		{
			title: '二等資格（国家資格）',
			subTitle: '国家資格試験時に実地試験免除',
			description: `
                人口集中地区（DID）・夜間飛行・人・物件30ｍ未満・目視外飛行の許可・承認が不要。空港周辺・高度150ｍ以上・イベント上空・危険物輸送・物件投下・一定の重量以上は許可、承認が必要ですが、審査が一部省略されます。国家試験時に実地試験免除。
                ※国家資格によりレベル3飛行までの国土交通省への申請が不要となります（機体認証されている機体に限る）
            `,
			imageSrc:
				'https://64.media.tumblr.com/e746384d214dcc8240d5e898ce871db8/tumblr_ng37kbjFNO1qfirfao1_1280.jpg',
		},
	];

	const doubleColumnQualifications = [
		{
			title: 'JUIDA・JUAVAC（民間資格）',
			description: `
			人口集中地区（DID）・夜間飛行・人・物件30ｍ未満・目視外飛行の許可・承認が必要。
			空港周辺・高度151ｍ以上・イベント上空・危険物輸送・物件投下・一定の重量以上は許可、承認が必要ですが、審査が一部省略されます。
		`,
			imageSrc:
				'https://64.media.tumblr.com/e746384d214dcc8240d5e898ce871db8/tumblr_ng37kbjFNO1qfirfao1_1280.jpg',
		},
	];

	return (
		<Section title='QUALIFICATIONS'>
			<div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
				{singleColumnQualifications.map((qualification) => (
					<QualificationCard
						headerSlot={
							<QualificationTitle
								title={qualification.title}
								subTitle={qualification.subTitle}
							/>
						}
						imageSlot={
							<QualificationImage
								src={qualification.imageSrc}
								alt={qualification.title}
							/>
						}
						descriptionSlot={
							<QualificationDescription
								description={qualification.description}
							/>
						}
						key={qualification.title}
					/>
				))}
				{doubleColumnQualifications.map((qualification) => (
					<div className='md:col-span-2' key={qualification.title}>
						<QualificationCard
							headerSlot={<QualificationTitle title={qualification.title} />}
							imageSlot={
								<div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
									<QualificationImage
										src={qualification.imageSrc}
										alt={`${qualification.title} 1`}
									/>
									<QualificationImage
										src={qualification.imageSrc}
										alt={`${qualification.title} 2`}
									/>
								</div>
							}
							descriptionSlot={
								<QualificationDescription
									description={qualification.description}
								/>
							}
						/>
					</div>
				))}
			</div>
		</Section>
	);
}
