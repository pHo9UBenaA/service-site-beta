import { Menu, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import astroLogo from 'src/assets/astro.svg';
import ImageBase from 'src/components/ImageBase';
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

import { cn } from 'src/lib/utils';
import { Gap, Margin, Padding, TextNeutral } from 'src/styles/constant';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	return (
		<header className='fixed start-5 end-5 top-6 z-50 rounded-md bg-white/10 backdrop-blur-2xl dark:bg-gray-50/10'>
			<div className={cn(Padding.all['2_5-5-7_5'], 'grid grid-cols-2 items-center')}>
				<a href='/'>
					<ImageBase
						src={astroLogo.src}
						alt="Astro's Logo"
						className='h-10 w-auto'
					/>
				</a>

				<div className={cn(Gap['3-5'], 'grid grid-flow-col justify-self-end')}>
					{/* Toggle Dark Mode */}
					<Button
						variant='secondary'
						size='icon'
						onClick={toggleDarkMode}
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
						<SheetContent side='right' className={TextNeutral[700]}>
							<SheetHeader>
								<SheetTitle>Menu</SheetTitle>
							</SheetHeader>
							<div
								className={cn(
									Gap['2_1-3_6'],
									Margin.t['2_5-5-7_5'],
									'grid grid-cols-1',
								)}
							>
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
			</div>
		</header>
	);
}
