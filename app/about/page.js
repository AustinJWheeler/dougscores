import Image from 'next/image'
import Filters from "@/components/filters";
import Header from "@/components/header";
import Link from 'next/link';
import ScoresTable from "@/components/scoresTable";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col justify-between items-center">
            <div className='w-full'>
                <div className="bg-white sticky mt-0 w-full top-0 z-20 heading-font h-20 flex items-center justify-center">
                    <div className="container mx-auto flex flex-row items-center justify-between max-w-screen-lg">
                        <Link className="ml-24 text-green-600 no-underline hover:text-green-700 hover:no-underline" href="/">
                            <span className="text-2xl">DOUG</span><span className="text-2xl pl-4">SCORE</span>
                        </Link>

                        <Link href='/about' className='mr-24'>
                            <p className="inline-block py-2 text-green-600 no-underline hover:text-green-700">ABOUT</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='text-lg text-gray-700 w-[48rem] text-center'>
                <p className='pb-8'>
                    Welcome to DougScore.net, the unofficial Doug Score browsing site. I created this site to make it easy for you to navigate Doug DeMuro&apos;s unique scoring system.
                </p>
                <p>
                    This site is not officially affiliated with Doug DeMuro. This site gets it&apos;s data from the official doug score page <a href='http://www.dougdemuro.com/dougscore' target='_blank' className='text-blue-600 underline'>here</a>.
                </p>
            </div>

            <footer className="pt-16 pb-10 flex flex-col justify-center items-start">
                <a href='' className='text-gray-400 px-3 flex flex-row items-center justify-center mb-6'>
                    <svg className='w-6 mr-4' xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                    <p>email</p>
                </a>
                <a href='' className='text-gray-400 px-3 flex flex-row items-center justify-center'>
                    <svg className='w-6 mr-4' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                    <p>twitter</p>
                </a>
            </footer>

        </div>
    )
}
