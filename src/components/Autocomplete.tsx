import React, {useState, useEffect} from "react";

interface AutocompleteProps {
    labelName: string;
}

interface CountryName {
    common: string;
    official: string;
}

interface Country {
    name: CountryName;
    flag: string;

}

const Autocomplete: React.FC<AutocompleteProps> = ({ labelName }) => {
    const [contries, setCountries] = useState<Country[]>([])

    useEffect(() => {
        const fetchCountryMatches = async () => {
            const response = await fetch(`https://restcountries.com/v3.1/name/united?fields=name,flag`)
            const data = await response.json()
            setCountries(data)
        }

        fetchCountryMatches();
    }, [])
   
    return (
    <>
        <label htmlFor="searchInput" className="xl:col-start-5 col-start-4 self-end">{labelName}</label>
        <input id="searchInput" type="text" placeholder="Search for a country" className="xl:col-span-4 col-span-3 self-end" />
        <ol className="row-start-2 xl:col-start-6 col-start-7 xl:col-span-4 col-span-3">
            { contries.map((country) => <li>{country.flag} {country.name.common} </li>)}
        </ol>
    </>
    )
}

export default Autocomplete;