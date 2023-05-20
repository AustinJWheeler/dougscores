'use client';

import useParams from "@/components/useParams";
import {useState} from 'react';
import {makes} from "@/doug_scores";

const buttons = [
    {
        text: 'DOUGSCORE',
        rev: "WORST DOUGSCORE",
        match: 'doug',
        className: 'hover:bg-gray-200',
    },
    {
        text: 'WEEKEND',
        rev: "WORST WEEKEND",
        match: 'weekend',
        className: 'weekend-red weekend-red-hover mt-2',
    },
    {
        text: 'STYLING',
        rev: "UGLIEST",
        match: 'styling',
        className: 'weekend-red weekend-red-hover mt-1',
    },
    {
        text: 'ACCEL',
        rev: "SLOWEST",
        match: 'accel',
        className: 'weekend-red weekend-red-hover',
    },
    {
        text: 'HANDLING',
        rev: "WORST HANDLING",
        match: 'handling',
        className: 'weekend-red weekend-red-hover',
    },
    {
        text: 'MOST FUN',
        rev: "LEAST FUN",
        match: 'fun',
        className: 'weekend-red weekend-red-hover',
    },
    {
        text: 'COOLEST',
        rev: "LEAST COOL",
        match: 'cool',
        className: 'weekend-red weekend-red-hover',
    },
    {
        text: 'DAILY',
        rev: "WORST DAILY",
        match: 'daily',
        className: 'daily-green daily-green-hover mt-2',
    },
    {
        text: 'FEATURES',
        rev: "LEAST FEATURES",
        match: 'features',
        className: 'daily-green daily-green-hover mt-1',
    },
    {
        text: 'COMFORT',
        rev: "LEAST COMFORT",
        match: 'comfort',
        className: 'daily-green daily-green-hover',
    },
    {
        text: 'QUALITY',
        rev: "WORST QUALITY",
        match: 'quality',
        className: 'daily-green daily-green-hover',
    },
    {
        text: 'PRACTICAL',
        rev: "LEAST PRACTICAL",
        match: 'practical',
        className: 'daily-green daily-green-hover',
    },
    {
        text: 'VALUE',
        rev: "WORST VALUE",
        match: 'value',
        className: 'daily-green daily-green-hover',
    }
]


export default function SortBy() {
    const params = useParams()
    const [visible, setVisible] = useState(false)

    const onClick = () => {
        setVisible(true)
    }

    const onClickBackground = () => {
        setVisible(false)
    }

    const setSort = (sort) => {
        params.set((params.sort || 'doug') === sort && !params.rev ?
            {rev: '1'} :
            {sort, rev: ''})
        setVisible(false)
    }

    return (
        <div className="relative inline-block">
            {
                <button
                        className=" py-2 pl-4 pr-2 text-white no-underline hover:bg-green-900 flex flex-row"
                        onClick={onClick}>
                        SORT BY
                        <p className="bg-white flex flex-row px-1 ml-3 text-green-700">
                            {params.rev ?
                                buttons.find(x => x.match === (params.sort || 'doug')).rev :
                                buttons.find(x => x.match === (params.sort || 'doug')).text}

                            <svg className="w-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 448 512">
                                <path
                                    d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                            </svg>
                        </p>
                    </button>
            }
            <div
                className={`${visible ? '' : 'hidden'} z-50 origin-top-right absolute right-0 mt-1 border-4 border-green-700 bg-white text-center`}>
                <div className="p-1 overflow-scroll h-96 text-left" role="menu" aria-orientation="vertical"
                     aria-labelledby="options-menu">
                    {
                        buttons.map(x => {
                            return (
                                <button onClick={() => setSort(x.match)}
                                        className={`${x.className} w-full text-left block px-4 py-2 text-sm text-gray-700 hover:text-gray-900`}
                                        role="menuitem">{x.text}</button>
                            )
                        })
                    }
                </div>
            </div>
            <div className={`${visible ? '' : 'hidden'} z-40 fixed inset-0`} onClick={onClickBackground}>
            </div>
        </div>
    )
}