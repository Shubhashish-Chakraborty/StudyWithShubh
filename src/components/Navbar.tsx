import { Home } from "../icons/NavbarIcons/Home";
import { Login } from "../icons/NavbarIcons/Login";
import { Github } from "../icons/SocialIcons/Github";
import { Button } from "./ui/Button";
import { useLocation, useNavigate } from "react-router-dom";

const commonNavbarStyles = "flex flex-col items-center py-1 px-5 rounded-xl cursor-pointer font-bold hover:-translate-y-2 transition-all duration-500 shadow-md";

export const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Determine the active tab based on the current path
    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            <div className="bg-custom-2 flex justify-between items-center">
                {/* Logo Section */}
                <div
                    className="cursor-pointer hover:-translate-y-2 transition-all duration-500"
                    onClick={() => navigate('/')}
                >
                    <img src="/swsBrandImg.png" className="w-48" alt="SwsBrandLogo!!" />
                </div>

                {/* Navigation Links */}
                <div className="flex justify-center px-16 py-8 gap-6 text-white">
                    <div
                        onClick={() => navigate('/')}
                        className={`${commonNavbarStyles} ${
                            isActive('/') ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-white text-black hover:bg-blue-700 hover:text-white'
                        }`}
                    >
                        <Home />
                        Home
                    </div>
                    <div
                        onClick={() => navigate('/demo')}
                        className={`${commonNavbarStyles} ${
                            isActive('/demo') ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-white text-black hover:bg-blue-700 hover:text-white'
                        }`}
                    >
                        <Home />
                        Demo Lectures
                    </div>
                    <div
                        onClick={() => navigate('/about')}
                        className={`${commonNavbarStyles} ${
                            isActive('/about') ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-white text-black hover:bg-blue-700 hover:text-white'
                        }`}
                    >
                        <Home />
                        About
                    </div>
                </div>

                {/* Buttons Section */}
                <div className="flex items-center gap-3">
                    <div>
                        <Button variant="primary" text="LogIN" startIcon={<Login />} />
                    </div>
                    <div
                        onClick={() =>
                            window.open("https://github.com/Shubhashish-Chakraborty/StudyWithShubh")
                        }
                    >
                        <Button variant="secondary" text="Github" endIcon={<Github />} />
                    </div>
                </div>
            </div>
        </>
    );
};
