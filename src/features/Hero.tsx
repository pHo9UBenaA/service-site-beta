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
			<div className='min-h-screen w-full dark:bg-black/30 flex items-center justify-start px-10'>
				<div className='max-w-[640px] flex flex-col gap-5 text-black dark:text-white mt-20'>
					{/* <span className='text-base font-medium text-white'>New Release</span> */}
					<h1 className='font-bold tracking-tight text-5xl md:text-6xl lg:text-7xl'>
						最先端ドローン講習へ、ようこそ
					</h1>
					<p className='text-xl text-gray-700 dark:text-gray-300'>
						安全かつ実践的なドローン講習で、未来のパイロットをサポートします。
						初心者からプロフェッショナルまで、経験豊富な講師陣が丁寧に指導するカリキュラムで、安心して学べる環境をご提供します。
					</p>
					<Button variant='default' className='max-w-fit'>
						講習を予約する
						<ArrowRight />
					</Button>
				</div>
			</div>
		</section>
	);
}
