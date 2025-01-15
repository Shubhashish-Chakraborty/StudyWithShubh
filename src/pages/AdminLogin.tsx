import { useRef, useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Login } from "../icons/NavbarIcons/Login";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const AdminLogin = () => {
    const navigate = useNavigate();

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async () => {
        setError("");
        setMessage("");

        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if (!email || !password) {
            setError("Both email and password are required.");
            return;
        }

        try {
            const response = await axios.post(`${BACKEND_URL}/api/login/admin`, {
                email,
                password,
            });

            const { token, courses } = response.data;

            // Store token in localStorage
            localStorage.setItem("token", token);

            if (!courses || courses.length === 0) {
                setMessage("You are not assigned the course, wait for the admin to assign.");
            } else {
                // Redirect to the first course page (you can customize this if needed)
                navigate(`/courses/${courses}`);
            }
        } catch (err: any) {
            setError(err.response?.data?.message || "Login failed. Please try again.");
        }
    };

    return (
        <div className="my-12 bg-custom-1 flex flex-col items-center justify-center px-4">
            <h1 className="text-red-400 text-xl md:text-4xl font-extrabold animate-pulse cursor-pointer hover:-translate-y-4 transition-all duration-500">
                ONLY FOR ADMIN
            </h1>
            <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md sm:w-96 md:w-80 lg:w-96 xl:w-96">
                <h1 className="text-2xl font-bold text-blue-500 hover:underline cursor-pointer text-center mb-6">
                    Login as Admin
                </h1>

                <div className="space-y-4">
                    <Input type="email" placeholder="Enter email" ref={emailRef} />
                    <Input type="password" placeholder="Enter password" ref={passwordRef} />

                    {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                    {message && <p className="text-yellow-500 text-center mt-4">{message}</p>}

                    <div className="flex justify-center">
                        <Button
                            text="Login"
                            variant="other"
                            endIcon={<Login />}
                            onClick={handleLogin}
                        />
                    </div>
                </div>

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
