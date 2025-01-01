import { BrowserRouter , Routes , Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { DemoLectures } from "./pages/DemoLectures";
import { About } from "./pages/About";

export default function App() {
    return(
        <div className="h-screen bg-custom-1">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}></Route>
                        <Route path="demo" element={<DemoLectures/>}></Route>
                        <Route path="about" element={<About/>}></Route>
                        <Route path="*" element={<NotFound/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
            
        </div>
    )
}