import { ArrowRight } from 'lucide-react';
import { Button } from 'src/components/ui/button';
import background from 'src/assets/background.svg';

export default function Hero() {
	return (
		<section
			className='flex min-h-screen w-full bg-cover bg-center bg-no-repeat'
			style={{
				backgroundImage: `url(${background.src})`,
			}}
		>
			<div className='flex min-h-screen w-full bg-black/40'>
				<div className='container flex items-center px-10'>
					<div className='max-w-[640px]'>
						<div className='mt-14 mb-10'>
							<span className='text-base font-medium text-white'>
								New Release
							</span>
						</div>
						<h1 className='mb-5 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl'>
							Welcome to Our Website
						</h1>
						<p className='mb-10 text-xl text-gray-200'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
							doloremque mollitia fugiat omnis! Porro facilis quo animi
							consequatur. Explicabo.
						</p>
						<Button className='gap-2 text-base' variant='secondary'>
							Primary
							<ArrowRight />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
