import astroLogo from 'src/assets/astro.svg';
import ImageBase from 'src/components/ImageBase';

import { cn } from 'src/lib/utils';
import {
	BorderNeutral,
	Gap,
	Margin,
	Padding,
	TextNeutral,
	TextNeutralWithHover,
} from 'src/styles/constant';

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
		<footer
			className={cn(
				Padding.all['7-13-20'],
				'w-full bg-white pb-4 md:pb-7 lg:pb-10 dark:bg-neutral-950/30',
			)}
		>
			{/* Top Section */}
			<div className='grid grid-cols-1 gap-7.5 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)_minmax(0,1.5fr)] md:gap-0'>
				{/* Logo Section */}
				<div>
					<a href='/'>
						<ImageBase
							src={astroLogo.src}
							alt="Astro's Logo"
							className='h-15 w-auto'
						/>
					</a>
				</div>

				{/* Address Section */}
				<div
					className={cn(
						TextNeutral[800],
						'order-3 items-center space-y-2 md:order-2',
					)}
				>
					<h2 className={cn(TextNeutral[900], 'font-medium')}>ADDRESS</h2>
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
								<th
									className={cn(
										Padding.r['2_5-5-7_5'],
										'font-bold tracking-wide',
									)}
								>
									TEL
								</th>
								<td>012-3456-7890</td>
							</tr>
							<tr>
								<th
									className={cn(
										Padding.r['2_5-5-7_5'],
										'font-bold tracking-wide',
									)}
								>
									FAX
								</th>
								<td>012-3456-7891</td>
							</tr>
							<tr>
								<th
									className={cn(
										Padding.r['2_5-5-7_5'],
										'font-bold tracking-wide',
									)}
								>
									MAIL
								</th>
								<td>dummy@example.com</td>
							</tr>
						</tbody>
					</table>
				</div>

				{/* Navigation Section */}
				<div className='order-2 md:order-3'>
					<nav className={cn(Gap['1_5-2_5'], 'grid grid-cols-2')}>
						<div className='space-y-2'>
							{navigations.main.map((item) => (
								<a
									key={item.label}
									href={item.href}
									className={cn(TextNeutralWithHover[800], 'block ')}
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
									className={cn(TextNeutralWithHover[800], 'block ')}
								>
									{item.label}
								</a>
							))}
						</div>
					</nav>
				</div>
			</div>

			<hr className={cn(BorderNeutral[200], Margin.y['7-13'])} />

			{/* Bottom Section */}
			<div>
				<div
					className={cn(
						Gap['1_5-2_5'],
						'grid grid-cols-2 items-center text-xs md:text-base',
					)}
				>
					<div className='grid justify-self-start'>
						<a href='/privacy-policy' className={TextNeutralWithHover[800]}>
							PRIVACY POLICY
						</a>
					</div>

					<div
						className={cn(
							Gap['1_5-2_5'],
							'grid grid-flow-col justify-self-end',
						)}
					>
						<a
							href='https://instagram.com'
							className={TextNeutralWithHover[800]}
							aria-label='Instagram'
						>
							{/* @deprecated — Brand icons have been deprecated and are due to be removed, please refer to https://github.com/lucide-icons/lucide/issues/670. We recommend using https://simpleicons.org/?q=instagram instead. This icon will be removed in v1.0 */}
							{/* <Instagram className='h-5 w-5' /> */}
						</a>
						<a
							href='https://facebook.com'
							className={TextNeutralWithHover[800]}
							aria-label='Facebook'
						>
							{/* @deprecated — Brand icons have been deprecated and are due to be removed, please refer to https://github.com/lucide-icons/lucide/issues/670. We recommend using https://simpleicons.org/?q=facebook instead. This icon will be removed in v1.0 */}
							{/* <Facebook className='h-5 w-5' /> */}
						</a>
					</div>

					<div className='grid justify-self-start'>
						<span className={TextNeutral[800]}>運営・企画：ダミー株式会社</span>
					</div>

					<div className='grid justify-self-end'>
						<span className={TextNeutral[800]}>© ダミー 2025</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
