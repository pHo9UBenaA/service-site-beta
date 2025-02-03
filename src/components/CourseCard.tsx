import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from 'src/components/ui/card';

export function CourseCard({
	title,
	period,
	price,
	description,
	imageSrc,
}: {
	title: string;
	period: string;
	price: string;
	description: string;
	imageSrc: string;
}) {
	return (
		<Card className='overflow-hidden'>
			<div className='h-64'>
				<img
					src={imageSrc || '/placeholder.svg'}
					alt={title}
					className='object-cover w-full h-full dark:brightness-80'
				/>
			</div>

			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>

			<CardContent>
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
			</CardContent>

			<CardContent>
				<CardDescription>{description}</CardDescription>
			</CardContent>
		</Card>
	);
}
