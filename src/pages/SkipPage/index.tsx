import SkipList from "./components/Skip/SkipList"


const SkipPage = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <div className="container mx-auto px-10 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl  font-bold mb-3">Choose Your Skip Size</h1>
          <p className="text-slate-300">Select the skip size that best suits your needs</p>
        </div>
        {/* skipList */}

        <SkipList/>
      </div>
    </div>
  )
}

export default SkipPage