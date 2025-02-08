import { useEffect, useRef, useState } from 'react';

type ScrollDirection = 'up' | 'down';

function useScrollDirection(): ScrollDirection {
	const [scrollDirection, setScrollDirection] =
		useState<ScrollDirection>('down');

	const prevScrollY = useRef<number>(
		typeof window !== 'undefined' ? window.scrollY : 0,
	);

	const threshold = 10;

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY =
				window.scrollY || document.documentElement.scrollTop;

			const diff = currentScrollY - prevScrollY.current;
			if (Math.abs(diff) < threshold) {
				return;
			}

			const newDirection = diff > 0 ? 'down' : 'up';

			if (newDirection !== scrollDirection) {
				setScrollDirection(newDirection);
			}

			prevScrollY.current = currentScrollY;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrollDirection]);

	return scrollDirection;
}

export default useScrollDirection;
