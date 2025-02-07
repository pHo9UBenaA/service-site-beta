// memo:
// とりあえずだから、将来的に運用する場合はディレクトリだったりを移動する
// このアプローチで構築を進めていくと、俗にいういき過ぎた最適化になりやすいと思われるので、個人プロジェクト以外ではこういうやり方はしないほうがいいと思う
// ちょっとした修正の影響範囲が大きくなりすぎて見落としが出てきたり、例外的なコンポーネントで上書きしたりされたり（Footerの gap-7.5 md:gap-0 みたいなところとか）とかでもカオスになりそうなのもある
// 今作ってるぐらいの自分以外にメンテ予定がないサービスサイトやブランドサイトなどの小規模なものではこれでも問題は表面化しなかったり、しても大したことにない気がしていて、それ以上に見通しが良いほうがメンテしやすいという判断
// 頭が半分寝てるので後々見直すこと

import { cn } from 'src/lib/utils';

const TextNeutral = {
	700: 'text-neutral-700 dark:text-neutral-300',
	800: 'text-neutral-800 dark:text-neutral-200',
	900: 'text-neutral-900 dark:text-neutral-100',
	950: 'text-neutral-950 dark:text-neutral-50',
} as const;

const TextNeutralWithHover = {
	700: cn(
		TextNeutral[700],
		'underline hover:text-neutral-800 dark:hover:text-neutral-200',
	),
	800: cn(
		TextNeutral[800],
		'underline hover:text-neutral-900 dark:hover:text-neutral-100',
	),
} as const;

const BorderNeutral = {
	200: 'border-neutral-200 dark:border-neutral-800',
} as const;

const Gap = {
	'15-25': 'gap-15 md:gap-25',
	'7_5-12_5': 'gap-7.5 md:gap-12.5',
	'6-10': 'gap-6 md:gap-10',
	'3-5': 'gap-3 md:gap-5',
	'2_1-3_6': 'gap-2.1 md:gap-3.6',
	'1_5-2_5': 'gap-1.5 md:gap-2.5',
} as const;

const Padding = {
	all: {
		'7-13-20': 'p-7 md:p-13 lg:p-20',
		'2_5-5-7_5': 'p-2.5 md:p-5 lg:p-7.5',
	},
	x: {
		'7-13-20': 'px-7 md:px-13 lg:px-20',
	},
	y: {
		'10-20-30': 'py-10 md:py-20 lg:py-30',
	},
	r: {
		'2_5-5-7_5': 'pr-2.5 md:pr-5 lg:pr-7.5',
	},
} as const;

const Margin = {
	t: {
		'7-13-20': 'mt-7 md:mt-13 lg:mt-20',
		'2_5-5-7_5': 'mt-2.5 md:mt-5 lg:mt-7.5',
	},
	y: {
		'7-13': 'my-7 md:my-13',
	},
} as const;

export {
	TextNeutral,
	TextNeutralWithHover,
	BorderNeutral,
	Gap,
	Padding,
	Margin,
};
