import SkipList from "../../features/Skip/SkipList"
import SkipSelectedFooter from "../../features/Skip/SkipSelectedFooter"
import SkipStepper from "../../features/Skip/SkipStepper"



const SkipPage = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white relative">
      <div className="container mx-auto px-10 py-8 pb-24 h-full">
        <SkipStepper />
        <div className="text-center mb-8">
          <h1 className="text-2xl  font-bold mb-3">Choose Your Skip Size</h1>
          <p className="text-slate-300">Select the skip size that best suits your needs</p>
        </div>
        <SkipList />
      </div>
      <SkipSelectedFooter />
    </div>
  )
}

export default SkipPage