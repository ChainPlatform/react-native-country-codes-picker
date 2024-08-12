import { countryCodes } from "../constants/countryCodes"

export const countriesRemover = excludedCountries => {
    return countryCodes?.filter(country => {
        return !excludedCountries?.find(
            short => country?.code === short?.toUpperCase()
        )
    })
}
