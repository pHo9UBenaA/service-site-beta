import astroLogo from 'src/assets/astro.svg';
import ImageBase from 'src/components/ImageBase';

import { cn } from 'src/lib/utils';
import { BorderGray, TextGray, TextGrayWithHover } from 'src/styles/constant';

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
		<footer className='w-full bg-white px-15 pt-13 pb-10 md:px-20 md:pt-17 dark:bg-black/30'>
			<div className='grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)_minmax(0,1.5fr)] md:gap-0'>
				{/* Logo Section */}
				<div>
					<a href='/'>
						<ImageBase
							src={astroLogo.src}
							alt="Astro's Logo"
							className='h-30 w-auto'
						/>
					</a>
				</div>

				{/* Address Section */}
				<div
					className={cn(
						TextGray[800],
						'order-3 items-center space-y-2 md:order-2',
					)}
				>
					<h2 className={cn(TextGray[900], 'font-medium')}>ADDRESS</h2>
					<div>
						<p>〒000-0000</p>
						<p>東京都渋谷区ダミー町1-2-3</p>
					</div>
					{/* <p>TEL　012-3456-7890</p>
					<p>FAX　012-3456-7891</p>
					<p>MAIL　dummy@example.com</p> */}
					<table>
						<tbody className='text-left'>
							<tr>
								<th className='pr-2 font-bold tracking-wide'>TEL</th>
								<td>012-3456-7890</td>
							</tr>
							<tr>
								<th className='pr-2 font-bold tracking-wide'>FAX</th>
								<td>012-3456-7891</td>
							</tr>
							<tr>
								<th className='pr-2 font-bold tracking-wide'>MAIL</th>
								<td>dummy@example.com</td>
							</tr>
						</tbody>
					</table>
				</div>

				{/* Navigation Section */}
				<div className='order-2 md:order-3'>
					<nav className='grid grid-cols-2 gap-2'>
						<div className='space-y-2'>
							{navigations.main.map((item) => (
								<a
									key={item.label}
									href={item.href}
									className={cn(TextGrayWithHover[800], 'block ')}
								>
									{item.label}
								</a>
							))}
						</div>
						<div className='space-y-2'>
							{navigations.sub.map((item) => (
								<a
									key={item.label}
									href={item.href}
									className={cn(TextGrayWithHover[800], 'block ')}
								>
									{item.label}
								</a>
							))}
						</div>
					</nav>
				</div>
			</div>

			<hr className={cn(BorderGray[200], 'my-10 md:my-13')} />

			{/* Bottom Section */}
			<div>
				<div className='grid grid-cols-2 items-center gap-2'>
					<div className='grid justify-self-start'>
						<a href='/privacy-policy' className={TextGrayWithHover[800]}>
							PRIVACY POLICY
						</a>
					</div>

					<div className='grid grid-flow-col gap-2 justify-self-end'>
						<a
							href='https://instagram.com'
							className={TextGrayWithHover[800]}
							aria-label='Instagram'
						>
							{/* @deprecated — Brand icons have been deprecated and are due to be removed, please refer to https://github.com/lucide-icons/lucide/issues/670. We recommend using https://simpleicons.org/?q=instagram instead. This icon will be removed in v1.0 */}
							{/* <Instagram className='h-5 w-5' /> */}
						</a>
						<a
							href='https://facebook.com'
							className={TextGrayWithHover[800]}
							aria-label='Facebook'
						>
							{/* @deprecated — Brand icons have been deprecated and are due to be removed, please refer to https://github.com/lucide-icons/lucide/issues/670. We recommend using https://simpleicons.org/?q=facebook instead. This icon will be removed in v1.0 */}
							{/* <Facebook className='h-5 w-5' /> */}
						</a>
					</div>

					<div className='grid justify-self-start'>
						<span className={TextGray[800]}>運営・企画：ダミー株式会社</span>
					</div>

					<div className='grid justify-self-end'>
						<span className={TextGray[800]}>© ダミー 2025</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
