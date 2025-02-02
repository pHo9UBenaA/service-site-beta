import { Menu } from 'lucide-react';
import { useState } from 'react';
import astroLogo from 'src/assets/astro.svg';
import { Button } from 'src/components/ui/button';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from 'src/components/ui/navigation-menu';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from 'src/components/ui/sheet';

// export default function Header() {
// 	const [isMenuOpen, setIsMenuOpen] = useState(false);

// 	return (
// 		<header className='fixed z-50 bg-white/10 backdrop-blur-sm rounded-md start-5 end-5 top-6'>
// 			<div className='flex items-center justify-between p-3'>
// 				<div className='flex items-center ml-2'>
// 					<a href='/' className='fill-red-500'>
// 						<Icon />
// 					</a>
// 				</div>
// 				<Button
// 					className='block md:hidden'
// 					onClick={() => setIsMenuOpen(!isMenuOpen)}
// 				>
// 					{/* ハンバーガーアイコンをここに追加 */}
// 					<svg
// 						xmlns='http://www.w3.org/2000/svg'
// 						viewBox='0 0 24 24'
// 						className='w-6 h-6'
// 						fill='none'
// 						stroke='currentColor'
// 					>
// 						<title>Hamburger Menu</title>
// 						<path
// 							strokeLinecap='round'
// 							strokeLinejoin='round'
// 							strokeWidth={2}
// 							d='M4 6h16M4 12h16m-7 6h7'
// 						/>
// 					</svg>
// 				</Button>
// 				<NavigationMenu
// 					className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}
// 				>
// 					<NavigationMenuList>
// 						<NavigationMenuItem>
// 							<NavigationMenuLink
// 								href='/'
// 								className={`${navigationMenuTriggerStyle()} ring-1 ring-inset focus:ring-1 focus:ring-inset border-none`}
// 							>
// 								Home
// 							</NavigationMenuLink>
// 						</NavigationMenuItem>
// 					</NavigationMenuList>
// 				</NavigationMenu>
// 			</div>
// 		</header>
// 	);
// }

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className='fixed z-50 bg-white/10 backdrop-blur-sm rounded-md start-5 end-5 top-6'>
			<div className='flex items-center justify-between p-3'>
				{/* <div className='flex items-center ml-2'>
					<a href='/' className='fill-red-500'>
                    <svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 576 512'
			className='w-6 h-6'
		>
			<title>Home</title>
			<HouseIcon>
		</svg>
					</a>
				</div> */}
				<a href='/'>
					<img
						src={astroLogo.src}
						width='115'
						height='48'
						alt='Astro Homepage'
					/>
				</a>
				<Sheet>
					<SheetTrigger asChild>
						{/* <Button
							variant='outline'
							size='icon'
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								className='w-6 h-6 rounded-full'
								fill='none'
								stroke='currentColor'
							>
								<title>Hamburger Menu</title>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={3}
									d='M4 6h16M4 12h16m-7 6h7'
								/>
							</svg>
						</Button> */}
						<Button
							variant='secondary'
							size='icon'
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className='md:hidden'
						>
							<Menu size={30} strokeWidth={3} />
						</Button>
					</SheetTrigger>
					<SheetContent side='right'>
						<SheetHeader>
							<SheetTitle>Menu</SheetTitle>
							<SheetDescription />
						</SheetHeader>
						<div className='flex flex-col gap-2 mt-3'>
							<Button variant='ghost'>Home</Button>
							<Button variant='ghost'>About</Button>
							<Button variant='ghost'>Services</Button>
							<Button variant='ghost'>Contact</Button>
						</div>
					</SheetContent>
				</Sheet>
				<NavigationMenu className='hidden md:block'>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuLink
								href='/'
								className={`${navigationMenuTriggerStyle()}`}
							>
								Home
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</header>
	);
}
