import "./App.css"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Layout } from "./components/layout"
import { ProductPage } from "./pages/Product"
import { DashboardPage } from "./pages/dashboard"

function App() {


  return (
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Layout/>}>
            <Route index element = {<DashboardPage/>}/>
            <Route path = "/products" element = {<ProductPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
