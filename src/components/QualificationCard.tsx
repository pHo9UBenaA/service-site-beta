import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from 'src/components/ui/card';

export function QualificationCard({
	title,
	subTitle,
	description,
	imageSrc,
}: {
	title: string;
	subTitle: string;
	description: string;
	imageSrc: string;
}) {
	return (
		<Card className='overflow-hidden'>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{subTitle}</CardDescription>
			</CardHeader>

			<CardContent>
				<div className='flex justify-start'>
					<img
						src={imageSrc || '/placeholder.svg'}
						alt={title}
						className='w-full h-auto bg-black dark:brightness-80'
					/>
				</div>
			</CardContent>

			<CardContent>
				<CardDescription>{description}</CardDescription>
			</CardContent>
		</Card>
	);
}
