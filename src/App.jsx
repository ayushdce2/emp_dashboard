import EmployeeHome from "./employee/EmployeeHome.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path="/emp_dashboard/*" element={<EmployeeHome/>}></Route>

      </Routes>
      
      </BrowserRouter>

      
    </>
  )
}

export default App
