import { useState, useEffect } from "react"
import { fetchSkipByLocation, Skip } from "../api/skipApi"
import { ApiStatus } from "../api/api"

export const useFetchSkipByLocation = () => {

    const [skips, setSkips] = useState<Skip[]>([])
    const [fetchSkipByLocationStatus, setFetchSkipByLocationStatus] = useState<ApiStatus>('IDLE')
    


    async function initFetchSkipBylocation() {
        try {
            setFetchSkipByLocationStatus('PENDING')
            const response = await fetchSkipByLocation();
            if (response.status !== 200) {
                throw new Error(`API error: ${response.status}`)
            }

            console.log(response.data)

            const mappedDataToDto: Skip[] = response.data.map((skipItem: Skip) => ({
                ...skipItem,
                image: 'https:images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800',

            }))
            setSkips(mappedDataToDto)
            setFetchSkipByLocationStatus('SUCCESS')
        } catch (error) {
            setFetchSkipByLocationStatus('ERROR')
        } 
    }

    useEffect(() => {
        initFetchSkipBylocation()
    }, [])

    return {
        skips,
        fetchSkipByLocationStatus,
    }
}