import { Routes,Route} from "react-router-dom"
import { Home } from "./page/Home"
import { Header } from "./components/Header"
import { Faourite } from "./page/Faourite"
import { Details } from "./page/Details"
function App() {
  
  return (
    <>
     <div className="min-h-screen p-6 bg-white text-gray-600 text-lg"></div>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/faourite" element={<Faourite/>}/>
      <Route path="/details/:id" element={<Details/>} />
     </Routes>
    </>
  )
}

export default App
