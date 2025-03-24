import React from 'react'

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
            <span className={`text-sm font-medium ${isActive ? "text-white" : isCompleted ? "text-blue-700" : "text-slate-400"}`}>
                {label}
            </span>
        </div>
    );
}

export default Step