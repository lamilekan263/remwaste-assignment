import { useEffect, useState } from 'react'
import { Skip } from '../../../../types';
import SkipCard from './SkipCard';
import data from '../../../../data.json';
const SkipList = () => {

    // const [skips, setSkips] = useState<Skip[]>([])
    const [skips, setSkips] = useState(data)

    // useEffect(() => {
    //     const fetchSkips = async () => {
    //         try {
    //             // const response = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
    //             // console.log(response)
    //             // if (!response.ok) {
    //             //     throw new Error(`API error: ${response.status}`)
    //             // }

    //             // const data = await response.json();

    //             // const mappedDataToDto: Skip[] = data.map((skipItem: any) => ({
    //             //     id: skipItem.id,
    //             //     size: skipItem.size,
    //             //     image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800',
    //             //     hire_period_days: skipItem.hire_period_days,
    //             //     transport_cost: skipItem.transport_cost,
    //             //     per_tonne_cost: skipItem.per_tonne_cost,
    //             //     price_before_vat: skipItem.price_before_vat,
    //             //     vat: skipItem.vat,
    //             //     postcode: skipItem.postcode,
    //             //     area: skipItem.area,
    //             //     forbidden: skipItem.forbidden,
    //             //     created_at: skipItem.created_at,
    //             //     updated_at: skipItem.updated_at,
    //             //     allowed_on_road: skipItem.allowed_on_road,
    //             //     allows_heavy_waste: skipItem.allows_heavy_waster
    //             // }))
    //             // console.log(mappedDataToDto)
    //             setSkips(data)
                 
    //         } catch (error) {
    //             console.log('error', error)
    //         }
    //     }
    //     fetchSkips()
    // }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {skips.map(skip => <SkipCard skip={skip} />)}

        </div>
    )
}

export default SkipList