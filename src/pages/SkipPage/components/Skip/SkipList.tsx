import { useFetchSkipByLocation } from '../../../../hooks/useFetchSkipByLocation';
import SkipCard from './SkipCard';

const SkipList = () => {

    const { skips, fetchSkipByLocationStatus } = useFetchSkipByLocation()

    return (
        <>
            {fetchSkipByLocationStatus === 'IDLE' ? <p>Welcome</p> : null}
            {fetchSkipByLocationStatus === 'PENDING' ? <p>Loading data...</p> : null}
            {fetchSkipByLocationStatus === 'ERROR' ? <p>There was a problem</p> : null}

            {fetchSkipByLocationStatus === 'SUCCESS' ? (
                < div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' >
                    {skips.map(skip => <SkipCard key={skip.id} skip={skip} />)}
                </div>
            ) : null}
        </>
    )
}

export default SkipList


// {
//     fetchSkipByLocationStatus === 'SUCCESS' ? (
//         {
//                 < div className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' >
//         skips.map(skip => <SkipCard skip={skip} />
//         </ >
//                 )
// }
//             ) : null}