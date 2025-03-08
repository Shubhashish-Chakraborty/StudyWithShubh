import { About } from "../icons/NavbarIcons/About";
import { DemoLectures } from "../icons/NavbarIcons/DemoLectures";
import { Home } from "../icons/NavbarIcons/Home";
import { Login } from "../icons/NavbarIcons/Login";
import { Github } from "../icons/SocialIcons/Github";
import { Button } from "./ui/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu } from "../icons/NavbarIcons/Menu";
import { InfoBanner } from "./temp/Infobar";

const commonNavbarStyles =
    "flex flex-col items-center py-1 px-5 rounded-xl cursor-pointer font-bold hover:-translate-y-2 transition-all duration-500 shadow-md";

export const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path: string) => location.pathname === path;

    // Check if the user is logged in by checking for a token in localStorage (or sessionStorage)
    const isLoggedIn = localStorage.getItem('token') !== null;

    const handleLogout = () => {
        // Remove token from localStorage (or sessionStorage)
        localStorage.removeItem('token');
        // Redirect user to the homepage or login page
        navigate('/');
    };

    return (
        <>
            <div>
                <InfoBanner/>
            </div>
            <div className="bg-custom-2 sticky top-0 z-50 backdrop-blur-lg flex justify-between items-center px-4 py-4 md:px-16 md:py-8">
                {/* Logo Section */}
                <div
                    className="cursor-pointer hover:scale-110 transition-all duration-500"
                    onClick={() => navigate('/')}
                >
                    <img src="/swsBrandImg.png" className="w-32 md:w-48" alt="SwsBrandLogo!!" />
                </div>

                {/* LogIN Button for Mobile */}
                <div className="md:hidden">
                    {/* Only show the Login button if the user is not logged in */}
                    {!isLoggedIn && (
                        <Button onClick={() => navigate('login')} variant="primary" text="LogIN" startIcon={<Login />} />
                    )}

                    {/* Dont Show the Logout button if the user is logged in */}
                    {/* {isLoggedIn && (
                        <Button onClick={handleLogout} variant="other" text="LogOUT" />
                    )} */}
                </div>

                {/* Navigation Links for Desktop */}
                <div className="hidden md:flex justify-center gap-6 text-white">
                    <div
                        onClick={() => navigate('/')}
                        className={`${commonNavbarStyles} ${isActive('/') ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-white text-black hover:bg-blue-700 hover:text-white'
                            }`}
                    >
                        <Home />
                        Home
                    </div>
                    <div
                        onClick={() => navigate('/demo')}
                        className={`${commonNavbarStyles} ${isActive('/demo') ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-white text-black hover:bg-blue-700 hover:text-white'
                            }`}
                    >
                        <DemoLectures />
                        Demo Lectures
                    </div>
                    <div
                        onClick={() => navigate('/about')}
                        className={`${commonNavbarStyles} ${isActive('/about') ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-white text-black hover:bg-blue-700 hover:text-white'
                            }`}
                    >
                        <About />
                        About
                    </div>
                </div>

                {/* Buttons Section for Desktop */}
                <div className="hidden md:flex items-center gap-3">
                    {!isLoggedIn ? (
                        <Button onClick={() => navigate('login')} variant="primary" text="LogIN" startIcon={<Login />} />
                    ) : (
                        <Button onClick={handleLogout} variant="other" text="LogOUT" />
                    )}
                    <div
                        onClick={() =>
                            window.open("https://github.com/Shubhashish-Chakraborty/StudyWithShubh")
                        }
                    >
                        <Button variant="secondary" text="Github" endIcon={<Github />} />
                    </div>
                </div>

                {/* Mobile Menu Toggle Icon */}
                <div
                    className="flex md:hidden cursor-pointer text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Menu />
                </div>
            </div>

            {/* Dropdown Menu for Mobile */}
            {isMenuOpen && (
                <div className="md:hidden bg-custom-2 text-white flex flex-col items-center gap-4 py-4">
                    <div
                        onClick={() => {
                            navigate('/');
                            setIsMenuOpen(false);
                        }}
                        className={`${commonNavbarStyles} ${isActive('/') ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-white text-black hover:bg-blue-700 hover:text-white'
                            }`}
                    >
                        <Home />
                        Home
                    </div>
                    <div
                        onClick={() => {
                            navigate('/demo');
                            setIsMenuOpen(false);
                        }}
                        className={`${commonNavbarStyles} ${isActive('/demo') ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-white text-black hover:bg-blue-700 hover:text-white'
                            }`}
                    >
                        <DemoLectures />
                        Demo Lectures
                    </div>
                    <div
                        onClick={() => {
                            navigate('/about');
                            setIsMenuOpen(false);
                        }}
                        className={`${commonNavbarStyles} ${isActive('/about') ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-white text-black hover:bg-blue-700 hover:text-white'
                            }`}
                    >
                        <div className="flex flex-col items-center">
                            <About />
                            <span>About</span>
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            window.open("https://github.com/Shubhashish-Chakraborty/StudyWithShubh");
                            setIsMenuOpen(false);
                        }}
                    >
                        <Button variant="secondary" text="Github" endIcon={<Github />} />
                    </div>
                    {/* LogOut Button in Mobile */}
                    {isLoggedIn && (
                        <div onClick={handleLogout}>
                            <Button variant="other" text="LogOUT" />
                        </div>
                    )}
                </div>
            )}
        </>
    );
};
