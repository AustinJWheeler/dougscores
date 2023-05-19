import Image from 'next/image'
import {dougScores} from '../doug_scores'
import Filters from "@/components/filters";


export default function Home({searchParams}) {

    const makes = searchParams.make && searchParams.make.split(',')
    const {sort, rev} = searchParams

    const filtered_list = makes ? dougScores.filter(x => makes.some(y => y === x.make)) : dougScores

    const sorted_list = sort ? filtered_list.sort((a,b) => (b[sort] - a[sort]) * (rev ? -1 : 1)) : filtered_list

    return (
        <div className="">
            <div className="bg-white sticky mt-0 w-full top-0 z-20 heading-font h-20 flex items-center justify-center">
                <div className="container mx-auto flex flex-row items-center justify-between max-w-screen-lg">
                    <a className="text-green-600 no-underline hover:text-green-700 hover:no-underline" href="#">
                        <span className="text-2xl">DOUG</span><span className="text-2xl pl-4">SCORE</span>
                    </a>

                    <Filters/>

                    <ul className="flex items-center">
                        <li className="mr-3">
                            <a className="inline-block py-2 px-4 text-green-600 no-underline" href="#">SCORES</a>
                        </li>
                        <li className="">
                            <a className="inline-block text-green-700 no-underline hover:text-green-600 py-2 px-4"
                               href="#">ABOUT</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-white sticky mt-8 top-20 z-10 flex flex-col justify-start items-center">
                <table className="">
                    <thead>
                    <tr>
                        <th className="w-96" rowSpan="2"></th>
                        <th className="weekend-red" colSpan="5">WEEKEND</th>
                        <th className="w-1.5"></th>
                        <th className="w-12 weekend-red"></th>
                        <th className="w-1.5"></th>
                        <th className="daily-green" colSpan="5">DAILY</th>
                        <th className="w-1.5"></th>
                        <th className="w-12 daily-green"></th>
                        <th className="w-1.5"></th>
                        <th className="w-32 doug-grey" rowSpan="2">
                            <div className="flex justify-center items-center">
                                <p className="rotate-45 transform origin-center">
                                    DOUGSCORE
                                </p>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th className="w-9 weekend-red">
                            <div className="flex justify-center items-center">
                                <p className="vert rotate-180 transform origin-center">
                                    Styling
                                </p>
                            </div>
                        </th>
                        <th className="w-9 weekend-red">
                            <div className="flex justify-center items-center">
                                <p className="vert rotate-180 transform origin-center">
                                    Accel
                                </p>
                            </div>
                        </th>
                        <th className="w-9 weekend-red">
                            <div className="flex justify-center items-center">
                                <p className="vert rotate-180 transform origin-center">
                                    Handling
                                </p>
                            </div>
                        </th>
                        <th className="w-9 weekend-red">
                            <div className="flex justify-center items-center">
                                <p className="vert rotate-180 transform origin-center">
                                    Fun Factor
                                </p>
                            </div>
                        </th>
                        <th className="w-9 weekend-red">
                            <div className="flex justify-center items-center">
                                <p className="vert rotate-180 transform origin-center">
                                    Cool Factor
                                </p>
                            </div>
                        </th>
                        <th className=""></th>
                        <th className="weekend-red">
                            <div className="flex justify-center items-center">
                                <p className="vert rotate-180 transform origin-center">
                                    TOTAL
                                </p>
                            </div>
                        </th>
                        <th className=""></th>
                        <th className="w-9 daily-green">
                            <div className="flex justify-center items-center">
                                <p className="vert rotate-180 transform origin-center">
                                    Features
                                </p>
                            </div>
                        </th>
                        <th className="w-9 daily-green">
                            <div className="flex justify-center items-center">
                                <p className="vert rotate-180 transform origin-center">
                                    Comfort
                                </p>
                            </div>
                        </th>
                        <th className="w-9 daily-green">
                            <div className="flex justify-center items-center">
                                <p className="vert rotate-180 transform origin-center">
                                    Quality
                                </p>
                            </div>
                        </th>
                        <th className="w-9 daily-green">
                            <div className="flex justify-center items-center">
                                <p className="vert rotate-180 transform origin-center">
                                    Practical
                                </p>
                            </div>
                        </th>
                        <th className="w-9 daily-green">
                            <div className="flex justify-center items-center">
                                <p className="vert rotate-180 transform origin-center">
                                    Value
                                </p>
                            </div>
                        </th>
                        <th className=""></th>
                        <th className="daily-green">
                            <div className="flex justify-center items-center">
                                <p className="vert rotate-180 transform origin-center">
                                    TOTAL
                                </p>
                            </div>
                        </th>
                        <th className=""></th>
                        <th className="w-3"></th>
                        <th className="w-24 p-0">
                            <div className="flex justify-center items-end h-28">

                                <div className="flex justify-center items-center h-14 doug-grey w-full">
                                    <p className="">
                                        Vehicle From
                                    </p>
                                </div>
                            </div>
                        </th>
                        <th className="w-16 p-0">
                            <div className="flex justify-center items-end h-28">
                                <div className="flex justify-center items-center h-14 doug-grey w-full">
                                    <p className="">
                                        Video
                                    </p>
                                </div>
                            </div>
                        </th>
                    </tr>
                    </thead>
                </table>
            </div>

            <div className="min-h-screen flex flex-col justify-start items-center">
                <div>
                    <table className="">
                        <tbody>
                        {sorted_list.map(x => (
                            <tr key={x.key} className={`car${x.key}`}>
                                <td className="w-96 h-7 text-white" style={{
                                    backgroundColor: x.bg_color,
                                    color: x.text_color
                                }}>{`${x.year} ${x.make} ${x.model}`}</td>
                                <td className="weekend-red w-9">{x.styling}</td>
                                <td className="weekend-red w-9">{x.accel}</td>
                                <td className="weekend-red w-9">{x.handling}</td>
                                <td className="weekend-red w-9">{x.fun}</td>
                                <td className="weekend-red w-9">{x.cool}</td>
                                <td className="w-1.5"></td>
                                <td className="weekend-red w-12">{x.weekend}</td>
                                <td className="w-1.5"></td>
                                <td className="daily-green w-9">{x.features}</td>
                                <td className="daily-green w-9">{x.comfort}</td>
                                <td className="daily-green w-9">{x.quality}</td>
                                <td className="daily-green w-9">{x.practical}</td>
                                <td className="daily-green w-9">{x.value}</td>
                                <td className="w-1.5"></td>
                                <td className="daily-green w-12">{x.daily}</td>
                                <td className="w-1.5"></td>
                                <td className="doug-grey w-32">{x.doug}</td>
                                <td className="w-3"></td>
                                <td className="w-24 bg-neutral-200">{x.vehicle_country}</td>
                                <td className="w-16 bg-neutral-200">
                                    <a href={x.video} target="_blank">
                                        <span className="[&>svg]:h-6 flex justify-center items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                 viewBox="0 0 576 512">
                                                <path
                                                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                                            </svg>
                                        </span>
                                    </a>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <hr className="border-t border-gray-200 mt-4 mb-4 w-[60rem]"/>

            <div>
                <footer className="text-gray-800 bg-white px-6 pt-4 pb-8">
                    <div className="container mx-auto flex flex-wrap justify-between items-center w-[45rem]">
                        <div className="w-full md:w-auto mb-4 md:mb-0 text-center md:text-left">
                            <a href="#" className="no-underline hover:underline text-2xl">Your Logo</a>
                        </div>
                        <div className="w-full md:w-auto mb-4 md:mb-0 text-center md:text-left">
                            <a href="#" className="no-underline hover:underline mr-4">Terms of Service</a>
                            <a href="#" className="no-underline hover:underline">Privacy Policy</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
