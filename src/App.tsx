import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { DemoLectures } from "./pages/DemoLectures";
import { About } from "./pages/About";
import { LoginPage } from "./pages/Login";
import { SignupPage } from "./pages/Signup";

import { Cs11 } from "./courses/Cs11";
import { Ip11 } from "./courses/Ip11";
import { AdminLogin } from "./pages/AdminLogin";
import { AddCourses } from "./courses/AddCourses";
import { OtherContent } from "./pages/OtherContent";

import { Python_Roadmap, Sem, Deploy_Backend } from "./components/ExternalLink";

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
                        <Route path="guide" element={<OtherContent />} />
                        <Route path="admin/login" element={<AdminLogin />} />
                        <Route path="courses/addCourses" element={<AddCourses />} />

                        <Route path="/courses/ip11" element={<Ip11 />} />
                        <Route path="/courses/cs11" element={<Cs11 />} />

                        <Route path="sem" element={<Sem/>}/>
                        <Route path="python" element={<Python_Roadmap/>}/>
			<Route path="deploy_typescript_backend" element={<Deploy_Backend/>}/>			

                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
