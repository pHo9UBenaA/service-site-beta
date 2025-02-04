import { Menu, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import astroLogo from 'src/assets/astro.svg';
import { Button } from 'src/components/ui/button';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from 'src/components/ui/navigation-menu';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from 'src/components/ui/sheet';
import { useDarkMode } from 'src/hooks/useDarkMode';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	return (
		<header className='fixed start-5 end-5 top-6 z-50 rounded-md bg-white/10 backdrop-blur-2xl dark:bg-gray-50/10'>
			<div className='flex items-center justify-between p-3'>
				<a href='/'>
					<img
						loading='lazy'
						src={astroLogo.src}
						className='h-10 w-auto px-2'
						width={0}
						height={0}
						alt="Astro's Logo"
					/>
				</a>

				{/* Toggle Dark Mode */}
				<Button
					variant='secondary'
					size='icon'
					onClick={toggleDarkMode}
					className='mr-2'
					aria-label='Toggle Dark Mode'
				>
					{isDarkMode ? <Sun strokeWidth={3} /> : <Moon strokeWidth={3} />}
				</Button>

				{/* Mobile Menu */}
				<Sheet>
					<SheetTrigger asChild>
						<Button
							variant='secondary'
							size='icon'
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className='md:hidden'
							aria-label='Menu'
						>
							<Menu strokeWidth={3} />
						</Button>
					</SheetTrigger>
					<SheetContent
						side='right'
						className='text-gray-700 dark:text-gray-300'
					>
						<SheetHeader>
							<SheetTitle>Menu</SheetTitle>
							{/* <SheetDescription>Description</SheetDescription> */}
						</SheetHeader>
						<div className='mt-5 flex flex-col gap-3'>
							<Button variant='ghost'>Home</Button>
							<Button variant='ghost'>About</Button>
							<Button variant='ghost'>Services</Button>
							<Button variant='ghost'>Contact</Button>
						</div>
					</SheetContent>
				</Sheet>

				{/* Desktop Menu */}
				<NavigationMenu className='hidden md:block'>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Button variant='ghost'>Home</Button>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Button variant='ghost'>About</Button>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Button variant='ghost'>Services</Button>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Button variant='default'>Contact</Button>
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</header>
	);
}
