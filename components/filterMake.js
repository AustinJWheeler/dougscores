'use client';

import useParams from "@/components/useParams";
import {useState} from 'react';
import {makes} from "@/doug_scores";

export default function FilterMake() {
    const params = useParams()
    const prm_makes = params.make && params.make.split(",")
    const [visible, setVisible] = useState(false)

    const onClick = () => {
        setVisible(true)
    }

    const onClickBackground = () => {
        setVisible(false)
    }

    const toggleMake = (make) => {
        params.set(prm_makes && prm_makes.some(x => x === make) ?
            {make: prm_makes.filter(x => x !== make)} :
            {make: (prm_makes || []).concat([make])});
    }

    return (
        <div className="relative inline-block">
            <button className="py-2 px-4 text-white no-underline hover:bg-green-900 flex flex-row"
                    onClick={onClick}>
                MAKE
                <svg className="w-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                     viewBox="0 0 448 512">
                    <path
                        d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                </svg>
            </button>
            <div
                className={`${visible ? '' : 'hidden'} z-50 origin-top-left absolute left-0 mt-1 border-4 border-green-700 bg-white text-center`}>
                <div className="p-1 overflow-scroll w-40 h-96 text-left" role="menu" aria-orientation="vertical"
                     aria-labelledby="options-menu">
                    {makes.map(x => {
                        return (
                            <p href="#"
                               onClick={() => toggleMake(x)}
                               className="flex flex-row block px-1 py-1 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                               role="menuitem">
                                <svg
                                    className={`${prm_makes && prm_makes.some(y => y === x) ? 'text-black' : 'text-transparent'} w-4 mr-2`}
                                    fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path
                                        d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
                                </svg>
                                {x}</p>
                        )
                    })}
                </div>
            </div>
            <div className={`${visible ? '' : 'hidden'} z-40 fixed inset-0`} onClick={onClickBackground}>
            </div>
        </div>
    )
}