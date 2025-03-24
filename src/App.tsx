import SkipPage from "./pages/SkipPage"
import { SkipProvider } from "./providers/SkipProvider"


function App() {
  return (
    <SkipProvider>
      <SkipPage />
    </SkipProvider>

  )
}

export default App