import SkipCard from './SkipCard';
import { useSkipContext } from '../../providers/SkipProvider';

const SkipList = () => {

    const { paginatedSkips, handleSelectedSkip, selectedSkip, fetchSkipByLocationStatus } = useSkipContext()
    return (
        <>
            {fetchSkipByLocationStatus === 'IDLE' ? <p>Welcome</p> : null}
            {fetchSkipByLocationStatus === 'PENDING' ? <p>Loading data...</p> : null}
            {fetchSkipByLocationStatus === 'ERROR' ? <p>There was a problem</p> : null}

            {fetchSkipByLocationStatus === 'SUCCESS' ? (
                < div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' >
                    {paginatedSkips.map(skip => <SkipCard key={skip.id}
                        skip={skip}
                        handleSelectedSkip={handleSelectedSkip}
                        isSelected={selectedSkip === skip}
                    />)}
                </div>
            ) : null}
        </>
    )
}

export default SkipList