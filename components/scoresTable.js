'use client';

import {dougScores} from "@/doug_scores";
import useParams from "@/components/useParams";

export default function ScoresTable() {
    const searchParams = useParams()
    const makes = searchParams.make && searchParams.make.split(',')
    const {sort, rev} = searchParams



    const filtered_list = makes ? dougScores.filter(x => makes.some(y => y === x.make)) : dougScores
    const sorted_list = filtered_list.sort((a, b) => (b[sort || 'doug'] - a[sort || 'doug']))
    const reversed_list = rev ? sorted_list.reverse() : sorted_list

    return (
        <table className="">
            <tbody>
            {reversed_list.map(x => (
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
                    <td className="w-12 bg-white dark:bg-black dark:text-white">
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
    )
}