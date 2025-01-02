import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center mt-16 px-4 md:px-8">
            <div className="flex flex-col justify-center gap-10 max-w-4xl">
                <div className="text-white text-center font-bold text-3xl md:text-4xl leading-tight">
                    "Empower Your Tech Journey with
                    <span
                        onClick={() => navigate("about")}
                        className="ml-3 animate-pulse text-blue-400 hover:-translate-y-1 cursor-pointer transition-all duration-500"
                    >
                        StudyWithShubh
                    </span>
                    "
                </div>

                <div className="text-custom-4 text-lg md:text-2xl text-center font-bold">
                    Join Our Courses to Master Coding, Computer Science, Web Development, and Beyond!
                </div>

                <div className="text-white flex flex-col md:flex-row justify-center items-center gap-4">
                    <img
                        src="./shubhimg.jpg"
                        alt="swsFounder!"
                        onClick={() => {window.open("https://shubhhere.vercel.app")}}
                        className="w-52 h-52 hover:-translate-y-2 transition-all duration-500 cursor-alias object-cover rounded-full shadow-lg"
                    />
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold">About the Founder & Developer</h2>
                        <p className="text-sm md:text-base mt-2">
                            Learn more about the vision and passion about Shubh.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
