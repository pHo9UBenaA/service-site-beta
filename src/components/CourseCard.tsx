import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from 'src/components/ui/card';

export function CourseCard({
	title,
	description,
	imageSrc,
}: { title: string; description: string; imageSrc: string }) {
	return (
		<Card className='overflow-hidden'>
			<div className='relative h-48'>
				<img
					src={imageSrc || '/placeholder.svg'}
					alt={title}
					className='object-cover w-full h-full'
				/>
			</div>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<CardDescription>{description}</CardDescription>
			</CardContent>
		</Card>
	);
}
