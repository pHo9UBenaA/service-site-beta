import { ArrowRight } from 'lucide-react';
import background from 'src/assets/background.svg';
import { Button } from 'src/components/ui/button';

export default function Hero() {
	return (
		<section
			className='flex min-h-screen w-full bg-cover bg-center bg-no-repeat'
			style={{
				backgroundImage: `url(${background.src})`,
			}}
		>
			<div className='min-h-screen w-full bg-black/40 flex items-center justify-start px-10'>
				<div className='max-w-[640px] flex flex-col gap-5 text-white mt-20'>
					{/* <span className='text-base font-medium text-white'>New Release</span> */}
					<h1 className='font-bold tracking-tight  text-5xl md:text-6xl lg:text-7xl'>
						Welcome to Website
					</h1>
					<p className='text-xl text-gray-200'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Every
						detail crafted with care! A seamless experience that inspires and
						delights. Explore more.
					</p>
					<Button variant='default' className='max-w-fit'>
						Primary
						<ArrowRight />
					</Button>
				</div>
			</div>
		</section>
	);
}
