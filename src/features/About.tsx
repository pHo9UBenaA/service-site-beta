import ImageBase from 'src/components/ImageBase';
import { Section } from 'src/components/Section';
import { Card, CardDescription, CardHeader } from 'src/components/ui/card';

import { cn } from 'src/lib/utils';
import { Gap, TextNeutral } from 'src/styles/constant';

export default function About() {
	return (
		<Section title='ABOUT'>
			<div className={cn(Gap['7_5-12_5'], 'grid grid-cols-1 md:grid-cols-2')}>
				{/* Right Column - Aerial Image for Mobile */}
				<div className='md:order-2'>
					<ImageBase
						src='https://64.media.tumblr.com/e746384d214dcc8240d5e898ce871db8/tumblr_ng37kbjFNO1qfirfao1_1280.jpg'
						alt='Aerial view of mountains'
						className='rounded-lg object-cover'
					/>
				</div>

				{/* Left Column - Text Content */}
				<div className={cn(Gap['7_5-12_5'], 'grid')}>
					<div className='space-y-1 md:space-y-2'>
						<h3 className='font-medium text-lg md:text-2xl'>
							未来を担うパイロットへ。
						</h3>
						<h3 className='font-medium text-lg md:text-2xl'>
							安全で革新的な、講習体験を。
						</h3>
					</div>

					<Card className={cn(TextNeutral[700])}>
						<CardHeader>
							<CardDescription>
								当サイトは、初心者からプロフェッショナルまで、すべてのドローン操縦者向けに実践的かつ安全な講習プログラムを提供しています。
							</CardDescription>
							<CardDescription>
								最新技術と豊富な経験を持つ講師陣が、飛行の基礎から高度なテクニックまでを丁寧に指導。実際の環境を再現したシミュレーショントレーニングも充実しています。
							</CardDescription>
							<CardDescription>
								安全対策と緻密なカリキュラムにより、安心して学べる環境を整えています。未来のドローンパイロットとしての第一歩を、ここから踏み出しましょう。
							</CardDescription>
						</CardHeader>
					</Card>
				</div>
			</div>
		</Section>
	);
}
