import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Redirect } from "../icons/others/Redirect";
import { CourseCard } from "../components/ui/CourseCard";

export const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center mt-16 px-4 md:px-8 bg-custom-1 min-h-screen">
            <div className="flex flex-col justify-center gap-10 max-w-4xl w-full">
                {/* Title Section */}
                <div className="text-white text-center font-bold text-3xl md:text-4xl hover:scale-105 transition-all duration-200 cursor-pointer leading-tight">
                    "Empower Your Tech Journey with
                    <span
                        onClick={() => navigate("about")}
                        className="ml-3 animate-pulse text-blue-400 hover:-translate-y-1 cursor-pointer transition-all duration-500"
                    >
                        StudyWithShubh
                    </span>
                    "
                </div>

                {/* Subtitle Section */}
                <div className="text-custom-4 text-lg md:text-2xl text-center animate-bounce font-bold">
                    Join Our Courses to Master Coding, Computer Science, Web Development, and Beyond!
                </div>

                {/* Founder Section */}
                <div className="text-white flex flex-col md:flex-row justify-center items-center gap-6">
                    <img
                        src="./shubhimg.jpg"
                        alt="swsFounder!"
                        onClick={() => window.open("https://shubhhere.vercel.app")}
                        className="w-40 h-40 md:w-52 md:h-52 hover:-translate-y-2 transition-all duration-500 cursor-alias object-cover rounded-full shadow-lg"
                    />
                    <div className="text-center md:text-left max-w-sm">
                        <h2 className="text-xl font-bold">About the Founder & Developer</h2>
                        <p className="text-sm md:text-base mt-2">
                            Learn more about the vision and passion about Shubh.
                        </p>
                    </div>
                </div>

                {/* What You Can Learn Section */}
                <div className="mt-10">
                    <div className="text-white text-2xl md:text-4xl text-center mb-8">
                        What you can Learn:
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <div
                            className="flex justify-center w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
                            onClick={() => navigate('demo')}
                        >
                            <Button variant="primary" text="Demo" endIcon={<Redirect />} />
                        </div>

                        <div className="w-full max-w-2xl px-4 bg-gray-800 py-6 rounded-lg shadow-md">
                            <div className="flex flex-wrap justify-center gap-6">
                                <CourseCard title="hello world" thumbnail="./courseThumbnails/csPython.png" />
                                <CourseCard title="hello world" thumbnail="./courseThumbnails/ipPython.png" />
                                <CourseCard title="hello world" thumbnail="./courseThumbnails/ipMysql.png" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
