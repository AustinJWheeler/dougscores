import './globals.css'
import './cars.css'
import { notoSansJP, bizudGothic } from './fonts';

export const metadata = {
    title: 'DougScore.net',
    description: 'The Unofficial Doug Score Chart',
    viewport: {
        width: 'device-width',
        initialScale: 0.5,
        maximumScale: 1.0,
        userScalable: true,
    },
}

export default function RootLayout({children}) {
    return (
        <html lang="en" className={`${notoSansJP.className} ${bizudGothic.variable} `}>
        <body className=''>{children}</body>
        </html>
    )
}
