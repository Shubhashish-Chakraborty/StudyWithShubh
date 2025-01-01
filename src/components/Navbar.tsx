import { Home } from "../icons/NavbarIcons/Home"
import { Login } from "../icons/NavbarIcons/Login";
import { Github } from "../icons/SocialIcons/Github";
import { Button } from "./ui/Button"

const commonNavbarStyles = "flex flex-col items-center py-1 px-5 rounded-xl cursor-pointer hover:bg-blue-300 hover:text-black bg-gray-800 font-bold hover:-translate-y-3 transition-all duration-500 shadow-md";

export const Navbar = () => {
    return (
        <>
            <div className="bg-custom-2 flex justify-between items-center">
                <div className="cursor-pointer hover:-translate-y-2 transition-all duration-500">
                    <img src="/swsBrandImg.png" className="w-48" alt="SwsBrandLogo!!" />
                </div>

                <div className="flex justify-center px-16 py-8 gap-6 text-white">
                    <div className={`${commonNavbarStyles}`}>
                        <Home/>
                        Home
                    </div>
                    <div className={`${commonNavbarStyles}`}>
                        <Home/>
                        Home
                    </div>
                    <div className={`${commonNavbarStyles}`}>
                        <Home/>
                        Home
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div>
                        <Button variant="primary" text="LogIN" startIcon={<Login/>} />
                    </div>
                    <div>
                        <Button variant="secondary" text="Github" endIcon={<Github/>}/>
                    </div>
                </div>
            </div>
        </>
    )
}