function StepConnector({ isActive = false }) {
    return (
        <div className="w-16 md:w-14">
            <div className={`h-[1px] ${isActive ? "bg-blue-600" : "bg-slate-700"} transition-colors duration-200`}></div>
        </div>
    );
}

export default StepConnector