import { ArrowRight } from 'lucide-react';
import background from 'src/assets/background.svg';
import { Button } from 'src/components/ui/button';

import { cn } from 'src/lib/utils';
import { TextGray } from 'src/styles/constant';

export default function Hero() {
	return (
		<section
			className='min-h-screen w-full bg-center bg-cover bg-no-repeat'
			style={{
				backgroundImage: `url(${background.src})`,
			}}
		>
			<div className='grid min-h-screen w-full items-center px-10 dark:bg-black/30'>
				<div className='mt-20 grid max-w-[640px] gap-5 justify-self-start'>
					<h1 className='font-bold text-5xl md:text-6xl'>
						最先端ドローン講習へ、ようこそ
					</h1>
					<p className={cn(TextGray[700], 'text-xl')}>
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
