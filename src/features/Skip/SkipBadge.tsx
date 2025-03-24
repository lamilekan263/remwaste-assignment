import { CheckCheckIcon, TriangleAlertIcon } from 'lucide-react'


const SkipBadge = ({ notAvailable, title }: { notAvailable?: boolean, title: string }) => {
    return (
        <div className={`flex items-center gap-2 ${notAvailable ? 'bg-red-300' : 'bg-green-300'} py-1 px-2 rounded-xl `}>
            {notAvailable ? <TriangleAlertIcon size={20} className='text-red-700' /> :
                <CheckCheckIcon size={20} className='text-green-700' />
            }
            <p className={`text-xs capitalize ${notAvailable ? 'text-red-700' : 'text-green-700'}`}>{title}</p>
        </div>
    )
}

export default SkipBadge