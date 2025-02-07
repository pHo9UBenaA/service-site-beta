import { ArrowRight } from 'lucide-react';
import background from 'src/assets/background.svg';
import { Button } from 'src/components/ui/button';

import { cn } from 'src/lib/utils';
import { Gap, Margin, Padding, TextNeutral } from 'src/styles/constant';

export default function Hero() {
	return (
		<section
			className='min-h-screen w-full bg-center bg-cover bg-no-repeat'
			style={{
				backgroundImage: `url(${background.src})`,
			}}
		>
			<div
				className={cn(
					Padding.x['7-13-20'],
					'grid min-h-screen w-full items-center dark:bg-neutral-950/30',
				)}
			>
				<div
					className={cn(
						Gap['3-5'],
						Margin.t['7-13-20'],
						'grid max-w-[640px] justify-self-start',
					)}
				>
					<h1 className='font-bold text-4xl md:text-6xl'>
						最先端ドローン講習へ、ようこそ
					</h1>
					<p className={cn(TextNeutral[700], 'text-xl')}>
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
