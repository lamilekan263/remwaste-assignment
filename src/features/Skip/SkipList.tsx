import SkipCard from './SkipCard';
import { useSkipContext } from '../../providers/SkipProvider';
import Spinner from '../../components/Spinner';
import FilterSkipSection from './SkipFilterSection';
import Pagination from '../../components/pagination';

const SkipList = () => {

    const { paginatedSkips, handleSelectedSkip, selectedSkip, fetchSkipByLocationStatus } = useSkipContext()
    return (
        <>
            {fetchSkipByLocationStatus === 'IDLE' ? <p>Welcome</p> : null}
            {fetchSkipByLocationStatus === 'PENDING' ? <Spinner /> : null}
            {fetchSkipByLocationStatus === 'ERROR' ? <p>There was a problem</p> : null}

            {fetchSkipByLocationStatus === 'SUCCESS' ? (
                <div>
                    <FilterSkipSection />

                    < div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' >
                        {paginatedSkips.map(skip => <SkipCard key={skip.id}
                            skip={skip}
                            handleSelectedSkip={handleSelectedSkip}
                            isSelected={selectedSkip === skip}
                        />)}
                    </div>
                    <Pagination />
                </div>
            ) : null}
        </>
    )
}

export default SkipList