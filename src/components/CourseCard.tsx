import { Card, CardContent, CardHeader } from 'src/components/ui/card';

export function CourseCard({
	imageSlot,
	titleSlot,
	tableSlot,
	descriptionSlot,
}: {
	imageSlot: React.ReactNode;
	titleSlot: React.ReactNode;
	tableSlot: React.ReactNode;
	descriptionSlot: React.ReactNode;
}) {
	return (
		<Card className='overflow-hidden'>
			{imageSlot}
			<CardHeader>{titleSlot}</CardHeader>
			<CardContent>{tableSlot}</CardContent>
			<CardContent>{descriptionSlot}</CardContent>
		</Card>
	);
}
