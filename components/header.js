'use client';

import useParams from "@/components/useParams";

export default function Header() {
    const params = useParams()

    const setSort = (sort) => {
        params.set(params.sort === sort && !params.rev ?
            {rev: '1'} :
            {sort, rev: ''})
    }

    return (
        <table className="disable-selection whitespace-nowrap">
            <thead>
            <tr>
                <th className="w-96" rowSpan="2"></th>
                <th className="weekend-red weekend-red-hover h-10" colSpan="5" onClick={() => setSort('weekend')}>WEEKEND</th>
                <th className="w-1.5"></th>
                <th className="w-12 weekend-red"></th>
                <th className="w-1.5"></th>
                <th className="daily-green daily-green-hover" colSpan="5" onClick={() => setSort('daily')}>DAILY</th>
                <th className="w-1.5"></th>
                <th className="w-12 daily-green"></th>
                <th className="w-1.5"></th>
                <th className="w-32 doug-grey hover:bg-neutral-700" rowSpan="2" onClick={() => setSort('doug')}>
                    <div className="flex justify-center items-center">
                        <p className="rotate-45 transform origin-center">
                            DOUGSCORE
                        </p>
                    </div>
                </th>
            </tr>
            <tr>
                <th className="w-9 h-32 weekend-red weekend-red-hover" onClick={() => setSort('styling')}>
                    <div className="flex justify-center items-center">
                        <p className="vert rotate-180 transform origin-center">
                            Styling
                        </p>
                    </div>
                </th>
                <th className="w-9 weekend-red weekend-red-hover" onClick={() => setSort('accel')}>
                    <div className="flex justify-center items-center">
                        <p className="vert rotate-180 transform origin-center">
                            Accel
                        </p>
                    </div>
                </th>
                <th className="w-9 weekend-red weekend-red-hover" onClick={() => setSort('handling')}>
                    <div className="flex justify-center items-center">
                        <p className="vert rotate-180 transform origin-center">
                            Handling
                        </p>
                    </div>
                </th>
                <th className="w-9 weekend-red weekend-red-hover" onClick={() => setSort('fun')}>
                    <div className="flex justify-center items-center">
                        <p className="vert rotate-180 transform origin-center">
                            Fun Factor
                        </p>
                    </div>
                </th>
                <th className="w-9 weekend-red weekend-red-hover" onClick={() => setSort('cool')}>
                    <div className="flex justify-center items-center">
                        <p className="vert rotate-180 transform origin-center">
                            Cool Factor
                        </p>
                    </div>
                </th>
                <th className=""></th>
                <th className="weekend-red weekend-red-hover" onClick={() => setSort('weekend')}>
                    <div className="flex justify-center items-center">
                        <p className="vert rotate-180 transform origin-center">
                            TOTAL
                        </p>
                    </div>
                </th>
                <th className=""></th>
                <th className="w-9 daily-green daily-green-hover" onClick={() => setSort('features')}>
                    <div className="flex justify-center items-center">
                        <p className="vert rotate-180 transform origin-center">
                            Features
                        </p>
                    </div>
                </th>
                <th className="w-9 daily-green daily-green-hover" onClick={() => setSort('comfort')}>
                    <div className="flex justify-center items-center">
                        <p className="vert rotate-180 transform origin-center">
                            Comfort
                        </p>
                    </div>
                </th>
                <th className="w-9 daily-green daily-green-hover" onClick={() => setSort('quality')}>
                    <div className="flex justify-center items-center">
                        <p className="vert rotate-180 transform origin-center">
                            Quality
                        </p>
                    </div>
                </th>
                <th className="w-9 daily-green daily-green-hover" onClick={() => setSort('practical')}>
                    <div className="flex justify-center items-center">
                        <p className="vert rotate-180 transform origin-center">
                            Practical
                        </p>
                    </div>
                </th>
                <th className="w-9 daily-green daily-green-hover" onClick={() => setSort('value')}>
                    <div className="flex justify-center items-center">
                        <p className="vert rotate-180 transform origin-center">
                            Value
                        </p>
                    </div>
                </th>
                <th className=""></th>
                <th className="daily-green daily-green-hover" onClick={() => setSort('daily')}>
                    <div className="flex justify-center items-center">
                        <p className="vert rotate-180 transform origin-center">
                            TOTAL
                        </p>
                    </div>
                </th>
                <th className=""></th>
                <th className="w-3"></th>
                <th className="w-12 p-0">
                    <div className="flex justify-center items-end">
                        <div className="flex justify-center items-center h-14 w-full">
                            <p className="">

                            </p>
                        </div>
                    </div>
                </th>
            </tr>
            </thead>
        </table>
    )
}
