import Image from 'next/image'
import Filters from "@/components/filters";
import Header from "@/components/header";
import Link from 'next/link';
import ScoresTable from "@/components/scoresTable";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col justify-between items-center">
            <div className='w-full'>
                <div className="bg-white dark:bg-black sticky mt-0 w-full top-0 z-20 heading-font h-20 flex items-center justify-center">
                    <div className="container mx-auto flex flex-row items-center justify-between max-w-screen-lg">
                        <Link className="ml-24 text-green-600 no-underline hover:text-green-700 hover:no-underline dark:text-green-500 dark:hover:text-green-600" href="/">
                            <span className="text-2xl">DOUG</span><span className="text-2xl pl-4">SCORE</span>
                        </Link>

                        <Link href='/about' className='mr-24'>
                            <p className="inline-block py-2 text-green-600 no-underline hover:text-green-700 dark:text-green-500 dark:hover:text-green-600">ABOUT</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='text-lg text-gray-700 dark:text-gray-300 w-[48rem] text-center'>
                <p className='pb-8'>
                    Welcome to DougScore.net, the unofficial Doug Score browsing site. I created this site to make it easy for you to navigate Doug DeMuro&apos;s unique scoring system.
                </p>
                <p>
                    This site is not officially affiliated with Doug DeMuro. This site gets it&apos;s data from the official doug score page <a href='http://www.dougdemuro.com/dougscore' target='_blank' className='text-blue-600 underline'>here</a>.
                </p>
            </div>

            <footer className="pt-16 pb-10 flex flex-col justify-center items-start">
                <a href='mailto:austin@awheeler.io' className='text-gray-400 px-3 flex flex-row items-center justify-center mb-6'>
                    <svg className='w-6 mr-4' xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                    <p>austin@awheeler.io</p>
                </a>
                <a href='https://twitter.com/austinwheelerj' className='text-gray-400 px-3 flex flex-row items-center justify-center mb-6'>
                    <svg className='w-6 mr-4' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                    <p>@austinwheelerj</p>
                </a>
                <a href='https://github.com/AustinJWheeler' className='text-gray-400 px-3 flex flex-row items-center justify-center'>
                    <svg className='w-6 mr-4' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                    <p>github.com/AustinJWheeler</p>
                </a>
            </footer>

        </div>
    )
}
