import { cn } from 'src/lib/utils';

type Props = {
	src: string;
	alt: string;
	className?: string;
};

export default function ImageBase({ src, alt, className }: Props) {
	return (
		<img
			loading='lazy'
			src={src}
			alt={alt}
			width={0}
			height={0}
			className={cn('h-full w-full dark:brightness-80', className)}
		/>
	);
}
