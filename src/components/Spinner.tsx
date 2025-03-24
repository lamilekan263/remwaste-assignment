

const Spinner = () => {
    return (
        <div className={`flex items-center justify-center`}>
            <div
                className='size-8 border-4 border-t-transparent border-gray-500rounded-full animate-spin'
            ></div>
        </div>
    );
};

export default Spinner;
