import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

const Home = lazy(() => import("./screens/Home"))

const App = () => {
  return (
    <>
   <Suspense fallback={<div>Loading...</div>}>
   <BrowserRouter>
   <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
   </Suspense>
    </>
  )
}

export default App