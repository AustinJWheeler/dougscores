import './globals.css'
import './cars.css'
import { notoSansJP, bizudGothic } from './fonts';

export const metadata = {
    title: 'Doug Scores',
    description: 'The Unofficial Doug Score Chart',
}

export default function RootLayout({children}) {
    return (
        <html lang="en" className={`${notoSansJP.className} ${bizudGothic.variable}`}>
        <body>{children}</body>
        </html>
    )
}
