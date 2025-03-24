import { ArrowRight } from 'lucide-react'
import { useSkipContext } from '../../providers/SkipProvider'


const SkipSelectedFooter = () => {

    const { selectedSkip } = useSkipContext()
    return (
        <div className={`h-16  w-full bg-neutral-800 ${selectedSkip ? 'fixed bottom-0' : 'hidden'}   py-4`}>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row justify-between  md:items-center'>
                    <div>skip footer</div>
                    <div className='flex justify-between items-center gap-5'>
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