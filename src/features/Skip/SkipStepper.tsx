import {
    MapPin,
    Trash2,
    Truck,
    FileCheck,
    Calendar,
    CreditCard,
} from "lucide-react";



function SkipStepper() {
    return (
        <div className="mb-12 overflow-x-auto">
            <div className="flex justify-between items-center gap-2 md:gap-4 w-max px-4">
                <Step icon={<MapPin className="w-5 h-5" />} label="Postcode" isCompleted={true} />
                <StepConnector isActive={true} />

                <Step icon={<Trash2 className="w-5 h-5" />} label="Waste Type" isCompleted={true} />
                <StepConnector isActive={true} />

                <Step icon={<Truck className="w-5 h-5" />} label="Select Skip" isActive={true} />
                <StepConnector />

                <Step icon={<FileCheck className="w-5 h-5" />} label="Permit Check" />
                <StepConnector />

                <Step icon={<Calendar className="w-5 h-5" />} label="Choose Date" />
                <StepConnector />

                <Step icon={<CreditCard className="w-5 h-5" />} label="Payment" />
            </div>
        </div>
    );
}

export default SkipStepper;


function Step({
    icon,
    label,
    isActive = false,
    isCompleted = false,
}: {
    icon: React.ReactNode
    label: string
    isActive?: boolean
    isCompleted?: boolean
}) {
    return (
        <div className="flex items-center gap-1">
            <div className={"flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200"}>
                {icon}
            </div>
            <span className={`text-sm font-medium ${isActive ? "text-white" : isCompleted ? "text-blue-500" : "text-slate-400"}`}>
                {label}
            </span>
        </div>
    );
}

function StepConnector({ isActive = false }) {
    return (
        <div className="w-16 md:w-14">
            <div className={`h-[1px] ${isActive ? "bg-blue-600" : "bg-slate-700"} transition-colors duration-200`}></div>
        </div>
    );
}