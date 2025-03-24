import { ArrowRight } from 'lucide-react'
import { useSkipContext } from '../../providers/SkipProvider'


const SkipSelectedFooter = () => {

    const { selectedSkip } = useSkipContext()
    return (
        <div className={`  w-full bg-neutral-800 ${selectedSkip ? 'fixed bottom-0' : 'hidden'}   py-4`}>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-between  md:items-center gap-2'>
                    <div className='flex justify-between gap-10'>
                        <div>
                            <h1 className='text-blue-700 text-2xl md:text-4xl font-bold'>
                                £ {Math.floor(
                                    (selectedSkip?.price_before_vat ?? 0) +
                                    ((selectedSkip?.price_before_vat ?? 0) * (selectedSkip?.vat ?? 0) / 100)
                                )}
                            </h1>
                        </div>
                        <div className='text-sm'>
                            <h1>{selectedSkip?.size} Yard Skip</h1>
                            <p>{selectedSkip?.hire_period_days} Days Hire</p>
                        </div>
                    </div>
                    <div className='flex  md:justify-between items-center gap-10 md:gap-3'>
                        <button className='w-full capitalize text-base bg-gray-600 py-2 px-3 rounded-md'>
                            Back
                        </button>
                        <button className='w-full capitalize text-base  bg-blue-700  rounded-md py-2 px-3  flex justify-center items-center gap-2'>
                            Continue
                            <ArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkipSelectedFooter