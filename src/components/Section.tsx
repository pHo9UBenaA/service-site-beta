export function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		// <section className='flex flex-col gap-10 md:gap-15 px-10 md:px-15 py-15 md:py-20'>
		<section className='flex flex-col gap-10 px-10 md:gap-15 md:px-15'>
			<h2 className='text-center text-gray-600 tracking-wide dark:text-gray-300'>
				{`( ${title} )`}
			</h2>
			{children}
		</section>
	);
}
