import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { useNavigate } from "react-router-dom";
import { Redirect } from "../icons/others/Redirect";

export const SignupPage = () => {
    const navigate = useNavigate();

    return (
        <div className="my-12 flex items-center justify-center bg-custom-1 px-4">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md sm:w-96 md:w-80 lg:w-96 xl:w-96">
                {/* Header */}
                <h1 className="text-2xl font-bold text-white text-center mb-6">
                    Register to SWS
                </h1>

                {/* Input Fields */}
                <div className="space-y-4">
                    <Input type="text" placeholder="Enter Username" />
                    <Input type="email" placeholder="Enter email" />
                    <Input type="password" placeholder="Enter password" />

                    {/* Sign-Up Button */}
                    <div className="flex justify-center">
                        <Button
                            text="Sign Up"
                            variant="primary"
                            endIcon={<Redirect />}
                        />
                    </div>
                </div>

                {/* Sign-Up Section */}
                <p className="text-white text-center mt-6">
                    Already have an account?{" "}
                    <span
                        onClick={() => {
                            navigate("/login");
                        }}
                        className="text-blue-400 font-bold cursor-pointer hover:underline"
                    >
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
};
