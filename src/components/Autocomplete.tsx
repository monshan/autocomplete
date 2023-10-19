import React, { useState, useEffect } from "react";

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
    const [currentTimer, setCurrentTimer] = useState<ReturnType<typeof setTimeout>>();

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
            let debouceTimer: ReturnType<typeof setTimeout> = setTimeout(() => {
                fetchCountryMatches();
            }, 1000)
    

            setLoading(true)
            setCurrentTimer(debouceTimer);
        }
    }, [searchTerm])

    return (
        <>
        <div className="bg-white xl:col-start-5 col-start-3 xl:col-span-5 col-span-4 self-center rounded-2xl py-4 px-4 shadow-lg grid grid-cols-4 relative row-start-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-center">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input id="searchInput" type="text" placeholder="Search for a country" className="col-span-3" onChange={(e) => setSearchTerm(e.target.value)}/>
            { searchTerm && <ol className="shadow-2xl bg-white absolute left-24 inset-x-0 top-16 max-h-48 overflow-y-auto">
                { loading ? <li className="p-3">Loading...</li> : countries.length && countries.map((country) => <li className="p-3 hover:bg-blue-600 hover:text-white truncate">{country.flag} {country.name.common}</li>)}
            </ol>}
        </div>
        </>
    )
}

export default Autocomplete;