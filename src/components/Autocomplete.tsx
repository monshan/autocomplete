import React, { useState, useEffect } from "react";
import DebounceDelay from "./DebounceDelay";

interface CountryName {
    common: string;
    official: string;
}

interface Country {
    name: CountryName;
    flag: string;

}

const Autocomplete: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [countries, setCountries] = useState<Country[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [delayTime, setDelayTime] = useState<number>(1000)
    const [currentTimer, setCurrentTimer] = useState<ReturnType<typeof setTimeout>>();

    const renderCountryListItems = () => {
        if (countries.length) {
            return countries.map(({ flag, name }) => <li key={name.official} className="p-3 hover:bg-blue-600 hover:text-white truncate">{flag} {name.common}</li>)
        }
        
        return <li key="no-matches" className="p-3">No matches</li>
    }

    useEffect(() => {
        if (currentTimer) {
            clearTimeout(currentTimer)
        }

        const fetchCountryMatches = async () => {
            const response = await fetch(`https://restcountries.com/v3.1/name/${searchTerm}?fields=name,flag`)
            const data = await response.json()
            setCountries(data)
            setLoading(false)
        }

        if (searchTerm) {    
            setLoading(true)

            let debounceTimer: ReturnType<typeof setTimeout> = setTimeout(() => {
                fetchCountryMatches();
            }, delayTime)

            setCurrentTimer(debounceTimer);
        }
    }, [searchTerm])

    return (
        <div className="xl:col-start-4 xl:col-span-6 col-span-4 row-start-2 xl:row-span-4 flex flex-col justify-center gap-8 px-8">
        <DebounceDelay delayTime={delayTime} setDelayTime={setDelayTime} />
        <div className="bg-white rounded-2xl py-4 px-4 shadow-lg grid grid-cols-4 relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-center">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input id="searchInput" type="text" placeholder="Search for a country" className="col-span-3 pl-4" onChange={(e) => setSearchTerm(e.target.value)}/>
            {searchTerm && <ol className="shadow-2xl bg-white absolute left-24 inset-x-0 top-16 max-h-48 overflow-y-auto">
                { loading ? 
                    <li key="loading" className="p-3">Loading...</li> : 
                    renderCountryListItems()
                }
            </ol>}
        </div>
        </div>
    )
}

export default Autocomplete;