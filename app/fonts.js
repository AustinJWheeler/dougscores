import { Noto_Sans_JP, BIZ_UDGothic } from 'next/font/google';

export const notoSansJP = Noto_Sans_JP({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
});

export const bizudGothic = BIZ_UDGothic({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-bizudGothic',
});