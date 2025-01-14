import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { Button } from "../components/ui/Button";
import { Redirect } from "../icons/others/Redirect";

export const Cs11 = () => {
    const [course, setCourse] = useState<any>(null);
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is logged in
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login"); // Redirect to login page if not logged in
            return;
        }

        // Fetch course details
        const fetchCourse = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/courses/cs11`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setCourse(response.data);
            } catch (err) {
                setError("Failed to fetch course details.");
            }
        };

        fetchCourse();
    }, [navigate]);

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    if (!course) {
        return <div className="text-white text-center">Loading...</div>;
    }

    return (
        <div className="my-12 bg-custom-1 flex items-center justify-center px-4">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-full">
                {/* <h1 className="text-3xl font-bold text-white mb-4">{course.title}</h1> */}
                <p className="text-white mb-6 text-center text-2xl md:text-3xl">{course.description}</p>

                <div className="space-y-4">
                    {course.lectures.map((lecture: any, index: number) => (
                        <div key={index} className="bg-gray-700 p-4 text-center md:flex justify-between items-center rounded-md">
                            <h3 className="text-xl text-white">{lecture.title}</h3>
                            {/* <a
                                href={lecture.videoUrl}
                                className="text-blue-400 font-extrabold animate-bounce hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Watch Lecture
                            </a> */}
                            
                            <div className="flex md:flex-row items-center flex-col justify-center gap-4">

                                <Button variant="primary" text="Lecture" endIcon={<Redirect/>} onClick={() => {window.open(lecture.videoUrl)}}/>
                                
                                <Button variant="primary" text="Notes" endIcon={<Redirect/>} onClick={() => {window.open(lecture.notesPdf)}}/>
                        
                            </div>
                    
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
