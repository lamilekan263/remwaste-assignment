import { ArrowRight, Check } from 'lucide-react'
import React from 'react'
import { Skip } from '../../api/skipApi'



type Props = {
    skip: Skip,
    isSelected: Boolean
    handleSelectedSkip: (skip: Skip) => void
}
// 
const SkipCard: React.FC<Props> = ({ skip, isSelected, handleSelectedSkip }) => {
    return (
        <div onClick={() => handleSelectedSkip(skip)} className={`bg-neutral-800 rounded-lg p-6 capitalize cursor-pointer border-1 ${isSelected ? 'border-blue-800' : 'border-neutral-900 hover:border-blue-700'} `}>
            <div className='relative'>
                <div className={`${isSelected ? 'inline-block' : 'hidden'} bg-blue-700  p-1 rounded-full absolute right-2 top-2`}>
                    <Check />
                </div>
                <img src={skip.image} alt="" />
            </div>
            <div className='my-4 flex flex-row justify-between items-start gap-1'>
                <h1 className='text-xl font-bold'>{skip?.size} yard skip </h1>
                <div className=''>
                    <p className='text-xs text-gray-500'>Hire Period</p>
                    <h2 className='text-sm '>{skip.hire_period_days} day hire period</h2>
                </div>
            </div>

            <div className='my-4 flex flex-row items-end gap-3'>
                <span className='text-xl font-bold text-blue-700'>£ {skip.price_before_vat}</span>
                <span className='text-sm text-gray-500'>per week</span>
            </div>
            <button className='capitalize text-base  bg-neutral-900 rounded-lg w-full py-3 flex justify-center items-center gap-2'>
                Select this skip
                <ArrowRight />
            </button>

        </div>
    )
}



export default SkipCard
