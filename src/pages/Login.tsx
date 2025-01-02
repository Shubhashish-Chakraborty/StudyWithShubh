import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Login } from "../icons/NavbarIcons/Login";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <div className="my-12 bg-custom-1 flex items-center justify-center px-4">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md sm:w-96 md:w-80 lg:w-96 xl:w-96">
                {/* Header */}
                <h1 className="text-2xl font-bold text-white text-center mb-6">
                    Login to Your Account
                </h1>

                {/* Input Fields */}
                <div className="space-y-4">
                    <Input type="email" placeholder="Enter email" />
                    <Input type="password" placeholder="Enter password" />

                    {/* Login Button */}
                    <div className="flex justify-center">
                        <Button text="Login" variant="primary" endIcon={<Login />} />
                    </div>
                </div>

                {/* Sign-Up Section */}
                <p className="text-white text-center mt-6">
                    Don’t have an account?{" "}
                    <span
                        onClick={() => {
                            navigate("/signup");
                        }}
                        className="text-blue-400 font-bold cursor-pointer hover:underline"
                    >
                        Sign Up
                    </span>
                </p>
            </div>
        </div>
    );
};
