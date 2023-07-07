import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from './pages/Home';
// import About from "./pages/About";
// import Quiz from "./pages/Quiz";
// import ErrorPage from "./pages/error-page";


export default function App() {
  return (
    <>
    <Outlet />
    </>
    // <div className="wrapper">
    //   <BrowserRouter>
    //   <Routes>
    //   <Route exact path="/" element={<Home/>}/>
    //   <Route exact path="/about" element={<About/>}/>
    //   <Route exact path="/quiz" element={<Quiz/>}/>
    //   <Route exact path="*" element={<ErrorPage/>}/>
    //   </Routes>
    //   </BrowserRouter>
    // </div>
  )
}