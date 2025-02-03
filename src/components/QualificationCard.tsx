import { Card, CardContent, CardHeader } from 'src/components/ui/card';

export function QualificationCard({
	headerSlot,
	imageSlot,
	descriptionSlot,
}: {
	headerSlot: React.ReactNode;
	imageSlot: React.ReactNode;
	descriptionSlot: React.ReactNode;
}) {
	return (
		<Card className='overflow-hidden'>
			<CardHeader>{headerSlot}</CardHeader>

			<CardContent>{imageSlot}</CardContent>

			<CardContent>{descriptionSlot}</CardContent>
		</Card>
	);
}
