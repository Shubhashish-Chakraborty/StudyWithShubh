import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { DemoLectures } from "./pages/DemoLectures";
import { About } from "./pages/About";
import { LoginPage } from "./pages/Login";
import { SignupPage } from "./pages/Signup";

export default function App() {
    return (
        <div className="min-h-screen bg-custom-1 flex flex-col">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="demo" element={<DemoLectures />} />
                        <Route path="about" element={<About />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="signup" element={<SignupPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
