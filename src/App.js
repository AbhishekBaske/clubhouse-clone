import PlanLayout from "./pages/Layouts/PlanLayout"
import Welcome from "./pages/Welcome"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PhoneConfirmation from "./pages/PhoneConfirmation"
import "./App.css"
function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/invite" element={<PhoneConfirmation/>} />
        </Routes>
      </PlanLayout>
    </BrowserRouter>
  )
}

export default App
