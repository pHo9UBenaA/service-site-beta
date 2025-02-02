// import { Card } from 'src/components/ui/card';

// export default function About() {
// 	return (
// 		<section className='flex flex-col gap-6 md:gap-10 p-5 md:p-10 bg-linear-to-t from-pink-100 to-white dark:from-[#4b4447] dark:to-[#4c4c4c]'>
// 			<h2 className='text-center text-gray-600 dark:text-gray-300 tracking-wide'>
// 				( ABOUT )
// 			</h2>

// 			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
// 				{/* Right Column - Aerial Image for Mobile */}
// 				<div className='w-full h-full md:order-2 relative'>
// 					<img
// 						src='https://64.media.tumblr.com/e746384d214dcc8240d5e898ce871db8/tumblr_ng37kbjFNO1qfirfao1_1280.jpg'
// 						alt='Aerial view of mountains'
// 						width={600}
// 						height={400}
// 						className='rounded-lg object-cover w-full h-full'
// 					/>
// 					<div className='dark:bg-black/30  absolute rounded-lg top-0 left-0 w-full h-full z-10' />
// 				</div>

// 				{/* Center Column - Text Content */}
// 				<div className='flex flex-col gap-4 md:gap-8 text-black dark:text-white'>
// 					<div className='space-y-2 md:space-y-4'>
// 						<h3 className='text-2xl md:text-3xl font-medium'>
// 							未来を担うパイロットへ。
// 						</h3>
// 						<h3 className='text-2xl md:text-3xl font-medium'>
// 							安全で革新的な、講習体験を。
// 						</h3>
// 					</div>

// 					<Card className='bg-white/50 p-4 md:p-6 space-y-2 md:space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed'>
// 						<p className='text-base md:text-xl'>
// 							当サイトは、初心者からプロフェッショナルまで、すべてのドローン操縦者向けに実践的かつ安全な講習プログラムを提供しています。
// 						</p>
// 						<p className='text-base md:text-xl'>
// 							最新技術と豊富な経験を持つ講師陣が、飛行の基礎から高度なテクニックまでを丁寧に指導。実際の環境を再現したシミュレーショントレーニングも充実しています。
// 						</p>
// 						<p className='text-base md:text-xl'>
// 							安全対策と緻密なカリキュラムにより、安心して学べる環境を整えています。未来のドローンパイロットとしての第一歩を、ここから踏み出しましょう。
// 						</p>
// 					</Card>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

// import { Card } from 'src/components/ui/card';

// export default function About() {
// 	return (
// 		<section className='flex flex-col gap-10 p-10 bg-linear-to-t from-pink-100 to-white dark:from-[#4b4447] dark:to-[#4c4c4c]'>
// 			<h2 className='text-center text-gray-600 dark:text-gray-300 tracking-wide'>
// 				( ABOUT )
// 			</h2>

// 			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
// 				{/* Right Column - Aerial Image for Mobile */}
// 				<div className='w-full h-full md:order-2 relative'>
// 					<img
// 						src='https://64.media.tumblr.com/e746384d214dcc8240d5e898ce871db8/tumblr_ng37kbjFNO1qfirfao1_1280.jpg'
// 						alt='Aerial view of mountains'
// 						width={600}
// 						height={400}
// 						className='rounded-lg object-cover w-full h-full'
// 					/>
// 					<div className='dark:bg-black/30  absolute rounded-lg top-0 left-0 w-full h-full z-10' />
// 				</div>

// 				{/* Center Column - Text Content */}
// 				<div className='flex flex-col gap-8 text-black dark:text-white'>
// 					<div className='space-y-4'>
// 						<h3 className='text-2xl md:text-3xl font-medium'>
// 							未来を担うパイロットへ。
// 						</h3>
// 						<h3 className='text-2xl md:text-3xl font-medium'>
// 							安全で革新的な、講習体験を。
// 						</h3>
// 					</div>

// 					<Card className='bg-white/50 p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed'>
// 						<p className='text-base md:text-xl'>
// 							当サイトは、初心者からプロフェッショナルまで、すべてのドローン操縦者向けに実践的かつ安全な講習プログラムを提供しています。
// 						</p>
// 						<p className='text-base md:text-xl'>
// 							最新技術と豊富な経験を持つ講師陣が、飛行の基礎から高度なテクニックまでを丁寧に指導。実際の環境を再現したシミュレーショントレーニングも充実しています。
// 						</p>
// 						<p className='text-base md:text-xl'>
// 							安全対策と緻密なカリキュラムにより、安心して学べる環境を整えています。未来のドローンパイロットとしての第一歩を、ここから踏み出しましょう。
// 						</p>
// 					</Card>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

import { Section } from 'src/components/Section';
import { Card } from 'src/components/ui/card';

export default function About() {
	return (
		<Section title='ABOUT'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
				{/* Right Column - Aerial Image for Mobile */}
				<div className='w-full h-full md:order-2 relative'>
					<img
						src='https://64.media.tumblr.com/e746384d214dcc8240d5e898ce871db8/tumblr_ng37kbjFNO1qfirfao1_1280.jpg'
						alt='Aerial view of mountains'
						width={600}
						height={400}
						className='rounded-lg object-cover w-full h-full'
					/>
					<div className='dark:bg-black/30  absolute rounded-lg top-0 left-0 w-full h-full z-10' />
				</div>

				{/* Center Column - Text Content */}
				<div className='flex flex-col gap-5 md:gap-10 text-black dark:text-white'>
					<div className='space-y-1 md:space-y-2'>
						<h3 className='text-2xl md:text-3xl font-medium'>
							未来を担うパイロットへ。
						</h3>
						<h3 className='text-2xl md:text-3xl font-medium'>
							安全で革新的な、講習体験を。
						</h3>
					</div>

					<Card className='bg-white/50 p-6 md:p-8 space-y-4 md:space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed'>
						<p className='text-base md:text-lg'>
							当サイトは、初心者からプロフェッショナルまで、すべてのドローン操縦者向けに実践的かつ安全な講習プログラムを提供しています。
						</p>
						<p className='text-base md:text-lg'>
							最新技術と豊富な経験を持つ講師陣が、飛行の基礎から高度なテクニックまでを丁寧に指導。実際の環境を再現したシミュレーショントレーニングも充実しています。
						</p>
						<p className='text-base md:text-lg'>
							安全対策と緻密なカリキュラムにより、安心して学べる環境を整えています。未来のドローンパイロットとしての第一歩を、ここから踏み出しましょう。
						</p>
					</Card>
				</div>
			</div>
		</Section>
	);
}
