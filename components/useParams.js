import {useRouter, useSearchParams, usePathname} from "next/navigation";

function encodeURLParameters(params) {
    const encodedParams = [];

    for (let key in params) {
        if (params.hasOwnProperty(key)) {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(params[key]);
            encodedParams.push(`${encodedKey}=${encodedValue}`);
        }
    }

    return encodedParams.join('&');
}

function convertURLParams(searchParams) {
    const params = {};

    for (let [key, value] of searchParams.entries()) {
        params[key] = value;
    }

    return params;
}

export default function useParams() {
    const router = useRouter()
    const searchParams = convertURLParams(useSearchParams());
    const pathname = usePathname();

    const set = (params) => {
        router.push(`${pathname}?${encodeURLParameters({...searchParams, ...params})}`);
    }

    return {
        ...searchParams,
        set
    }
}