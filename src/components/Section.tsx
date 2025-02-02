export function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section className='flex flex-col gap-10 md:gap-15 px-10 md:px-15 py-15 md:py-20'>
			<h2 className='text-center text-gray-600 dark:text-gray-300 tracking-wide'>
				{`( ${title} )`}
			</h2>
			{children}
		</section>
	);
}
