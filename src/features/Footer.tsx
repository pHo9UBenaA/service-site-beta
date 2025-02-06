import astroLogo from 'src/assets/astro.svg';

const navigations = {
	main: [
		{
			label: 'TOP',
			href: '/',
		},
		{
			label: 'ABOUT',
			href: '/about',
		},
		{
			label: 'LICENSE',
			href: '/license',
		},
		{
			label: 'SUPPORT',
			href: '/support',
		},
	],
	sub: [
		{
			label: 'TOPICS',
			href: '/topics',
		},
		{
			label: 'ACCESS',
			href: '/access',
		},
		{
			label: 'CONTACT',
			href: '/contact',
		},
	],
};

export default function Footer() {
	return (
		<footer className='w-full border-gray-200 border-t px-15 pt-13 pb-10 md:px-20 md:pt-17 dark:bg-black/30'>
			<div className='container mx-auto'>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12'>
					{/* Logo Section */}
					<div className='grid gap-4'>
						<a href='/'>
							<img
								loading='lazy'
								src={astroLogo.src}
								className='h-30 w-auto bg-gray-100 px-2'
								width={0}
								height={0}
								alt="Astro's Logo"
							/>
						</a>
					</div>

					{/* Address Section */}
					<div className='order-3 space-y-4 text-gray-600 text-sm md:order-2 dark:text-gray-200'>
						<h2 className='mb-4 font-medium text-base text-gray-900 dark:text-gray-100'>
							ADDRESS
						</h2>
						<div className='space-y-2'>
							<p>〒000-0000</p>
							<p>東京都渋谷区ダミー町1-2-3</p>
							<div className='mt-4'>
								<p>TEL　012-3456-7890</p>
								<p>FAX　012-3456-7891</p>
								<p>MAIL　dummy@example.com</p>
							</div>
						</div>
					</div>

					{/* Navigation Section */}
					<div className='order-2 space-y-4 md:order-3'>
						<nav className='grid grid-cols-2 gap-4 text-sm'>
							<div className='space-y-3'>
								{navigations.main.map((item) => (
									<a
										key={item.label}
										href={item.href}
										className='block text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100'
									>
										{item.label}
									</a>
								))}
							</div>
							<div className='space-y-3'>
								{navigations.sub.map((item) => (
									<a
										key={item.label}
										href={item.href}
										className='block text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200'
									>
										{item.label}
									</a>
								))}
							</div>
						</nav>
					</div>
				</div>

				{/* Bottom Section */}
				<div className='mt-12 border-gray-200 border-t pt-8 dark:border-gray-800'>
					<div className='grid grid-cols-2 gap-4 text-sm'>
						<div className='grid items-center justify-start'>
							<a
								href='/privacy-policy'
								className='text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100'
							>
								PRIVACY POLICY
							</a>
						</div>

						<div className='grid auto-cols-auto grid-flow-col items-center justify-end gap-2'>
							<a
								href='https://instagram.com'
								className='text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100'
								aria-label='Instagram'
							>
								{/* @deprecated — Brand icons have been deprecated and are due to be removed, please refer to https://github.com/lucide-icons/lucide/issues/670. We recommend using https://simpleicons.org/?q=instagram instead. This icon will be removed in v1.0 */}
								{/* <Instagram className='h-5 w-5' /> */}
							</a>
							<a
								href='https://facebook.com'
								className='text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100'
								aria-label='Facebook'
							>
								{/* @deprecated — Brand icons have been deprecated and are due to be removed, please refer to https://github.com/lucide-icons/lucide/issues/670. We recommend using https://simpleicons.org/?q=facebook instead. This icon will be removed in v1.0 */}
								{/* <Facebook className='h-5 w-5' /> */}
							</a>
						</div>

						<div className='grid items-center justify-start'>
							<span className='text-gray-600 dark:text-gray-200'>
								運営・企画：ダミー株式会社
							</span>
						</div>

						<div className='grid items-center justify-end'>
							<span className='text-gray-600 dark:text-gray-200'>
								© ダミー 2025
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
