import {
    MapPin,
    Trash2,
    Truck,
    FileCheck,
    Calendar,
    CreditCard,
} from "lucide-react";
import StepConnector from "./StepConnector";
import Step from "./Step";

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