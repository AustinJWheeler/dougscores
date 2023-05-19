import FilterMake from "@/components/filterMake";
import SortBy from "@/components/sortBy";

export default function Filters() {
    return (
        <ul className="flex items-center">
            <li className="mr-4 bg-green-700">
                <FilterMake/>
            </li>
            <li className=" bg-green-700">
                <SortBy/>
            </li>
        </ul>
    )
}